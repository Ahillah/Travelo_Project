import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./Components/Pages/Auth/SignUp.jsx";
import SignUPT from "./Components/Pages/Auth/SignUPT.jsx";
import SignUpH from "./Components/Pages/Auth/SignUPH.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignUPT" element={<SignUPT />} /> 
        <Route path="/SignUpH" element={<SignUpH />} />
      </Routes>
    </Router>
  );
};

export default App;