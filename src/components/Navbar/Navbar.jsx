import React, { createContext, useState } from "react";
import "./Navbar.css";
import "../App.css";
import CartBox from "../Pages/HomePage/CartBox/CartBox";
import { CartLengthContext } from "../Context/CartLengthContext";

function Navbar() {
  const [cartLength, setCartLength] = useState(0);
  const [cart, setCart] = useState(false);

  return (
    <div className="nav">
      <div className="container">
        <h4>
          Last sale up to <span>20% OFF.</span> Use code <span>“SALE70”</span>.
        </h4>

        <ul>
          <li>
            <a>compare</a>
          </li>
          <li>
            <a>wishlist</a>
          </li>
          <li>
            <a>login</a>
          </li>
          <li
            className="cart"
            onClick={() => {
              setCart(true);
            }}
          >
            <a>
              <i className="fa-solid fa-cart-shopping"></i>
              cart
              <span className="cartLength">{cartLength}</span>
            </a>
          </li>
        </ul>

        <div className={`cart-container ${cart ? "show" : "hide"}`}>
          <h1>shoping cart</h1>
          <button
            className="close"
            onClick={() => {
              setCart(false);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <CartLengthContext.Provider value={{ cartLength, setCartLength }}>
            <CartBox />
          </CartLengthContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
