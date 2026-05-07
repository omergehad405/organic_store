import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

import { CartContext } from "../../../context/CartContext";

function SecondPage() {
  const { setProduct } = useOutletContext();
  const { setCart } = useContext(CartContext);
  const [products, setProducts] = useState([
    {
      id: 10,
      FirstImgSrc: "./organic/Skippy-Reduced.webp",
      info: "skippy reduced fat creamy",
      price: 16.15,
    },
    {
      id: 11,
      FirstImgSrc: "./organic/Organic-Protein-1.webp",
      SecondImgSrc: "./organic/Organic-Protein-2.webp",
      info: "orgain organic protein almondmilk",
      price: 8.0,
    },
    {
      id: 12,
      FirstImgSrc: "./vegetabels/Jap-Pumpkin.webp",
      info: "orignic fennel",
      price: 3.85,
    },
    {
      id: 13,
      FirstImgSrc: "./vegetabels/Kiwi-Fruit.webp",
      info: "organic kiwi fruit 500g",
      price: 5.5,
    },
    {
      id: 14,
      FirstImgSrc: "./organic/Plum-Blueberry-Blitz-1.png",
      SecondImgSrc: "./organic/Plum-Blueberry-Blitz-2.png",
      info: "plum organic blueberry blitz!",
      price: 3.5,
    },
    {
      id: 15,
      FirstImgSrc: "./organic/Happy-Baby.webp",
      info: "happy baby orgaincs strawerry",
      price: 8.0,
    },
    {
      id: 16,
      FirstImgSrc: "./vegetabels/Mushrooms.webp",
      info: "orignic mushrooms, 250g",
      price: 2.5,
    },
    {
      id: 17,
      FirstImgSrc: "./vegetabels/Kiwi-Fruit.webp",
      info: "organic kiwi fruit 500g",
      price: 5.5,
    },
    {
      id: 18,
      FirstImgSrc: "./vegetabels/Organic.webp",
      info: "organic beetroot",
      price: 2.05,
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

export default SecondPage;
