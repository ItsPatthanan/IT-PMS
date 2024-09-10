import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from "./components/login";
import SignUp from "./components/register";
import StickyFooter from "./components/defPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/defPage" element={<StickyFooter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
