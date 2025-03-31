import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Navbar = React.lazy(() => import("./navbar/Navbar"));
const CategoriesProduct = React.lazy(
  () => import("./navbar/navbarDropdown/CategoriesProduct")
);
const Cart = React.lazy(() => import("./navbar/Cart"));

const DeliveryOptions = React.lazy(() => import("./orders/DeliveryOptions"));

const AccountOrders = React.lazy(() => import("./navbar/AccountOrders"));

const Categories = React.lazy(() => import("./categoriesFIlter/Categories"));

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

// const SpecialProducts = React.lazy(
//   () => import("./productsRecipes/SpecialProducts")
// );

const RecipesSection = React.lazy(
  () => import("./productsRecipes/RecipesSection")
);

const SingleProducts = React.lazy(
  () => import("./products/productsdetails/SingleProducts")
);
const Footer = React.lazy(() => import("./footer/Footer"));

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
              <RecipesSection />
              {/* <SpecialPr oducts /> */}
              <Footer />
            </>
          }
        />
        <Route path="/productsfilter" element={<Categories />} />
        <Route path="/product/:productId" element={<SingleProducts />} />
        <Route path="/categories-filter" element={<CategoriesProduct />} />
        {/* <Route path="/products/:categoryId" element={<ProductsList />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery-options" element={<DeliveryOptions />} />

        <Route path="/account-orders" element={<AccountOrders />} />
      </Routes>
    </Suspense>
  );
};

export default Routings;
