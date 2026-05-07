import React, { useContext, useState } from "react";
import Button from "../../static/Button/Button";
import "./ProductDetails.css"; // Ensure the file has the correct extension
import { CartContext } from "../../context/CartContext";

function SelectedProduct({ Product }) {
  const [selectedImg, setSelectedImg] = useState(Product.FirstImgSrc);
  const { setCart } = useContext(CartContext);

  const handleSelectedImg = (src) => {
    setSelectedImg(src);
  };

  function handleCartItems() {
    const productToAdd = {
      ...Product,
      currentImgSrc: Product.FirstImgSrc,
    };
    setCart((prevCart) => {
      const currentProduct = prevCart.find((item) => item.id === Product.id);
      if (currentProduct) {
        return prevCart.map((item) =>
          item.id === Product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  }

  return (
    <div className="product">
      <div className="image">
        <img className="main-img" src={selectedImg} alt="Main product" />

        <div className="sub-images">
          <img
            src={Product.FirstImgSrc}
            onClick={() => handleSelectedImg(Product.FirstImgSrc)}
            alt="Sub Product 1"
          />
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
          />
        </div>
      </div>

      <div className="info">
        <h1 className="title">{Product.title}</h1>

        <span className="price">${Product.price}</span>

        <p>
          Plant-based, natural ingredients and organic meals prepared and
          delivered to your home.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <input type="number" min="1" defaultValue="1" />
          <button type="button" onClick={handleCartItems}>
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
