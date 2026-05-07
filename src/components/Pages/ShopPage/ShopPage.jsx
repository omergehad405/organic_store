import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./ShopPage.css";

import Button from "../../static/Button/Button";

function ShopPage() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const pagePaths = [
    "/shopPage",
    "/shopPage/secondPage",
    "/shopPage/thirdPage",
  ];
  const currentPageIndex = pagePaths.indexOf(location.pathname);

  console.log(currentPageIndex);

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      navigate(pagePaths[currentPageIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentPageIndex < pagePaths.length - 1) {
      navigate(pagePaths[currentPageIndex + 1]);
    }
  };
  return (
    <div className="shop_page">
      <div className="page-title">
        <h5 className="page-name">shop</h5>
        <h5>
          <Link to="/">home</Link> / <span>shop</span>
        </h5>
      </div>

      <Outlet
        context={{
          product,
          setProduct,
          Button,
        }}
      />

      <div className="page_navigation">
        <button onClick={handlePrevious} disabled={currentPageIndex === 0}>
          previous
        </button>
        {pagePaths.map((path, index) => (
          <Link
            key={index}
            to={path}
            className={currentPageIndex === index ? "active" : ""}
          >
            {index + 1}
          </Link>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPageIndex === pagePaths.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ShopPage;
