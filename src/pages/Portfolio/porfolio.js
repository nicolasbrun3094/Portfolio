import React from "react";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import Navigation from "../../components/Layouts/Header/Navigation";
import Card from "../../components/Card/Card";
import Footer from "../../components/Layouts/Footer/Footer";
import "./porfolio.css";

const porfolio = () => {
  return (
    <div>
      <CustomCursor />
      <Navigation />
      <div className="spawn-card">
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default porfolio;
