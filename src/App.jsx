import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./page/signIn";
import DefaultPage from "./page/default"; // import หน้า SignInSide

function App() {
  return (
    <Router>
      <div>
        {/* แสดง Navbar ตลอดเวลา */}
        <Routes>
          <Route path="/" element={<DefaultPage />} /> {/* Home page */}
          <Route path="/signin" element={<SignInSide />} /> {/* SignInSide */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
