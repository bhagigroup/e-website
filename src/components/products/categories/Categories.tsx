import React, { useEffect, useState } from "react";
import axios from "axios";

interface Category {
  id: string;
  name: string;
  image: {
    fileUrl: string;
  } | null;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://49.207.5.51:7000/cms/api/v1/product/get-categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <section>
      <div>
        {/* Categories List */}

        <div>
          <h2 className="h3 border-bottom pb-3 pb-md-4 mb-4">Categories</h2>
          <div className="row nav g-3 g-sm-4">
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
  );
};

export default Categories;
