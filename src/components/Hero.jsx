import React from "react";
import heroBooks from "../hero-books.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroBooks} alt="Hero Books" className="hero-books" />
      <div className="hero-text-content">
        <h1 className="hero-header">The Sherlock Holmes Books In Order</h1>
        <p className="hero-text">
          Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional detective created
          by British author Arthur Conan Doyle. Referring to himself as a
          "consulting detective" in the stories, Holmes is known for his
          proficiency with observation, deduction, forensic science and logical
          reasoning that borders on the fantastic, which he employs when
          investigating cases for a wide variety of clients, including Scotland
          Yard.
        </p>
      </div>
    </section>
  );
};

export default Hero;
