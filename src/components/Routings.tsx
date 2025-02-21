import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Navbar = React.lazy(() => import("./navbar/Navbar"));
const Banner = React.lazy(() => import("./banner/Banner"));

const FeaturedCategories = React.lazy(
  () => import("./banner/FeaturedCategories")
);
const CategoryProducts = React.lazy(
  () => import("./products/CategoryProducts")
);
const LifeStyleProducts = React.lazy(
  () => import("./productsRecipes/LifeStyleProducts")
);
const Categories = React.lazy(() => import("./categoriesFIlter/Categories"));
const Routings: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Home Page - Displays both Navbar and FeaturedCategories */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Banner />
              <FeaturedCategories />
              <CategoryProducts />
              <LifeStyleProducts />
            </>
          }
        />
        <Route path="/productsfilter" element={<Categories />} />

        {/* <Route path="/products/:categoryId" element={<ProductsList />} /> */}
      </Routes>
    </Suspense>
  );
};

export default Routings;
