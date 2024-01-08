import React from "react";
import "./HeroSection.css";
import Button from "./Button";
import "../App.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/Videos/video.mov" autoPlay loop muted />
      <h1>WHAT ARE YOU LOOKING FOR?</h1>
      <p>We have all kinds of products</p>
      <div className="hero-buttons">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          to="/products-items"
        >
          PRODUCTS
        </Button>

        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          to="https://www.youtube.com/"
        >
          YOUTUBE <i className="fa-brands fa-youtube"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
