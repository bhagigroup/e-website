import React from "react";
import CategoriesCatalog from "./CategoriesCatalog";
import ProductsList from "./ProductsList";
import Navbar from "../navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Categories: React.FC = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  return (
    <>
      <Navbar />
      <main className="content-wrapper">
        <nav className="container pt-lg-2 my-3 my-lg-4" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="home-grocery.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Catalog with sidebar filters
            </li>
          </ol>
        </nav>
        <h1 className="h3 container pb-2 pb-md-3 pb-lg-4">Shop catalog</h1>
        <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
          <div className="row">
            <aside className="col-lg-3">
              <CategoriesCatalog />
            </aside>
            <div className="col-lg-9">
              <ProductsList />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Categories;
