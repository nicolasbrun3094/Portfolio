import React from "react";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import Navigation from "../../components/Layouts/Header/Navigation";
import Services from "../../components/Services/services";
import Footer from "../../components/Layouts/Footer/Footer";

const services = () => {
  return (
    <div>
      <CustomCursor />
      <Navigation />
      <Services />
      <Footer />
    </div>
  );
};

export default services;
