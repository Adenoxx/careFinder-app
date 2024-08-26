import { Routes, Route, Navigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HospitalSearch from "./pages/HospitalSearch";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {" "}
      
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="hospitalSearch" element={<HospitalSearch />}></Route>
        </Routes>
    </>
  );
}

export default App;
