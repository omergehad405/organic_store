import React, { useState } from "react";
import Button from "../../Button/Button";
import "./ProductDetails";

function SelectedProduct({ Product }) {
  const [selectedImg, setSelectedImg] = useState("");

  const handleSelectedImg = (src) => {
    setSelectedImg(src);
  };
  return (
    <div className="product">
      <div className="image">
        <img
          className="main-img"
          src={selectedImg ? selectedImg : Product.FirstImgSrc}
        ></img>

        <div className="sub-images">
          <img
            src={Product.FirstImgSrc}
            onClick={() => handleSelectedImg(Product.FirstImgSrc)}
            alt="Sub Product 1"
          ></img>
          <img
            src={
              Product.SecondImgSrc ? Product.SecondImgSrc : Product.FirstImgSrc
            }
            onClick={() =>
              handleSelectedImg(
                Product.SecondImgSrc
                  ? Product.SecondImgSrc
                  : Product.FirstImgSrc
              )
            }
            alt="Sub Product 2"
          ></img>
        </div>
      </div>

      <div className="info">
        <h1 className="title">{Product.title}</h1>

        <span className="price">{Product.price}</span>

        <p>
          Plant-based, natural ingredients and organic meals prepared and
          delivered to your home.
        </p>

        <form>
          <input type="number" />
          <button>
            <Button text="Add To Cart" />
          </button>
        </form>

        <div className="icons">
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

export default SelectedProduct;
