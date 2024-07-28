import React from "react";
import "./TeamPage.css";
import "../../App.css";

function Team() {
  return (
    <div className="team">
      <div className="container">
        <div className="team_info">
          <h1 className="title">our team</h1>
          <p>
            With their unusual shapes and varied colors, winter squash —
            including acorn, <br /> spaghetti and butternut squash — make
            beautiful table decorations.
          </p>
        </div>
        <div className="team-worker">
          <div>
            <img src="../people/team3.jpeg" />
            <div className="worker_info">
              <h1 className="title">Don Clark</h1>
              <span>Product Consultant</span>
              <p>
                Don was born Los Angeles. His family owned a small grocery
                store, so he has learned how to manage shop
              </p>
            </div>
          </div>
          <div>
            <img src="../people/team2.jpeg" />
            <div className="worker_info">
              <h1 className="title">Don Clark</h1>
              <span>Product Consultant</span>
              <p>
                Don was born Los Angeles. His family owned a small grocery
                store, so he has learned how to manage shop
              </p>
            </div>
          </div>
          <div>
            <img src="../people/team1.jpeg" />
            <div className="worker_info">
              <h1 className="title">Don Clark</h1>
              <span>Product Consultant</span>
              <p>
                Don was born Los Angeles. His family owned a small grocery
                store, so he has learned how to manage shop
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
