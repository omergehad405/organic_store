import React from "react";
import "./Navbar.css";

import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

function Navbar() {
  const handleOpenCart = () => {
    document.querySelector(".cart_container").style.right = "0";
    document.querySelector(".Cart").classList.toggle("active");
  };
  const handleCloseCart = () => {
    document.querySelector(".cart_container").style.right = "-100rem";
  };

  return (
    <div className="nav">
      <div className="container">
        <h4>
          Last sale up to <span>20% OFF.</span> Use code <span>“SALE70”</span>.
        </h4>

        <ul>
          <li onClick={handleCloseCart}>
            <a>compare</a>
          </li>
          <li onClick={handleCloseCart}>
            <a>wishlist</a>
          </li>
          <li onClick={handleCloseCart}>
            <Link style={{ color: "white" }} to="/register">
              login
            </Link>
          </li>
          <li className="Cart" onClick={handleOpenCart}>
            <a>
              <i className="fa-solid fa-cart-shopping"></i>
              cart
            </a>
          </li>
        </ul>

        <div className="cart_container">
          <Cart handleCloseCart={handleCloseCart} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
