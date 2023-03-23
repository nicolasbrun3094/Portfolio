import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-container">
      <h1 className="title">Portfolio.</h1>
      <button
        className={`burger-menu ${menuOpen ? "cross" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <NavLink exact to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/portfolio">
          <li>Portfolio</li>
        </NavLink>
        <NavLink to="/services">
          <li>Services</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
