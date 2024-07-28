import React from "react";
import { Link } from "react-router-dom";
import "./TeamPage.css";
import "../../App.css";
import Team from "./Team";
import TeamSkils from "./TeamSkils";

function TeamPage() {
  return (
    <div className="team-page">
      <div className="page-title">
        <h5 className="page-name">team</h5>
        <h5>
          <Link to="/">home</Link> / <span>team</span>
        </h5>
      </div>

      <Team />
      <TeamSkils />
    </div>
  );
}

export default TeamPage;
