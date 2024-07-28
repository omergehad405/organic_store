import React, { useContext, useState } from "react";
import "./Item.css";
import "../App.css";
import Button from "../Button/Button";
import { productContext } from "../Context/ProductContext";

function Items() {
  const { products, setProducts } = useContext(productContext);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.SecondImgSrc
          ? { ...product, currentImgSrc: product.SecondImgSrc }
          : product
      )
    );
    setHoveredProductId(id);
  };

  const handleMouseLeave = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.SecondImgSrc
          ? { ...product, currentImgSrc: product.FirstImgSrc }
          : product
      )
    );
    setHoveredProductId(null);
  };

  return (
    <div className="container">
      {products.map((product) => (
        <div
          key={product.id}
          className="product"
          onMouseEnter={() => handleMouseEnter(product.id)}
          onMouseLeave={() => handleMouseLeave(product.id)}
        >
          <img
            src={product.currentImgSrc || product.FirstImgSrc}
            alt={product.info}
          />
          <div
            className={`info ${
              hoveredProductId === product.id ? "hidden" : ""
            }`}
          >
            <p>{product.info}</p>
            <span>{product.price}</span>
          </div>

          <div
            className={`options ${
              hoveredProductId === product.id ? "visible" : ""
            }`}
          >
            <Button text="add to cart" />
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
      ))}
    </div>
  );
}

export default Items;
