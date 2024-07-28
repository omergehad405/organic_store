import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./ShopPage.css";
import "../../App.css";

function ShopPage() {
  const [product, setProduct] = useState({});
  return (
    <div className="shop_page">
      <div className="page-title">
        <h5 className="page-name">shop</h5>
        <h5>
          <Link to="/">home</Link> / <span>shop</span>
        </h5>
      </div>

      <Outlet context={{ product, setProduct }} />
    </div>
  );
}

export default ShopPage;
