import React from "react";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import Navigation from "../../components/Layouts/Header/Navigation";
import Services from "../../components/Services/services";
import Footer from "../../components/Layouts/Footer/Footer";
import "./services.css";

const services = () => {
  return (
    <div>
      <CustomCursor />
      <Navigation />
      <div className="bottom-to-top-text">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default services;
