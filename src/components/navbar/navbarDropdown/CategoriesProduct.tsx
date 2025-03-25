import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import Navbar from "../Navbar";
import CategoriesCatalog from "../../categoriesFIlter/CategoriesCatalog";

const CategoriesProduct: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const categoryId = location.state?.categoryId || null;
  const subCategoryId = location.state?.subCategoryId || null;

  if (!categoryId) {
    navigate("/");
    return null;
  }

  return (
    <>
      <Navbar />

      <main className="content-wrapper">
        <nav className="container pt-lg-2 my-3 my-lg-4" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {/* {location.state?.categoryName} */}
              Catalog with sidebar filters
            </li>
          </ol>
        </nav>
        <h1 className="h3 container pb-2 pb-md-3 pb-lg-4">
          {/* {location.state?.categoryName} */}
          Shop Catalog
        </h1>
        <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
          <div className="row">
            <aside className="col-lg-3">
              <CategoriesCatalog />
            </aside>
            <div className="col-lg-9">
              <ProductDisplay
                categoryId={categoryId}
                subCategoryId={subCategoryId}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CategoriesProduct;
