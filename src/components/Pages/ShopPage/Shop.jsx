import React, { useState } from "react";
import Button from "../../Button/Button";
import { Link, useOutletContext } from "react-router-dom";
function Shop() {
  const [search, setSearch] = useState("");
  const { setProduct } = useOutletContext();
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      FirstImgSrc: "../vegetabels/Cauliflower.webp",
      title: "organic cauliflower",
      price: "$6.30",
    },
    {
      id: 2,
      FirstImgSrc: "../organic/Great-Value.webp",
      title: "great value organic whole",
      price: "$6.30",
    },
    {
      id: 3,
      FirstImgSrc: "../organic/Happy-Baby.webp",
      title: "happy baby orgaincs strawerry",
      price: "$8.00",
    },
    {
      id: 4,
      FirstImgSrc: "../organic/Whole-Wheat-Flour1.webp",
      SecondImgSrc: "../organic/Whole-Wheat-Flour2.webp",
      title: "bob's red mill",
      price: "$26.35",
    },
    {
      id: 5,
      FirstImgSrc: "../vegetabels/Sebago-Potatoes.webp",
      title: "organic sebago potatoes",
      price: "$2.00 - $6.00",
    },
    {
      id: 6,
      FirstImgSrc: "../organic/Cascadian-Farm-Crunch1.webp",
      SecondImgSrc: "../organic/Cascadian-Farm-Crunch2.webp",
      title: "cascadian farm organic cinamon",
      price: "$16.00",
    },
    {
      id: 7,
      FirstImgSrc: "../vegetabels/Fennel.webp",
      title: "organic fennel",
      price: "$3.85",
    },
    {
      id: 8,
      FirstImgSrc: "../organic/Simply-Tostitos-Blue1.webp",
      SecondImgSrc: "../organic/Simply-Tostitos-Blue2.webp",
      title: "simply tostitos blue corn",
      price: "$8.00 - $29.00",
    },
    // {
    //   id: 9,
    //   FirstImgSrc: "../organic/Crisco.webp",
    //   title: "crisco organic refined coconut..",
    //   price: "$23.00",
    // },
    // {
    //   id: 10,
    //   FirstImgSrc: "../organic/Skippy-Reduced.webp",
    //   title: "skippy reduced fat creamy",
    //   price: "$16.15",
    // },
    // {
    //   id: 11,
    //   FirstImgSrc: "../organic/Organic-Protein-1.webp",
    //   SecondImgSrc: "../organic/Organic-Protein-2.webp",
    //   title: "orgain organic protein almondmilk",
    //   price: "$8.00",
    // },
    // {
    //   id: 12,
    //   FirstImgSrc: "../vegetabels/Jap-Pumpkin.webp",
    //   title: "orignic fennel",
    //   price: "$3.85",
    // },
    // {
    //   id: 13,
    //   FirstImgSrc: "../vegetabels/Kiwi-Fruit.webp",
    //   title: "organic kiwi fruit 500g",
    //   price: "$5.50",
    // },
    // {
    //   id: 14,
    //   FirstImgSrc: "../organic/Plum-Blueberry-Blitz-1.png",
    //   SecondImgSrc: "../organic/Plum-Blueberry-Blitz-2.png",
    //   title: "plum organic blueberry blitz!",
    //   price: "$3.50 - $9.00",
    // },
    // {
    //   id: 15,
    //   FirstImgSrc: "../organic/Happy-Baby.webp",
    //   title: "happy baby orgaincs strawerry",
    //   price: "$8.00",
    // },
    // {
    //   id: 16,
    //   FirstImgSrc: "../vegetabels/Mushrooms.webp",
    //   title: "orignic mushrooms, 250g",
    //   price: "$2.50",
    // },
    // {
    //   id: 17,
    //   FirstImgSrc: "../vegetabels/Kiwi-Fruit.webp",
    //   title: "organic kiwi fruit 500g",
    //   price: "$5.50",
    // },
    // {
    //   id: 18,
    //   FirstImgSrc: "../vegetabels/Organic.webp",
    //   title: "organic beetroot",
    //   price: "$2.05",
    // },
    // {
    //   id: 19,
    //   FirstImgSrc: "../vegetabels/Parsley.webp",
    //   title: "organic Parsley",
    //   price: "$1.80",
    // },
    // {
    //   id: 20,
    //   FirstImgSrc: "../vegetabels/Cauliflower.webp",
    //   title: "organic cauliflower",
    //   price: "$6.30",
    // },
    // {
    //   id: 21,
    //   FirstImgSrc: "../vegetabels/Fennel.webp",
    //   title: "organic fennel",
    //   price: "$3.85",
    // },
    // {
    //   id: 22,
    //   FirstImgSrc: "../vegetabels/Sebago-Potatoes.webp",
    //   title: "organic sebago potatoes",
    //   price: "$2.00 - $6.00",
    // },
    // {
    //   id: 23,
    //   FirstImgSrc: "../vegetabels/Mushrooms.webp",
    //   title: "orignic mushrooms, 250g",
    //   price: "$2.50",
    // },
    // {
    //   id: 24,
    //   FirstImgSrc: "../vegetabels/Leek-bunch.webp",
    //   title: "organic leek bunch",
    //   price: "$2.00",
    // },
    // {
    //   id: 25,
    //   FirstImgSrc: "../vegetabels/Cauliflower.webp",
    //   title: "organic cauliflower",
    //   price: "$6.30",
    // },
    // {
    //   id: 26,
    //   FirstImgSrc: "../vegetabels/Organic.webp",
    //   title: "organic beetroot",
    //   price: "$2.05",
    // },
    // {
    //   id: 27,
    //   FirstImgSrc: "../organic/Plum-Blueberry-Blitz-1.png",
    //   SecondImgSrc: "../organic/Plum-Blueberry-Blitz-2.png",
    //   title: "plum organic blueberry blitz!",
    //   price: "$3.50 - $9.00",
    // },
    // {
    //   id: 28,
    //   FirstImgSrc: "../vegetabels/Mushrooms.webp",
    //   title: "orignic mushrooms, 250g",
    //   price: "$2.50",
    // },
    // {
    //   id: 29,
    //   FirstImgSrc: "../vegetabels/Kiwi-Fruit.webp",
    //   title: "organic kiwi fruit 500g",
    //   price: "$5.50",
    // },
    // {
    //   id: 30,
    //   FirstImgSrc: "../organic/Smuckers-Peanut-Butter-1.webp",
    //   SecondImgSrc: "../organic/Smuckers-Peanut-Butter-2.webp",
    //   title: "smucker's organic protein peanut butter",
    //   price: "$26.00",
    // },
    // {
    //   id: 31,
    //   FirstImgSrc: "../organic/Cascadian-Farm-Crunch1.webp",
    //   SecondImgSrc: "../organic/Cascadian-Farm-Crunch2.webp",
    //   title: "cascadian farm crunch",
    //   price: "$16.00",
    // },
    // {
    //   id: 32,
    //   FirstImgSrc: "../organic/Happy-Baby.webp",
    //   title: "happy baby orgaincs strawerry",
    //   price: "$8.00",
    // },
  ]);

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

  return (
    <div>
      <div className="container">
        <div className="sidebar">
          <div className="search">
            <form>
              <input
                value={search}
                type="text"
                placeholder="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Button text="go!" />
            </form>
          </div>

          <div className="filterBtns">
            <h5 className="title">filter</h5>
            <form>
              <label>
                <input type="checkBox" />
                Baking
              </label>
              <label>
                <input type="checkBox" />
                Fruit
              </label>
              <label>
                <input type="checkBox" />
                Organic
              </label>
              <label>
                <input type="checkBox" />
                Packaged Meals
              </label>
              <label>
                <input type="checkBox" />
                Vegetable
              </label>
            </form>
          </div>
        </div>

        <div className="products">
          <h1 className="title">shop</h1>
          <div className="products-container">
            {products.map((product) => (
              <div
                key={product.id}
                className="product"
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={() => handleMouseLeave(product.id)}
                onClick={() => {
                  handleSelectedProduct(product.id);
                }}
              >
                <Link to={`/shopPage/product${product.id}`}>
                  <img
                    src={product.currentImgSrc || product.FirstImgSrc}
                    alt={product.title}
                  />
                </Link>
                <div
                  className={`info ${
                    hoveredProductId === product.id ? "hidden" : ""
                  }`}
                >
                  <p>{product.title}</p>
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
        </div>
      </div>
    </div>
  );
}

export default Shop;
