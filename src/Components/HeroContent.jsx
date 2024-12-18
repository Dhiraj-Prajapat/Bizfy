import React from "react";
import "./HeroContent.css";
import "@fontsource/roboto"; 

const HeroContent = () => {
  return (
    <div className="hero-content">
      <h1>Driving growth with AI.</h1>
      <p>We craft workflow automations and bespoke AI solutions for forward-thinking companies.</p>
      <div className="hero-buttons">
        <button className="btn-primary">Our Services</button>
        <button className="btn-secondary">Get in Touch</button>
      </div>
    </div>
  );
};

export default HeroContent;
