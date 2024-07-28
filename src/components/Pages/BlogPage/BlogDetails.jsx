import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Button from "../../Button/Button";
import "./BlogPage.css";

function BlogDetails() {
  const { selectedBlog } = useOutletContext();

  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    reviewText: "",
    saveInfo: false,
  });
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Omar Gehad",
      email: "omar@example.com",
      reviewText: "It's very good",
      saveInfo: false,
    },
  ]);
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
    <main className="blog_details">
      <div className="main_details">
        <h1>{selectedBlog.blogtitle}</h1>
        <img src={selectedBlog.blogImg} alt={selectedBlog.blogtitle} />
        <div className="paragraphs">
          <p>
            Each month our buyers introduce new products to our stores, and each
            month we fall for new favorites. From fast and easy meal solutions
            to seasonal superstars (hello, pumpkin spice snacks), here are 13
            newcomers to look for this month. Look beyond butternut squash’s
            intimidating hard skin, and you’ll find a bright orange flesh,
            buttery texture and slightly sweet, nutty flavor — with so many meal
            possibilities! Why should you make butternut squash your go-to
            ingredient for fall and winter meals?
          </p>
          <p>
            1. It’s a nutritional ingredient with taste, texture and autumn
            nostalgia. Butternut squash is one of the season’s all-star
            ingredients for good reason. It satisfies as the headlining
            ingredient in recipes like the always-popular Classic Butternut
            Squash Soup, adds flavor to salads, lends creaminess to rice dishes,
            and offers sweetness to desserts like Butternut Custard Pecan Pie.
          </p>
          <p>
            2. It’s got versatile flavor that will pair beautifully with almost
            anything. Like other winter squash, butternut squash pairs well with
            a variety of flavors from cinnamon and cumin to coconut oil and
            toasted nuts, making it a versatile choice for weekday meals and
            celebrations too.
          </p>
          <p>
            3. It’s easy to store, and lasts longer than you might think.
            Butternut squash can be stored at room temperature in a cool, dry
            place for a month or more. After cutting, store it in an airtight
            container or wrap tightly and refrigerate.
          </p>
          <p>
            4. It’s easy to cut and prepare…really! Don’t be daunted by its
            rock-hard surface! We can help with this how-to guide for cutting
            butternut, acorn and spaghetti squash.
          </p>
          <p>
            5. It’s a prime candidate for roasting, which makes for great
            make-ahead meal planning. Its dense flesh caramelizes well, taking
            on deep sweetness and nuttiness. It doesn’t get more straightforward
            than this no-prep Easiest Whole Roasted Winter Squash recipe — plunk
            the whole squash on a baking sheet and roast until tender. Once
            roasted, serve as-is, or spoon into gratins, casseroles, winter
            salads and stews. Or you can purée in a food processor until smooth
            to make soups, risottos, dips and spreads, or baked goods.
          </p>
          <p>
            With their unusual shapes and varied colors, winter squash —
            including acorn, spaghetti and butternut squash — make beautiful
            table decorations. Nothing pretties up a place like a small bunch of
            squash and pumpkins on the table, especially when today’s decor
            becomes tomorrow’s dish.
          </p>
          <p>
            Plus, try winter squash like butternut in place of potato sometimes
            and you’ll get a rich source of vitamins A and C plus small amounts
            of a variety of mineral nutrients.
          </p>
        </div>
        <div className="tags">
          <h5>tags: </h5>
          <button>
            <Link to="/blogs">food</Link>
          </button>
          <button>
            <Link to="/blogs">good</Link>
          </button>
          <button>
            <Link to="/blogs">health</Link>
          </button>
          <button>
            <Link to="/blogs">nitrat</Link>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <h1 className="title">add a review</h1>

          <textarea
            required
            name="reviewText"
            value={newReview.reviewText}
            onChange={handleInputChange}
            placeholder="Comments*"
          />

          <input
            required
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            placeholder="name*"
          />

          <input
            required
            type="email"
            name="email"
            value={newReview.email}
            onChange={handleInputChange}
            placeholder="E-mail*"
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
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button>
            <Button text="submit" />
          </button>
        </form>
      </div>
      <div className="sideBar">
        <div className="recent_blog">
          <h1 className="title">recent posts</h1>
          <ul>
            <li>
              <Link to="/blogs">1- Health Benefits of a Raw Food</Link>
            </li>
            <li>
              <Link to="/blogs">2- The Anytime Snack Pack for Everyone</Link>
            </li>
            <li>
              <Link to="/blogs">
                3- 6 After-School Snacks the Kiddos Will Love
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                4- 5 Easy Ways to Turn a Sweet Potato into a Delicious Dinner
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                5- 100+ Fall Pumpkin Ideas to Satisfy Your Obsession
              </Link>
            </li>
          </ul>
        </div>
        <div className="recent_comments">
          <h1 className="title">recent comments</h1>
          <div>
            <span>
              <i className="fa-solid fa-comment"></i>
              admin on
            </span>
            <p>The Anytime Snack Pack for Everyone</p>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-comment"></i>
              admin on
            </span>
            <p>Bob’s Red Mill</p>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-comment"></i>
              admin on
            </span>
            <p>Organic Leek bunch</p>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-comment"></i>
              admin on
            </span>
            <p>Organic Parsley</p>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-comment"></i>
              admin on
            </span>
            <p>Cascadian Farm Organic Cinnamon Crunch</p>
          </div>
        </div>
        <div className="categories">
          <h1 className="title">categories</h1>
          <div className="links">
            <Link to="/blogs">new products</Link>
            <Link to="/blogs">our stores</Link>
            <Link to="/blogs">your health</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogDetails;
