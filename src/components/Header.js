import React from "react";
import Logo from "../assets/images/logo.png";
import "../styles/Header.css";
import { BsFillSunFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";

function Header() {
  return (
    <header className="header-container">
      <div className="header-item">
        <div className="header-left-item-div">
          <img className="header-logo" src={Logo} alt="Logo-icon" />
          <div className="header-links">
            <a href="#" className="header-link">
              Home
            </a>
            <a href="#" className="header-link">
              Courses
            </a>
            <a href="#" className="header-link">
              Blog
            </a>
            <a href="#" className="header-link">
              About Us
            </a>
          </div>
        </div>
        <div className="header-right-item-div">
          <BsFillSunFill className="theme-item" style={{ fontSize: "30px" }} />
          <FaShoppingCart
            className="shop-basket-item"
            style={{ fontSize: "30px" }}
          />
          <a href="#" className="header-link">
            <BiLogIn style={{ fontSize: "30px" }} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
