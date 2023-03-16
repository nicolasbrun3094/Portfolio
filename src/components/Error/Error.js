import React from "react";
import ErrorImg from "../../assets/images/404.png";
import "./error.css";

const Error = () => {
  return (
    <div className="error">
      <img className="errorImg" src={ErrorImg} alt="404img" />
      <p className="message">
        Oups, la page que vous demandez n'est pas disponible !
      </p>
      <a className="redirection" href="http://localhost:3000">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
};

export default Error;
