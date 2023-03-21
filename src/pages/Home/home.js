import React from "react";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import Navigation from "../../components/Layouts/Header/Navigation";
import Presentation from "../../components/Presentation/Presentation";
import Networks from "../../components/Networks/Networks";
import DownloadBtn from "../../components/DownloadBtn/DownloadBtn";
import Picture from "../../components/HomePictures/HomePictures";
import Footer from "../../components/Layouts/Footer/Footer";
import "./home.css";

const home = () => {
  return (
    <div>
      <CustomCursor />
      <Navigation />
      <div className="home-container">
        <div className="left-container">
          <Presentation />
          <div className="left-information">
            <Networks />
            <DownloadBtn />
          </div>
        </div>
        <div className="right-container">
          <Picture />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default home;
