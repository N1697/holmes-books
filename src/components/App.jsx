import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Carousel from "./Carousel";
import "../style.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Carousel />
    </div>
  );
};

export default App;
