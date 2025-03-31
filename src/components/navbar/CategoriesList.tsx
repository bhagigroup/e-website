import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarServices } from "../services/navbarServices";

interface Category {
  id: string;
  name: string;
  image: {
    fileUrl: string;
  } | null;
}

const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await NavbarServices.fetchCategories();
      if (Array.isArray(data)) {
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    navigate("/productsfilter", { state: { categoryId } });
  };

  return (
    <section
      className="border-top"
      style={{
        position: "relative",
        zIndex: 1000,
        background: "white",
        paddingTop: "10px",
      }}
    >
      <div className="container py-lg-1">
        <div className="overflow-auto">
          <div className="nav flex-nowrap justify-content-between gap-4 py-2">
            {categories.length > 0 ? (
              categories.map((category) => (
                <button
                  key={category.id}
                  className="nav-link align-items-center animate-underline gap-2 p-0 d-flex"
                  onClick={() => handleCategoryClick(category.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    pointerEvents: "auto",
                    zIndex: 9999,
                  }}
                >
                  <span
                    className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <img
                      src={category.image?.fileUrl || "/default-image.jpg"}
                      width="30"
                      alt={category.name}
                      className="rounded-circle"
                    />
                  </span>
                  <span
                    className="hover-effect-underline fw-normal d-block
                   fs-sm fw-medium text-truncate d-block fw-semibold text-nowrap ms-1"
                    style={{ cursor: "pointer" }}
                  >
                    {category.name}
                  </span>
                </button>
              ))
            ) : (
              <p>No categories available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesList;
