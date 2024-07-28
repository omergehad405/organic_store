import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

function Blogs() {
  const { setSelectedBlog } = useOutletContext();
  const [blog, setBlog] = useState([
    {
      id: 1,
      blogImg: "../blog/blog1.jpg",
      blogtitle: "Health Benefits of a Raw Food",
      bloginfo:
        "Each month our buyers introduce new products to our stores, and each month we fall for new favorites. From fast and easy meal solutions to seasonal superstars (hello, pumpkin spice...",
    },
    {
      id: 2,
      blogImg: "../blog/blog2.jpg",
      blogtitle: "The Anytime Snack Pack for Everyone",
      bloginfo:
        "With their unusual shapes and varied colors, winter squash — including acorn, spaghetti and butternut squash — make beautiful table decorations. Nothing pretties up a place like a small bunch...",
    },
    {
      id: 3,
      blogImg: "../blog/blog3.jpg",
      blogtitle: "6 After-School Snacks the Kiddos Will Love",
      bloginfo:
        "Look beyond butternut squash’s intimidating hard skin, and you’ll find a bright orange flesh, buttery texture and slightly sweet, nutty flavor — with so many meal possibilities! Why should you...",
    },
    {
      id: 4,
      blogImg: "../blog/blog4.jpg",
      blogtitle: "5 Easy Ways to Turn a Sweet Potato into a Delicious Dinner",
      bloginfo:
        "Why should you make butternut squash your go-to ingredient for fall and winter meals? Look beyond butternut squash’s intimidating hard skin, and you’ll find a bright orange flesh, buttery texture...",
    },
    {
      id: 5,
      blogImg: "../blog/blog5.jpg",
      blogtitle: "100+ Fall Pumpkin Ideas to Satisfy Your Obsession",
      bloginfo:
        "The kids are back in school and the slightly cooler weather has arrived, which means it’s time for all things pumpkin to return to stores. From actual pumpkins to pumpkin...",
    },
    {
      id: 6,
      blogImg: "../blog/blog6.jpg",
      blogtitle: "What’s New: Pumpkin Spice Bites, Vegan Vitamins and More",
      bloginfo:
        "Each month our buyers introduce new products to our stores, and each month we fall for new favorites. From fast and easy meal solutions to seasonal superstars (hello, pumpkin spice...",
    },
  ]);

  const handleSelectedBlog = (id) => {
    const selected = blog.find((blog) => blog.id === id);
    setSelectedBlog(selected);
  };

  return (
    <div className="blog_container">
      {blog.map((blog) => (
        <div className="blog" key={blog.id}>
          <Link to={`/blogs/blog${blog.id}`}>
            <img
              src={blog.blogImg}
              alt={blog.blogtitle}
              onClick={() => handleSelectedBlog(blog.id)}
            />
          </Link>
          <h1 className="title">{blog.blogtitle}</h1>
          <p>{blog.bloginfo}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
