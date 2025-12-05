import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Auth/Login";
import ForgotPassword from "./Components/Pages/Auth/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


