import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";

const app = express();
const saltRounds = 10;
const secretKey = "itpmslogin";

// Middleware
app.use(cors());
const jsonParser = bodyParser.json();

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "it-pms",
});

// Register Route
app.post("/signUp", jsonParser, (req, res) => {
  const { email, password, fname, lname } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return res.json({ status: "error", message: err });
    }

    connection.execute(
      "INSERT INTO users (email, password, fname, lname) VALUES (?, ?, ?, ?)",
      [email, hash, fname, lname],
      (err) => {
        if (err) {
          return res.json({ status: "error", message: err });
        }
        res.json({ status: "ok", message: "User created successfully" });
      }
    );
  });
});

// Login Route
app.post("/signIn", jsonParser, (req, res) => {
  const { email, password } = req.body;

  connection.execute(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, users) => {
      if (err) {
        return res.json({ status: "error", message: err });
      }

      if (users.length === 0) {
        return res.json({ status: "error", message: "User not found" });
      }

      const user = users[0];
      bcrypt.compare(password, user.password, (err, isLogin) => {
        if (isLogin) {
          const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: "1h" });
          res.json({ status: "ok", message: "Login successful", token });
        } else {
          res.json({ status: "error", message: "Login failed" });
        }
      });
    }
  );
});

// Authentication Route
app.post("/authen", jsonParser, (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secretKey);
    res.json({ status: "ok", message: decoded });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

// สร้าง API endpoint
app.get('/api/projects', (req, res) => {
  const sqlQuery = 'SELECT * FROM project-public'; // เปลี่ยนเป็นชื่อตารางของคุณ
  connection.query(sqlQuery, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Start the server
app.listen(3333, () => {
  console.log("CORS-enabled web server listening on port 3333");
});
