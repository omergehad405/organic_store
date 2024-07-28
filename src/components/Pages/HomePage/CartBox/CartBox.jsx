import React, { useContext, useEffect, useState } from "react";
import "./CartBox.css";
import "../HomePage.css";
import { CartLengthContext } from "../../../Context/CartLengthContext";

function CartBox() {
  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      itemImg: "../vegetabels/Fennel.webp",
      itemTitle: "organic fennel",
      itemPrice: 3.85,
      amount: 1,
    },
    {
      id: 2,
      itemImg: "../vegetabels/Fennel.webp",
      itemTitle: "organic fennel",
      itemPrice: 3.85,
      amount: 1,
    },
  ]);

  const { cartLength, setCartLength } = useContext(CartLengthContext);

  useEffect(() => {
    setCartLength(cartItem.reduce((acc, item) => acc + item.amount, 0));
  }, [cartItem, setCartLength]);

  function handleAmountIncremint(id) {
    setCartItem(
      cartItem.map((item) =>
        item.id === id
          ? {
              ...item,
              amount: item.amount + 1,
              totalPrice: item.itemPrice * (item.amount + 1),
            }
          : item
      )
    );
  }
  function handleAmountDecremint(id) {
    setCartItem(
      cartItem.map((item) =>
        item.id === id && item.amount > 1
          ? {
              ...item,
              amount: item.amount - 1,
              totalPrice: item.itemPrice * (item.amount - 1),
            }
          : item
      )
    );
  }
  return (
    <div>
      {cartItem.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="image">
            <img src={item.itemImg} />
          </div>
          <div className="info">
            <h3>{item.itemTitle}</h3>
            <span>
              $
              {item.totalPrice
                ? item.totalPrice.toFixed(2)
                : item.itemPrice.toFixed(2)}
            </span>
          </div>
          <div className="price-btns">
            <button
              onClick={() => {
                handleAmountIncremint(item.id);
              }}
            >
              +
            </button>
            <span>{item.amount}</span>
            <button
              onClick={() => {
                handleAmountDecremint(item.id);
              }}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartBox;
