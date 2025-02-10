import React, { useEffect, useState } from "react";
import axios from "axios";

interface Category {
  id: string;
  name: string;
  image: {
    fileUrl: string;
  } | null;
}

const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://49.207.5.51:9002/cms/api/v1/product/get-categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <section className="border-top">
        <div className="container py-lg-1">
          <div className="overflow-auto" data-simplebar>
            <div className="nav flex-nowrap justify-content-between gap-4 py-2">
              {categories.map((category) => (
                <a
                  key={category.id}
                  className="nav-link align-items-center animate-underline gap-2 p-0 d-flex"
                  href="#"
                >
                  <span
                    className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <img
                      // src={category.image?.fileUrl || "/default-image.jpg"}
                      src={category.image?.fileUrl}
                      width="30"
                      alt={category.name}
                      className="rounded-circle"
                    />
                  </span>
                  <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                    {category.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesList;
