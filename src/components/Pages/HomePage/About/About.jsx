import React from "react";
import "./About.css";
import "../HomePage.css";

function About() {
  return (
    <section className="about">
      <h1 className="title">Welcome to our healthy farm!</h1>

      <div className="container">
        <div className="info">
          <div className="info-box">
            <h1>1.</h1>
            <span>Best Quality Products</span>
            <p>
              We stand for providing the most fresh organic products which will
              serve your health and be a source of vitamins and minerals for our
              clients.
            </p>
          </div>
          <div className="info-box">
            <h1>2.</h1>
            <span>Farmer Products</span>
            <p>
              We work with many farms to provide you with natural products grown
              with love and care with no GMO or pesticides.
            </p>
          </div>
          <div className="info-box">
            <h1>3.</h1>
            <span>Fast Delivery</span>
            <p>
              We want our client to receive their fresh products as soon as
              possible, so we process and ship the order at once.
            </p>
          </div>
        </div>
        <div className="images">
          <div className="image">
            <a href="">
              <div className="panner"></div>
              <img src="../about/discount1.jpg" />
            </a>
          </div>
          <div className="image">
            <a href="">
              <div className="panner"></div>
              <img src="../about/discount2.jpg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
