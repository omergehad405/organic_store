import React, { useEffect } from "react";
import "./TeamPage.css";
import "../../App.css";

function TeamSkils() {
  useEffect(() => {
    const spans = document.querySelectorAll(
      ".team_skils .skils .skil .progress .skil-length"
    );
    let animated = false;

    const handleScroll = () => {
      if (window.scrollY >= 300 && !animated) {
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
    <div className="team_skils">
      <h1 className="title">our skils</h1>
      <div className="container">
        <div className="info">
          <p>
            Coconut Oil is a great-tasting, nutritious alternative to use when
            cooking or baking. Coconut Oil is a naturally rich source of medium
            chain triglycerides (MCTs), which are quickly absorbed by the body
            to produce energy. MCTs are hydrolyzed more rapidly and metabolized
            more readily than long chain fatty acids. Our cold-pressed, organic
            extra virgin oil is from the Philippines and is naturally free of
            trans fat, 100% cholesterol free, contains no hexane and is
            certified non-GMO. Vita Extra Virgin Organic Coconut Oil is highly
            heat stable, ideal for cooking and makes a delicious, energizing
            substitute for regular oils, butter or shortening in recipes. Spread
            on bread or mix into your favorite smoothie
          </p>
        </div>
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
  );
}

export default TeamSkils;
