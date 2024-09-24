import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./page/signIn";
import SignUp from "./page/signUp";
import Pagec from "./page/default_main";
import Teacher from "./page/teacher";
import Department from "./page/department";
import Document from "./page/document";
function App() {
  return (
    <Router>
      <div>
        {/* แสดง Navbar ตลอดเวลา */}
        <Routes>
          <Route path="/" element={<Pagec />} /> {/* Home page */}
          <Route path="/signIn" element={<SignInSide />} /> {/* SignInSide */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/department" element={<Department />} />
          <Route path="/document" element={<Document />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
