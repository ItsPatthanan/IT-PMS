import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate สำหรับการนำทาง

function Navbar() {
  const navigate = useNavigate(); // ฟังก์ชันสำหรับนำทาง

  const handleSignIn = () => {
    navigate("/signin"); // นำทางไปยังหน้า SignIn
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        position: "fixed",
        top: 0,
        width: "100%",
        height: "60px",
        zIndex: 1000,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* โลโก้ */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#000" }}
            onClick={() => navigate("/")}
          >
            <span style={{ color: "#FFC107" }}>IT</span>-PMS
          </Typography>
          <Box sx={{ display: "flex", gap: 3, marginLeft: 3 }}>
            <Button
              className="teacher"
              sx={{ color: "#9e9e9e", textTransform: "none" }}
              onClick={() => navigate("/teacher")}
            >
              ข้อมูลอาจารย์
            </Button>
            <Button
              className="department"
              sx={{ color: "#9e9e9e", textTransform: "none" }}
            >
              แผนกเทคโนโลยีสารสนเทศ
            </Button>
          </Box>
        </Box>

        {/* ปุ่มเข้าสู่ระบบ */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFC107",
              color: "#000",
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={handleSignIn} // เมื่อกดจะนำไปยังหน้า SignIn
          >
            <LockIcon sx={{ marginRight: "5px" }} />
            เข้าสู่ระบบ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
