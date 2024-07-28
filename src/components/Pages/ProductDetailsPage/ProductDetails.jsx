import React, { createContext, useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./ProductDetails.css";
import "../../App.css";
import SelectedProduct from "./SelectedProduct";
import { useOutletContext } from "react-router-dom";

const ActiveContext = createContext();

function ProductDetails() {
  const [activeSection, setActiveSection] = useState("description");
  const { product } = useOutletContext();
  const [decription, setDecription] = useState([
    {
      id: 1,
      title: "description",
      firstAdvantage: "100% raw & natural cold pressed coconut oil",
      secondAdvantage: "Fantastic for baking, frying & spreading",
      thirdAdvantage: "Purity of the oil means no smoke when used for cooking",
      fourthAdvantage: "Suitable for vegetarians & vegans & ethically sourced",
      productInfo:
        "Coconut Oil is a great-tasting, nutritious alternative to use when cooking or baking. Coconut Oil is a naturally rich source of medium chain triglycerides (MCTs), which are quickly absorbed by the body to produce energy. MCTs are hydrolyzed more rapidly and metabolized more readily than long chain fatty acids. Our cold-pressed, organic extra virgin oil is from the Philippines and is naturally free of trans fat, 100% cholesterol free, contains no hexane and is certified non-GMO.  Vita Extra Virgin Organic Coconut Oil is highly heat stable, ideal for cooking and makes a delicious, energizing substitute for regular oils, butter or shortening in recipes. Spread on bread or mix into your favorite smoothie",
    },
  ]);
  const currentDate = new Date().toDateString();

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "ahmed ibrahim",
      email: "ahmed554@gmail.com",
      reviewText: "very good product",
      saveInfo: false,
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    reviewText: "",
    saveInfo: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewReview({
      ...newReview,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([
      ...reviews,
      {
        id: reviews.length + 1,
        ...newReview,
      },
    ]);
    setNewReview({
      name: "",
      email: "",
      reviewText: "",
      saveInfo: false,
    });
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="product-information">
      <div className="container">
        <SelectedProduct Product={product} />

        <div className="product-options">
          <div className="options">
            <button
              className={`description-btn ${
                activeSection === "description" ? "active" : ""
              }`}
              onClick={() => handleSectionChange("description")}
            >
              description
            </button>

            <button
              className={`reviews-btn ${
                activeSection === "reviews" ? "active" : ""
              }`}
              onClick={() => handleSectionChange("reviews")}
            >
              reviews
            </button>
          </div>

          {activeSection === "description" && (
            <section className="description">
              {decription.map((e) => (
                <div key={e.id} className="description-box">
                  <h2>{e.title}</h2>
                  <ul>
                    <li>{e.firstAdvantage}</li>
                    <li>{e.secondAdvantage}</li>
                    <li>{e.thirdAdvantage}</li>
                    <li>{e.fourthAdvantage}</li>
                  </ul>
                  <p>{e.productInfo}</p>
                </div>
              ))}
            </section>
          )}

          {activeSection === "reviews" && (
            <section className="review-box">
              <h2>
                <span>{reviews.length} </span>
                review for
                <span className="product-name"> bob’s red mill</span>
              </h2>
              {reviews.map((review) => (
                <div className="review" key={review.id}>
                  <img src="path/to/default-image.jpg" alt={`avatar`} />
                  <div className="review-info">
                    <h1>
                      {review.name} {currentDate}
                    </h1>
                    <p>{review.reviewText}</p>
                  </div>
                </div>
              ))}

              <form onSubmit={handleSubmit}>
                <h1 className="title">add a review</h1>
                <label>Name *</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                />

                <label>Email *</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={newReview.email}
                  onChange={handleInputChange}
                />

                <label>Your Review *</label>
                <textarea
                  required
                  name="reviewText"
                  value={newReview.reviewText}
                  onChange={handleInputChange}
                />

                <div className="check">
                  <input
                    type="checkbox"
                    id="checkBox"
                    name="saveInfo"
                    checked={newReview.saveInfo}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="checkBox">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <Button text="submit" />
              </form>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export { ActiveContext };
export default ProductDetails;
