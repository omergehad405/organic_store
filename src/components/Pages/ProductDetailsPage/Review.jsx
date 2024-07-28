import React, { useContext, useState } from "react";
import Button from "../../Button/Button";

function Review() {
  const currentDate = new Date().toDateString();

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Omar Gehad",
      email: "omar@example.com",
      reviewText: "It's very good",
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

  return (
    <div className="review-box">
      <h2>
        <span>{reviews.length} </span>
        review for
        <span className="product-name"> bob’s red mill</span>
      </h2>
      {reviews.map((review) => (
        <div className="review" key={review.id}>
          <img
            src="path/to/default-image.jpg"
            alt={`${review.name}'s avatar`}
          />
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
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <Button text="submit" />
      </form>
    </div>
  );
}

export default Review;
