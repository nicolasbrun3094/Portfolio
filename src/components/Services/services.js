import React, { useRef, useEffect } from "react";
import LogoDev from "../../assets/images/code-solid.svg";
import "./services.css";

const Services = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    const handleMouseMove = (e) => {
      let elRect = el.getBoundingClientRect();

      let x = e.clientX - elRect.x;
      let y = e.clientY - elRect.y;

      let midCardWidth = elRect.width / 2;
      let midCarHeight = elRect.height / 2;

      let angleY = -(x - midCardWidth) / 8;
      let angleX = (y - midCarHeight) / 8;

      let glowY = (x / elRect.width) * 100;
      let glowX = (y / elRect.height) * 100;

      el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
      el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
      el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(184, 196, 211), transparent)`;
    };

    const handleMouseLeave = () => {
      el.children[0].style.transform = `rotateX(0) rotateY(0)`;
      el.children[1].style.transform = `rotateX(0) rotateY(0)`;
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="services-container">
      <h2>
        My <b>Services</b>
      </h2>
      <div className="div-effect" ref={cardRef}>
        <div className="dev-container">
          <img
            className="logo-dev"
            src={LogoDev}
            alt="Logo Dev"
            style={{ filter: "invert(1) grayscale(100%)" }}
          />

          <p className="text-service">
            ✨ En tant que développeur web expérimenté, je suis disponible pour
            offrir mes services de développement web aux entreprises et
            organisations en quête de sites professionnels et performants. ✨
            <br />
            🚀 Que ce soit pour la création d'un site statique ou dynamique, ou
            pour le développement d'applications web plus complexes, je suis
            prêt à travailler en étroite collaboration avec mes clients pour
            comprendre leurs besoins et proposer des solutions sur-mesure
            répondant à leurs exigences.
            <br />
            💼 Si vous recherchez un développeur web passionné, compétent et
            fiable pour votre prochain projet, n'hésitez pas à me contacter.
            Ensemble, donnons vie à vos ambitions numériques !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
