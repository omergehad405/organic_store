import React from "react";
import "./HomePage.css";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Products from "./Products/Products";
import Add from "./Adds/Add";
import WhyUs from "./WhyUs/WhyUs";
import LatestBlogs from "./LatestBlogs/LatestBlogs";

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Add />
      <WhyUs />
      <LatestBlogs />
    </div>
  );
}

export default HomePage;
