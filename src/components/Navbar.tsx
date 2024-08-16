// import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
 const navigate = useNavigate();

  return (
    <nav className="navbar_class">
      <NavLink 
        to="/home" 
        className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} 
        style={{ textDecoration: 'none' }}
      >
        Home
      </NavLink>

      <NavLink
        to="/login" 
        className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} 
        style={{ textDecoration: 'none' }}
      >
        Login
      </NavLink>

      <div>
        <p 
          onClick={() => navigate("/signUp")} 
          className="su_button"
        >
          Sign Up
        </p>
        {/* <p onClick={() => console.log("I am here")} className="su_button">Sign Up</p> */}
      </div>
    </nav>
  );
};

export default Navbar;
