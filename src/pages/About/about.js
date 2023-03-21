import React from "react";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import Navigation from "../../components/Layouts/Header/Navigation";
import HomePictures from "../../components/HomePictures/HomePictures";
import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Layouts/Footer/Footer";
import "./about.css";

const about = () => {
  return (
    <div>
      <CustomCursor />
      <Navigation />
      <div className="about-page">
        <div className="effect-spawn">
          <HomePictures />
        </div>
        <div className="left-to-right-text">
          <AboutMe />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
