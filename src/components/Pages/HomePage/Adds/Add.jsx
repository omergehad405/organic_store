import React from "react";
import "./Add.css";
import Button from "../../../Button/Button";
import "../HomePage.css";

function Add() {
  return (
    <div className="add">
      <div className="container">
        <div className="info">
          <h1>Fruits and Vegetables</h1>
          <p>fresh and delicious all your round!</p>
          <Button text="shop now!" />
        </div>
      </div>
    </div>
  );
}

export default Add;
