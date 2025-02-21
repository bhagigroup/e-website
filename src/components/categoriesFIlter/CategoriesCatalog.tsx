import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CategoriesCatalog.css"; // Import the custom CSS

// Define interfaces for your API data
interface SubCategory {
  id: string;
  name: string;
}

interface ImageData {
  id: string;
  fileUrl: string;
  fileName: string;
}

interface Category {
  id: string;
  name: string;
  image?: ImageData;
  subcategories: SubCategory[];
}

const CategoriesCatalog: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Category[]>(
        "http://49.207.5.51:7000/cms/api/v1/product/all-categories"
      )
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setError("Error loading categories.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="offcanvas-lg offcanvas-start pe-lg-4" id="filterSidebar">
        <div className="offcanvas-header py-3">
          <h5 className="offcanvas-title">Filter products</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#filterSidebar"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body flex-column pt-2 py-lg-0">
          <div className="accordion pb-2" id="categories">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              categories.map((category) => (
                <div className="accordion-item border-0 mb-3" key={category.id}>
                  <h4 className="accordion-header" id={`heading${category.id}`}>
                    <button
                      type="button"
                      className="accordion-button collapsed p-0"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${category.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${category.id}`}
                    >
                      <span
                        className="d-flex align-items-center
                       justify-content-center bg-body-secondary rounded-circle me-3"
                        style={{ width: "56px", height: "56px" }}
                      >
                        <img
                          src={category.image ? category.image.fileUrl : ""}
                          width="40"
                        />
                      </span>
                      <span className="fs-sm">{category.name}</span>
                    </button>
                  </h4>
                  <div
                    className="accordion-collapse collapse"
                    id={`collapse${category.id}`}
                    aria-labelledby={`heading${category.id}`}
                    data-bs-parent="#categories"
                  >
                    <div className="accordion-body ps-4 pb-0">
                      <ul className="nav flex-column gap-2 border-start px-4 pb-1 ms-1 mb-0">
                        {category.subcategories.map((sub) => (
                          <li className="nav-item pb-1 ps-3 ms-1" key={sub.id}>
                            <a
                              className="nav-link hover-effect-underline fw-normal p-0"
                              href="#!"
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesCatalog;
