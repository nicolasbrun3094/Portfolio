import React from "react";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import Navigation from "../../components/Layouts/Header/Navigation";
import Card from "../../components/Card/Card";
import Footer from "../../components/Layouts/Footer/Footer";

const porfolio = () => {
  return (
    <div>
      <CustomCursor />
      <Navigation />
      <Card />
      <Footer />
    </div>
  );
};

export default porfolio;
