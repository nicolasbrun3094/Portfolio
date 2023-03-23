// AboutMe.js
import React, { useState } from "react";
import "./aboutMe.css";

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-container">
      <h2>
        About <b>Me</b>
      </h2>
      <div className="text-about">
        <p>
          ✨ Découvrez un développeur web passionné et chevronné, prêt à
          propulser votre projet vers de nouveaux sommets ! ✨<br /> Grâce à une
          formation solide chez OpenClassrooms, je maîtrise des compétences
          essentielles en développement web telles que HTML, CSS, JavaScript,
          Node.js et React. Mon expérience sur divers projets innovants au fil
          des ans me permet d'offrir des solutions créatives et performantes
          pour mes clients.
          <br />
          {showMore && (
            <>
              🚀 Je suis en quête permanente de nouvelles compétences et
              technologies, m'assurant ainsi d'apporter toujours les meilleures
              solutions à vos défis digitaux.
              <br />
              💪 Collaborateur hors pair, je m'adapte rapidement à différents
              environnements de travail et j'aime travailler en équipe pour
              garantir des résultats optimaux. Mon expérience variée avec divers
              types de clients et de projets fait de moi le partenaire idéal
              pour votre aventure numérique.
              <br />
              🎯 Si vous êtes à la recherche d'un développeur web compétent et
              passionné pour donner vie à votre prochain projet, n'hésitez pas à
              me contacter ! Ensemble, nous pourrons discuter de vos besoins et
              imaginer comment je pourrais vous aider.
              <br />
              🌟 Je suis disponible pour travailler sur des projets passionnants
              de développement web et j'ai hâte de collaborer avec vous pour
              atteindre vos objectifs. Faisons équipe et donnons vie à vos rêves
              numériques ! 🌟
            </>
          )}
        </p>
        <button className="download-btn" onClick={handleShowMore}>
          {showMore ? "Voir moins" : "Voir plus"}
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
