import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./Components/Pages/Auth/SignUp.jsx";
import SignUPT from "./Components/Pages/Auth/SignUPT.jsx";
import SignUpH from "./Components/Pages/Auth/SignUPH.jsx";
import Login from "./Components/Pages/Auth/Login.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignUPT" element={<SignUPT />} />
        <Route path="/SignUPH" element={<SignUpH />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
