import React from "react";
import Linkedin from "../../assets/images/linkedin.svg";
import Twitter from "../../assets/images/twitter.svg";
import Mail from "../../assets/images/envelope-solid.svg";
import "./networks.css";

const Networks = () => {
  return (
    <div className="networks-container">
      <a href="https://www.linkedin.com/in/nicolas-brun-profil/">
        <img
          className="logo"
          src={Linkedin}
          alt="Linkedin"
          style={{ filter: "invert(1)" }}
        />
      </a>
      <a href="https://twitter.com/YagaisBack">
        <img
          className="logo"
          src={Twitter}
          alt="Twitter"
          style={{ filter: "invert(1)" }}
        />
      </a>
      <a href="mailto:nicolasbrun3094@hotmail.com">
        <img
          className="logo"
          src={Mail}
          alt="Mail"
          style={{ filter: "invert(1)" }}
        />
      </a>
    </div>
  );
};

export default Networks;
