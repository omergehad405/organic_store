import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import TeamPage from "./Pages/TeamPage/TeamPage";

import BlogPage from "./Pages/BlogPage/BlogPage";
import Blogs from "./Pages/BlogPage/Blogs";
import BlogDetails from "./Pages/BlogPage/BlogDetails";

import ShopPage from "./Pages/ShopPage/ShopPage";
import Shop from "./Pages/ShopPage/Shop";
import ProductDetails from "./Pages/ProductDetailsPage/ProductDetails";

import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/team" element={<TeamPage />} />

          <Route path="/blogs" element={<BlogPage />}>
            <Route index element={<Blogs />} />
            <Route path=":blogId" element={<BlogDetails />} />
          </Route>

          <Route path="/shopPage" element={<ShopPage />}>
            <Route index element={<Shop />} />
            <Route path=":productId" element={<ProductDetails />} />
          </Route>

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
