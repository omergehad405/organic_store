import React from "react";
import "./Footer.css";
import "../App.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <h3 className="title">categories</h3>
          <ul>
            <li>
              <a>new products</a>
            </li>
            <li>
              <a>our stores</a>
            </li>
            <li>
              <a>top sellers</a>
            </li>
            <li>
              <a>your health</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="title">information</h3>
          <ul>
            <li>
              <a>home</a>
            </li>
            <li>
              <a>about</a>
            </li>
            <li>
              <a>blog</a>
            </li>
            <li>
              <a>shop</a>
            </li>
            <li>
              <a>contacts</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="title">my account</h3>
          <ul>
            <li>
              <a>checkout</a>
            </li>
            <li>
              <a>compare</a>
            </li>
            <li>
              <a>my account</a>
            </li>
            <li>
              <a>wishlist</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="title">store information</h3>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              Address: 4578 Marmora Road, Glasgow
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              Phones: +3(800) 2345-6789 , +3(800) 2345-6790
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              Hours: 7 Days a week from 9:00 am to 7:00 pm
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="">E-mail: info@demolink.org</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
