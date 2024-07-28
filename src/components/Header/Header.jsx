import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import "../App.css";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();

  const handleOpenMobileNav = () => {
    setMobileNav(true);
  };

  const handleCloseMobileNav = () => {
    setMobileNav(false);
  };

  return (
    <header>
      <div className="container">
        <a className="logo">
          <img src="../logo.webp" alt="Logo" />
        </a>
        <ul className={`navbar ${mobileNav ? "opened" : ""}`}>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="about">about</NavLink>
          </li>
          <li>
            <NavLink to="team">team</NavLink>
          </li>
          <li>
            <NavLink to="blogs">blog</NavLink>
          </li>
          <li>
            <NavLink to="shopPage">shop</NavLink>
          </li>
          <li>
            <NavLink to="contact">contact</NavLink>
          </li>
          <span className="close" onClick={handleCloseMobileNav}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </ul>

        <span className="bars" onClick={handleOpenMobileNav}>
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
    </header>
  );
}

export default Header;
