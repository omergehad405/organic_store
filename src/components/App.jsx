import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./static/Navbar/Navbar";
import Header from "./static/Header/Header";
import Footer from "./static/Footer/Footer";

import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import TeamPage from "./Pages/TeamPage/TeamPage";

import BlogPage from "./Pages/BlogPage/BlogPage";
import Blogs from "./Pages/BlogPage/Blogs";
import BlogDetails from "./Pages/BlogPage/BlogDetails";

import ShopPage from "./Pages/ShopPage/ShopPage";
import FirstPage from "./Pages/ShopPage/ProductsPages/FirstPage";
import ProductDetails from "./Pages/ProductDetailsPage/ProductDetails";

import ContactPage from "./Pages/ContactPage/ContactPage";
import SecondPage from "./Pages/ShopPage/ProductsPages/SecondPage";
import ThirdPage from "./Pages/ShopPage/ProductsPages/ThirdPage";

import RegisterPage from "./Pages/RegisterPage/RegesterPage";
import Login from "./Pages/RegisterPage/Login";
import Signup from "./Pages/RegisterPage/Signup";

function App() {
  const location = useLocation();
  const registerPage =
    location.pathname === "/register" ||
    location.pathname === "/register/signup";
  return (
    <div>
      {!registerPage && <Navbar />}
      {!registerPage && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blogs" element={<BlogPage />}>
          <Route index element={<Blogs />} />
          <Route path=":blogId" element={<BlogDetails />} />
        </Route>
        <Route path="/shopPage" element={<ShopPage />}>
          <Route index element={<FirstPage />} />
          <Route path="secondPage" element={<SecondPage />} />
          <Route path="thirdPage" element={<ThirdPage />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />}>
          <Route index element={<Login />} />
          <Route path="/register/signup" element={<Signup />} />
        </Route>
      </Routes>
      {!registerPage && <Footer />}
    </div>
  );
}

export default App;
