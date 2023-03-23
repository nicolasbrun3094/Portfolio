import React from "react";
import Reservia from "../../assets/images/reservia.jpeg";
import Panthere from "../../assets/images/La-panthere.png";
import OMF from "../../assets/images/ohMyFood.jpeg";
import Kanap from "../../assets/images/kanap.jpeg";
import HotTakes from "../../assets/images/hot_takes.webp";
import Kasa from "../../assets/images/kasa.png";
import "./card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="project P1">
        <a href="https://nicolasbrun3094.github.io/ProjetReservia/projet2-reservia/index.html">
          <img className="img_project" src={Reservia} alt="photo_reservia" />
          <div className="overlay">
            <div className="overlay-text">
              <h3>Reservia :</h3>
              <p>Intégration d'une maquette</p>
            </div>
          </div>
        </a>
      </div>
      <div className="project P2">
        <a href="https://nicolasbrun3094.github.io/lapanthere-oc4/">
          <img className="img_project" src={Panthere} alt="photo_panthere" />
          <div className="overlay">
            <div className="overlay-text">
              <h3>La Panthère :</h3>
              <p>SEO d'un site Web</p>
            </div>
          </div>
        </a>
      </div>
      <div className="project P3">
        <a
          href=" https://nicolasbrun3094.github.io/Oh_my_food/
"
        >
          <img className="img_project" src={OMF} alt="photo_ohMyFood" />
          <div className="overlay">
            <div className="overlay-text">
              <h3>Oh My Food :</h3>
              <p>Creation d'animations</p>
            </div>
          </div>
        </a>
      </div>
      <div className="project P4">
        <a href="https://github.com/nicolasbrun3094/ProjetKanap">
          <img className="img_project" src={Kanap} alt="Photo_Projet_Kanap" />
          <div className="overlay">
            <div className="overlay-text">
              <h3>Kanap :</h3>
              <p>Site Web E-Commerce</p>
            </div>
          </div>
        </a>
      </div>
      <div className="project P5">
        <a href="https://github.com/nicolasbrun3094/piiquantOC6">
          <img
            className="img_project"
            src={HotTakes}
            alt="Photo_Projet_HotTakes"
          />
          <div className="overlay">
            <div className="overlay-text">
              <h3>Hot Takes :</h3>
              <p>NodeJS & environnements sécurisé</p>
            </div>
          </div>
        </a>
      </div>
      <div className="project P6">
        <a href="https://lucent-lily-c578a6.netlify.app/">
          <img className="img_project" src={Kasa} alt="PhotoProjetKasa" />
          <div className="overlay">
            <div className="overlay-text">
              <h3>Kasa :</h3>
              <p>Application React</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
