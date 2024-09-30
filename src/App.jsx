import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./page/signIn";
import SignUp from "./page/signUp";
import StudentDashboard from "./page/studentPage";
import AdminDashboard  from "./page/teacherPage";
import DataTable from "./page/data-table";
import TeacherCards from "./page/teacher-info";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="/signIn" element={<SignInSide />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/teacherPage" element={<AdminDashboard  />} />
        <Route path="/studentPage" element={<StudentDashboard />} />
        <Route path="/teacher-info" element={<TeacherCards />} />
      </Routes>
    </Router>
  );
}

export default App;
