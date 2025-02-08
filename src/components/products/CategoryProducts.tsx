import React from "react";
import Categories from "./categories/Categories";
import PopularProducts from "./productsdetails/PopularProducts";

const CategoryProducts: React.FC = () => {
  return (
    <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
      <div className="row">
        {/* Categories List */}
        <div className="col-lg-3 pb-2 pb-sm-3 pb-md-4 mb-5 mb-lg-0">
           <Categories/>
        </div>

        {/* Popular Products */}
        <div className="col-lg-9">
           <PopularProducts/>
        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;
