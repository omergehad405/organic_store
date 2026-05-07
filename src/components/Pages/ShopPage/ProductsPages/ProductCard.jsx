import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../../static/Button/Button";
import { CartContext } from "../../../context/CartContext";
import { useCartStore } from "../../../context/CartStore";

function ProductCard({
  product,
  onHover,
  onLeave,
  onSelect,
  hovered,
  handleCartItems,
}) {
  const { setCart } = useContext(CartContext);
  return (
    <div
      className="product"
      onMouseEnter={() => onHover(product.id)}
      onMouseLeave={() => onLeave(product.id)}
      onClick={() => onSelect(product.id)}
    >
      <Link to={`/shopPage/product${product.id}`}>
        <img
          src={product.currentImgSrc || product.FirstImgSrc}
          alt={product.info}
        />
      </Link>
      <div className={`info ${hovered ? "hidden" : ""}`}>
        <p>{product.info}</p>
        <span>${product.price}</span>
      </div>

      <div className={`options ${hovered ? "visible" : ""}`}>
        <button onClick={() => handleCartItems(product)}>
          <Button text="add to cart" />
        </button>
        <div className="icons">
          <span>
            <i className="fa-solid fa-eye"></i>
          </span>
          <span>
            <i className="fa-regular fa-heart"></i>
          </span>
          <span>
            <i className="fa-solid fa-scale-balanced"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
