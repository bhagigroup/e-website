import React, { useEffect, useState } from "react";
import axios from "axios";

interface Category {
  id: string;
  name: string;
  image: string | null;
}

const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://49.207.5.51:9002/cms/api/v1/product/get-categories");
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
                <div key={category.id} className="category-item d-flex align-items-center gap-2">
                  <img 
                    src={category.image || "https://via.placeholder.com/100"} 
                    // alt={category.name} 
                    className="category-image"
                    width={50} 
                    height={50} 
                  />
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesList;
