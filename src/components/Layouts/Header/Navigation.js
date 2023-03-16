import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="nav-container">
      <h1 className="title">Portfolio.</h1>
      <ul className="menu">
        <NavLink exact to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/portfolio">
          <li>Porfolio</li>
        </NavLink>
        <NavLink to="/services">
          <li>Services</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
