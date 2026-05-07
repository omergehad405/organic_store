import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

import { CartContext } from "../../../context/CartContext";

function ThirdPage() {
  const { setProduct } = useOutletContext();
  const { setCart } = useContext(CartContext);
  const [products, setProducts] = useState([
    {
      id: 19,
      FirstImgSrc: "./vegetabels/Parsley.webp",
      info: "organic Parsley",
      price: 1.8,
    },
    {
      id: 20,
      FirstImgSrc: "./vegetabels/Cauliflower.webp",
      info: "organic cauliflower",
      price: 6.3,
    },
    {
      id: 21,
      FirstImgSrc: "./vegetabels/Fennel.webp",
      info: "organic fennel",
      price: 3.85,
    },
    {
      id: 22,
      FirstImgSrc: "./vegetabels/Sebago-Potatoes.webp",
      info: "organic sebago potatoes",
      price: 2.0,
    },
    {
      id: 23,
      FirstImgSrc: "./vegetabels/Mushrooms.webp",
      info: "orignic mushrooms, 250g",
      price: 2.5,
    },
    {
      id: 24,
      FirstImgSrc: "./vegetabels/Leek-bunch.webp",
      info: "organic leek bunch",
      price: 2.0,
    },
    {
      id: 25,
      FirstImgSrc: "./vegetabels/Cauliflower.webp",
      info: "organic cauliflower",
      price: 6.3,
    },
    {
      id: 26,
      FirstImgSrc: "./vegetabels/Organic.webp",
      info: "organic beetroot",
      price: 2.05,
    },
    {
      id: 27,
      FirstImgSrc: "./organic/Plum-Blueberry-Blitz-1.png",
      SecondImgSrc: "./organic/Plum-Blueberry-Blitz-2.png",
      info: "plum organic blueberry blitz!",
      price: 3.5,
    },
  ]);
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

  const handleSelectedProduct = (id) => {
    const selected = products.find((product) => product.id === id);
    setProduct(selected);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="products">
        <h1 className="title">shop</h1>
        <div className="products-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onHover={handleMouseEnter}
              onLeave={handleMouseLeave}
              onSelect={handleSelectedProduct}
              hovered={hoveredProductId === product.id}
              handleCartItems={handleCartItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
