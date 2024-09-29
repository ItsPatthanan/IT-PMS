import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./page/signIn";
import SignUp from "./page/signUp";
import StudentPage from "./page/studentPage";
import TeacherPage from "./page/teacherPage";
import DataTable from "./page/data-table";
import Document from "./page/document-info";
function App() {
  return (
    <Router>
      <div>
        {/* แสดง Navbar ตลอดเวลา */}
        <Routes>
          <Route path="/" element={<DataTable />} /> 
          <Route path="/signIn" element={<SignInSide />} /> 
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/TeacherPage" element={<TeacherPage />} />
          <Route path="/StudentPage" element={<StudentPage />} />
          <Route path="/document" element={<Document />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
