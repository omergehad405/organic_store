import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

function FirstPage() {
  const { setProduct } = useOutletContext();
  const [products, setProducts] = useState([
    {
      id: 1,
      FirstImgSrc: "./vegetabels/Cauliflower.webp",
      info: "organic cauliflower",
      price: 6.3,
    },
    {
      id: 2,
      FirstImgSrc: "./organic/Great-Value.webp",
      info: "great value organic whole",
      price: 6.3,
    },
    {
      id: 3,
      FirstImgSrc: "./organic/Happy-Baby.webp",
      info: "happy baby orgaincs strawerry",
      price: 8.0,
    },
    {
      id: 4,
      FirstImgSrc: "./organic/Whole-Wheat-Flour1.webp",
      SecondImgSrc: "./organic/Whole-Wheat-Flour2.webp",
      info: "bob's red mill",
      price: 26.35,
    },
    {
      id: 5,
      FirstImgSrc: "./vegetabels/Sebago-Potatoes.webp",
      info: "organic sebago potatoes",
      price: 2.0,
    },
    {
      id: 6,
      FirstImgSrc: "./organic/Cascadian-Farm-Crunch1.webp",
      SecondImgSrc: "./organic/Cascadian-Farm-Crunch2.webp",
      info: "cascadian farm organic cinamon",
      price: 16.0,
    },
    {
      id: 7,
      FirstImgSrc: "./vegetabels/Fennel.webp",
      info: "organic fennel",
      price: 3.85,
    },
    {
      id: 8,
      FirstImgSrc: "./organic/Simply-Tostitos-Blue1.webp",
      SecondImgSrc: "./organic/Simply-Tostitos-Blue2.webp",
      info: "simply tostitos blue corn",
      price: 8.0,
    },
    {
      id: 9,
      FirstImgSrc: "./organic/Crisco.webp",
      info: "crisco organic refined coconut..",
      price: 23.0,
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

export default FirstPage;
