import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./page/signIn";
import DefaultPage from "./page/default"; // import หน้า SignInSide
import SignUp from "./page/signUp";
import Pagec from "./page/default_copy";
import Teacher from "./page/teacher";
function App() {
  return (
    <Router>
      <div>
        {/* แสดง Navbar ตลอดเวลา */}
        <Routes>
          <Route path="/" element={<DefaultPage />} /> {/* Home page */}
          <Route path="/signIn" element={<SignInSide />} /> {/* SignInSide */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/default_copy" element={<Pagec />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
