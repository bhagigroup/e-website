import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import FeaturedCategories from './components/banner/FeaturedCategories';
import CategoryProducts from './components/products/CategoryProducts';
// import LifestyleShop from './components/banner/LifestyleShop';

const App = () => {
  return (
    // <Login/>
    <>
     <Navbar/>
     <Banner/>
     <FeaturedCategories/>
     <CategoryProducts/>
     {/* <LifestyleShop/> */}
    </>
   
  );
};

export default App;