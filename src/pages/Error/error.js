import React from "react";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import Navigation from "../../components/Layouts/Header/Navigation";
import Error from "../../components/Error/Error";
import Footer from "../../components/Layouts/Footer/Footer";

const error = () => {
  return (
    <div>
      <CustomCursor />
      <Navigation />
      <Error />
      <Footer />
    </div>
  );
};

export default error;
