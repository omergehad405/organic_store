import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import "../../App.css";
import { Link } from "react-router-dom";

function AboutPage() {
  const [numbers, setNumbers] = useState({
    brandsNumber: 0,
    storesNumber: 0,
    clientsNumber: 0,
  });

  useEffect(() => {
    let storesCount = 0;
    let brandsCount = 0;
    let clientsCount = 0;

    const brandsInterval = setInterval(() => {
      if (brandsCount < 255) {
        brandsCount++;
        setNumbers((prevNumbers) => ({
          ...prevNumbers,
          brandsNumber: brandsCount,
        }));
      } else {
        clearInterval(brandsInterval);
      }
    }, 10);

    const storesInterval = setInterval(() => {
      if (storesCount < 14) {
        storesCount++;
        setNumbers((prevNumbers) => ({
          ...prevNumbers,
          storesNumber: storesCount,
        }));
      } else {
        clearInterval(storesInterval);
      }
    }, 150);

    const clientsInterval = setInterval(() => {
      if (clientsCount < 632) {
        clientsCount++;
        setNumbers((prevNumbers) => ({
          ...prevNumbers,
          clientsNumber: clientsCount,
        }));
      } else {
        clearInterval(clientsInterval);
      }
    }, 1);

    return () => {
      clearInterval(storesInterval);
      clearInterval(brandsInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  useEffect(() => {
    const spans = document.querySelectorAll(".features .skil .progress span");
    let animated = false;

    const handleScroll = () => {
      if (window.scrollY >= 1200 && !animated) {
        spans.forEach((span) => {
          span.style.width = span.dataset.width;
          span.innerHTML = span.dataset.width;
        });
        animated = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-page">
      <div className="page-title">
        <h5 className="page-name">about</h5>
        <h5>
          <Link to="/">home</Link> / <span>about</span>
        </h5>
      </div>

      <section className="home">
        <div className="home-info">
          <div className="container">
            <h1 className="title">about us</h1>
            <span>5 reasons to love butternut squash</span>
            <p>
              Look beyond butternut squash’s intimidating hard skin, and you’ll
              find a bright orange flesh, buttery texture and slightly sweet,
              nutty flavor — with so many meal possibilities! Why should you
              make butternut squash your go-to ingredient for fall and winter
              meals?
            </p>
          </div>
        </div>

        <div className="numbers">
          <div className="numbers-container">
            <div>
              <h1 className="brands">{numbers.brandsNumber}</h1>
              <p>brands</p>
            </div>
            <div>
              <h1 className="stores">{numbers.storesNumber}</h1>
              <p>stores</p>
            </div>
            <div>
              <h1 className="clients">{numbers.clientsNumber}</h1>
              <p>happy clients</p>
            </div>
          </div>

          <div className="image"></div>
        </div>

        <div className="services">
          <div className="container">
            <div className="service">
              <h1 className="title">Free Shipping</h1>
              <p>
                we work with proven designers and manufacturers, that’s why we
                can guarantee 100% quality of all items.
              </p>
            </div>
            <div className="service">
              <h1 className="title">24/7 Support</h1>
              <p>
                we ship all over USA as well as overseas. It takes 3-5 business
                days for package to be delivered within US.
              </p>
            </div>
            <div className="service">
              <h1 className="title">Payment Process</h1>
              <p>
                we offer affordable prices and regularly announce sales on last
                season’s items.
              </p>
            </div>
          </div>
        </div>

        <div className="features">
          <h1 className="title">what we can do</h1>
          <p>
            Check out the recent additions to our autumn collection and be
            fashionable!
          </p>
          <div className="container">
            <div className="skils">
              <div className="skil">
                <p>Best Quality Products</p>
                <div className="progress">
                  <span className="skil-length" data-width="90%"></span>
                </div>
              </div>
              <div className="skil">
                <p>Farmer Products</p>
                <div className="progress">
                  <span className="skil-length" data-width="80%"></span>
                </div>
              </div>
              <div className="skil">
                <p>Fast Delivery</p>
                <div className="progress">
                  <span className="skil-length" data-width="70%"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="founder">
          <div className="info">
            <h1 className="title">the founder</h1>
            <p>
              Look beyond butternut squash’s intimidating hard skin, and you’ll
              find a bright orange flesh, buttery texture and slightly sweet,
              nutty flavor — with so many meal possibilities! Why should you
              make butternut squash your go-to ingredient for fall and winter
              meals?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
