import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container text-center">
        <h1>Welcome to Our Platform</h1>
        <p>Discover amazing opportunities and explore your potential with us.</p>
        <a href="#" className="btn btn-primary btn-lg">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Hero;
