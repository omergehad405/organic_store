import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./BlogPage.css";
import "../../App.css";

function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState({});

  return (
    <div className="blog_page">
      <div className="page-title">
        <h5 className="page-name">blog</h5>
        <h5>
          <Link to="/">home</Link> / <span>blog</span>
        </h5>
      </div>

      <div className="container">
        <Outlet context={{ setSelectedBlog, selectedBlog }} />
      </div>
    </div>
  );
}

export default BlogPage;
