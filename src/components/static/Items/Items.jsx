import React, { useContext, useState } from "react";
import "./Item.css";

import Button from "../Button/Button";
import { productContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";

function Items() {
  const { products, setProducts } = useContext(productContext);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const { setCart } = useContext(CartContext);

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

  function handleCartItems(id) {
    const selectedProduct = products.find((product) => product.id === id);
    const productToAdd = {
      ...selectedProduct,
      currentImgSrc: selectedProduct.FirstImgSrc,
    };
    setCart((prevCart) => {
      const currentProduct = prevCart.find((item) => item.id === id);
      if (currentProduct) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  }

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
            <span>${product.price}</span>
          </div>

          <div
            className={`options ${
              hoveredProductId === product.id ? "visible" : ""
            }`}
          >
            <button onClick={() => handleCartItems(product.id)}>
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
      ))}
    </div>
  );
}

export default Items;
