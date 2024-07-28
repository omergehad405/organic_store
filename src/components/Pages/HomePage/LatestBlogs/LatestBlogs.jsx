import React, { useState } from "react";
import "./LatestBlogs.css";
import "../HomePage.css";

function LatestBlogs() {
  const [blog, setBlog] = useState([
    {
      blogId: 1,
      blogImg: "../blog/blog1.jpg",
      blogTitle: "Health Benefits of a Raw Food",
    },
    {
      blogId: 2,
      blogImg: "../blog/blog2.jpg",
      blogTitle: "The Anytime Snack Pack for Everyone",
    },
    {
      blogId: 3,
      blogImg: "../blog/blog3.jpg",
      blogTitle: "6 After-School Snacks the Kiddos Will Love",
    },
  ]);

  return (
    <section className="LBlogs">
      <h1 className="title">latest from the blog</h1>
      <div className="container">
        {blog.map((blog) => (
          <div className="blog" key={blog.id}>
            <a href="">
              <img src={blog.blogImg} />
            </a>

            <h3>{blog.blogTitle}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestBlogs;
