import React from "react";
import PictureHome from "../../../src/assets/images/picture_home.png";
import "./homePictures.css";

const HomePictures = () => {
  return (
    <div className="picture-container">
      <img className="pic" src={PictureHome} alt="logo Kasa" />
    </div>
  );
};

export default HomePictures;
