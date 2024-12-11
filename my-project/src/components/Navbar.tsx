import React from "react";
import "../Style/HomePage.css";
import logo from "../images/Black and White Simple Market Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <div className="container-navbar">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="" className="navbar-logo-img" onClick={()=>{navigate("/")}} />
        </div>
        <div className="navbar-menu">
          <span className="navbar-menu-contains">Home</span>
          <span className="navbar-menu-contains">Menu</span>
          <span className="navbar-menu-contains">Products</span>
          <span className="navbar-menu-contains">Basket</span>
        </div>
        <div className="Search"></div>
        <div className="container-navbar-log-sign">
          <div
            className="navbar-log-sign"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign-in
          </div>
          <div
            className="navbar-log-sign"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
