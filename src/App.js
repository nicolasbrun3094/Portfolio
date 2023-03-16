import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home/home";
import About from "../src/pages/About/about";
import Porfolio from "../src/pages/Portfolio/porfolio";
import Services from "../src/pages/Services/services";
import Error from "../src/pages/Error/error";

const App = () => {
  return (
    // ---- Englobe toutes les routes ---- //
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Porfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
