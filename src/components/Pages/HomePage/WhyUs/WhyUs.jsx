import React from "react";
import "./WhyUs.css";
import "../HomePage.css";

function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="image">
          <img src="../blabla.webp" />
        </div>
        <div className="info">
          <div className="box">
            <h3>A Source of Vitamins</h3>
            <p>
              Vegetables can be eaten either raw or cooked and play an important
              role in human nutrition, being mostly low in fat and
              carbohydrates, but high in vitamins, minerals and dietary fiber.
            </p>
          </div>
          <div className="box">
            <h3>Best Quality Products</h3>
            <p>
              “We eliminated any possible pollution in our soils in order to
              deliver the purest organic produce to our customers’ tables.“
            </p>
          </div>
          <div className="box">
            <h3>Best Quality Products</h3>
            <p>
              “We eliminated any possible pollution in our soils in order to
              deliver the purest organic produce to our customers’ tables.“
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
