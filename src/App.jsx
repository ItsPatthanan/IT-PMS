import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from "./page/login";
import SignUp from "./page/register";
import DefaultPage from "./page/default";
import TracherCard from "./page/tracher";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/teacher" element={< TracherCard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
