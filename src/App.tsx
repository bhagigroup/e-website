import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import FeaturedCategories from "./components/banner/FeaturedCategories";
import CategoryProducts from "./components/products/CategoryProducts";
import LifeStyleProducts from "./components/productsRecipes/LifeStyleProducts";
import SpecialProducts from "./components/productsRecipes/SpecialProducts";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <>
      {/* <Navbar />
      <Banner />
      <FeaturedCategories />
      <CategoryProducts />
      <LifeStyleProducts />
      <SpecialProducts /> */}
      <Home />
    </>
  );
};

export default App;
