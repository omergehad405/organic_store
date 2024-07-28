import React, { useState } from "react";
import "./Products.css";
import "../HomePage.css";
import { productContext } from "../../../Context/ProductContext";
import Items from "../../../Items/Items";

function Products() {
  const newArrivals = [
    {
      id: 1,
      FirstImgSrc: "../vegetabels/Cauliflower.webp",
      info: "organic cauliflower",
      price: "$6.30",
    },
    {
      id: 2,
      FirstImgSrc: "../organic/Great-Value.webp",
      info: "great value organic whole...",
      price: "$6.30",
    },
    {
      id: 3,
      FirstImgSrc: "../organic/Happy-Baby.webp",
      info: "happy baby orgaincs strawerry...",
      price: "$8.00",
    },
    {
      id: 4,
      FirstImgSrc: "../organic/Whole-Wheat-Flour1.webp",
      SecondImgSrc: "../organic/Whole-Wheat-Flour2.webp",
      info: "bob's red mill",
      price: "$26.35",
    },
    {
      id: 5,
      FirstImgSrc: "../vegetabels/Sebago-Potatoes.webp",
      info: "organic sebago potatoes",
      price: "$2.00 - $6.00",
    },
    {
      id: 6,
      FirstImgSrc: "../organic/Cascadian-Farm-Crunch1.webp",
      SecondImgSrc: "../organic/Cascadian-Farm-Crunch2.webp",
      info: "cascadian farm organic cinamon...",
      price: "$16.00",
    },
    {
      id: 7,
      FirstImgSrc: "../vegetabels/Fennel.webp",
      info: "organic fennel",
      price: "$3.85",
    },
    {
      id: 8,
      FirstImgSrc: "../organic/Simply-Tostitos-Blue1.webp",
      SecondImgSrc: "../organic/Simply-Tostitos-Blue2.webp",
      info: "simply tostitos blue corn...",
      price: "$8.00 - $29.00",
    },
  ];
  const organic = [
    {
      id: 1,
      FirstImgSrc: "../organic/Crisco.webp",
      info: "crisco organic refined coconut..",
      price: "$23.00",
    },
    {
      id: 2,
      FirstImgSrc: "../organic/Skippy-Reduced.webp",
      info: "skippy reduced fat creamy...",
      price: "$16.15",
    },
    {
      id: 3,
      FirstImgSrc: "../organic/Organic-Protein-1.webp",
      SecondImgSrc: "../organic/Organic-Protein-2.webp",
      info: "orgain organic protein almondmilk...",
      price: "$8.00",
    },
    {
      id: 4,
      FirstImgSrc: "../vegetabels/Jap-Pumpkin.webp",
      info: "orignic fennel",
      price: "$3.85",
    },
    {
      id: 5,
      FirstImgSrc: "../vegetabels/Kiwi-Fruit.webp",
      info: "organic kiwi fruit 500g",
      price: "$5.50",
    },
    {
      id: 6,
      FirstImgSrc: "../organic/Plum-Blueberry-Blitz-1.png",
      SecondImgSrc: "../organic/Plum-Blueberry-Blitz-2.png",
      info: "plum organic blueberry blitz!...",
      price: "$3.50 - $9.00",
    },
    {
      id: 7,
      FirstImgSrc: "../organic/Happy-Baby.webp",
      info: "happy baby orgaincs strawerry...",
      price: "$8.00",
    },
    {
      id: 8,
      FirstImgSrc: "../vegetabels/Mushrooms.webp",
      info: "orignic mushrooms, 250g",
      price: "$2.50",
    },
  ];
  const vegetabels = [
    {
      id: 1,
      FirstImgSrc: "../vegetabels/Kiwi-Fruit.webp",
      info: "organic kiwi fruit 500g",
      price: "$5.50",
    },
    {
      id: 2,
      FirstImgSrc: "../vegetabels/Organic.webp",
      info: "organic beetroot",
      price: "$2.05",
    },
    {
      id: 3,
      FirstImgSrc: "../vegetabels/Parsley.webp",
      info: "organic Parsley",
      price: "$1.80",
    },
    {
      id: 4,
      FirstImgSrc: "../vegetabels/Cauliflower.webp",
      info: "organic cauliflower",
      price: "$6.30",
    },
    {
      id: 5,
      FirstImgSrc: "../vegetabels/Fennel.webp",
      info: "organic fennel",
      price: "$3.85",
    },
    {
      id: 6,
      FirstImgSrc: "../vegetabels/Sebago-Potatoes.webp",
      info: "organic sebago potatoes",
      price: "$2.00 - $6.00",
    },
    {
      id: 7,
      FirstImgSrc: "../vegetabels/Mushrooms.webp",
      info: "orignic mushrooms, 250g",
      price: "$2.50",
    },
    {
      id: 8,
      FirstImgSrc: "../vegetabels/Leek-bunch.webp",
      info: "organic leek bunch",
      price: "$2.00",
    },
  ];
  const plumCake = [
    {
      id: 1,
      FirstImgSrc: "../vegetabels/Cauliflower.webp",
      info: "organic cauliflower",
      price: "$6.30",
    },
    {
      id: 2,
      FirstImgSrc: "../vegetabels/Organic.webp",
      info: "organic beetroot",
      price: "$2.05",
    },
    {
      id: 3,
      FirstImgSrc: "../organic/Plum-Blueberry-Blitz-1.png",
      SecondImgSrc: "../organic/Plum-Blueberry-Blitz-2.png",
      info: "plum organic blueberry blitz!...",
      price: "$3.50 - $9.00",
    },
    {
      id: 4,
      FirstImgSrc: "../vegetabels/Mushrooms.webp",
      info: "orignic mushrooms, 250g",
      price: "$2.50",
    },
    {
      id: 5,
      FirstImgSrc: "../vegetabels/Kiwi-Fruit.webp",
      info: "organic kiwi fruit 500g",
      price: "$5.50",
    },
    {
      id: 6,
      FirstImgSrc: "../organic/Smuckers-Peanut-Butter-1.webp",
      SecondImgSrc: "../organic/Smuckers-Peanut-Butter-2.webp",
      info: "smucker's organic protein peanut butter...",
      price: "$26.00",
    },
    {
      id: 7,
      FirstImgSrc: "../organic/Cascadian-Farm-Crunch1.webp",
      SecondImgSrc: "../organic/Cascadian-Farm-Crunch2.webp",
      info: "cascadian farm crunch...",
      price: "$16.00",
    },
    {
      id: 8,
      FirstImgSrc: "../organic/Happy-Baby.webp",
      info: "happy baby orgaincs strawerry...",
      price: "$8.00",
    },
  ];

  const [products, setProducts] = useState(newArrivals);

  let filterBtn = document.querySelectorAll(".filters span");
  filterBtn.forEach((span) => {
    span.addEventListener("click", removeActive);
  });
  // active element
  function removeActive() {
    filterBtn.forEach((span) => {
      span.classList.remove("active");
      this.classList.add("active");
    });
  }

  return (
    <section className="products">
      <h1 className="title">our products</h1>
      <div className="filters">
        <span
          className="active"
          onClick={() => {
            setProducts(newArrivals);
          }}
        >
          new arrivals
        </span>
        <span
          onClick={() => {
            setProducts(organic);
          }}
        >
          organic & natural
        </span>
        <span
          onClick={() => {
            setProducts(vegetabels);
          }}
        >
          the farm story
        </span>
        <span
          onClick={() => {
            setProducts(plumCake);
          }}
        >
          plum cake
        </span>
      </div>

      <productContext.Provider value={{ products, setProducts }}>
        <Items />
      </productContext.Provider>
    </section>
  );
}

export default Products;
