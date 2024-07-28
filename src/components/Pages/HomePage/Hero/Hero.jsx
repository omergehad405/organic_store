import React from "react";
import "./Hero.css";
import "../HomePage.css";
import Button from "../../../Button/Button";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="info">
          <h1>
            green leaves
            <br />
            up to
            <span> 20% off</span>
          </h1>

          <p>Always Fresh, Crispy and Full of Vitamins</p>

          <Button text="add to cart" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
