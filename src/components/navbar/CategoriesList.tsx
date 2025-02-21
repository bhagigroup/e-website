// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductsList from "../categoriesFIlter/ProductsList";
// interface Category {
//   id: string;
//   name: string;
//   image: {
//     fileUrl: string;
//   } | null;
// }

// interface Product {
//   id: string;
//   Name: string;
//   attachments: { fileUrl: string }[];
// }

// const CategoriesList: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
//     null
//   );

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(
//           "http://49.207.5.51:9002/cms/api/v1/product/get-categories"
//         );
//         console.log("Fetched categories:", response.data);

//         if (Array.isArray(response.data)) {
//           setCategories(response.data);
//         } else {
//           console.error("Invalid categories format:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     if (selectedCategoryId) {
//       fetchProducts(selectedCategoryId);
//     }
//   }, [selectedCategoryId]);

//   const fetchProducts = async (categoryId: string) => {
//     try {
//       console.log("Fetching products for category:", categoryId);
//       const response = await axios.post(
//         "http://49.207.5.51:9002/cms/api/v1/product/products-by-filter",
//         { categoryId }
//       );
//       console.log("Fetched products:", response.data);
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   return (
//     <React.Fragment>
//       <section className="border-top">
//         <div className="container py-lg-1">
//           <div className="overflow-auto">
//             <div className="nav flex-nowrap justify-content-between gap-4 py-2">
//               {categories.length > 0 ? (
//                 categories.map((category) => (
//                   <button
//                     key={category.id}
//                     className={`nav-link align-items-center animate-underline gap-2 p-0 d-flex ${
//                       selectedCategoryId === category.id ? "active" : ""
//                     }`}
//                     onClick={() => setSelectedCategoryId(category.id)}
//                     style={{
//                       background: "none",
//                       border: "none",
//                       cursor: "pointer",
//                       display: "flex",
//                       alignItems: "center",
//                       pointerEvents: "auto",
//                       zIndex: 9999,
//                     }}
//                   >
//                     <span
//                       className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
//                       style={{ width: "40px", height: "40px" }}
//                     >
//                       <img
//                         src={category.image?.fileUrl || "/default-image.jpg"}
//                         width="30"
//                         alt={category.name}
//                         className="rounded-circle"
//                       />
//                     </span>
//                     <span className="d-block fw-semibold text-nowrap ms-1">
//                       {category.name}
//                     </span>
//                   </button>
//                 ))
//               ) : (
//                 <p>No categories available</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Render ProductsList Component */}
//       <ProductsList products={products} />
//     </React.Fragment>
//   );
// };

// export default CategoriesList;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://49.207.5.51:7000/cms/api/v1/product/get-categories"
        );
        console.log("Fetched categories:", response.data);

        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.error("Invalid categories format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // When a category is clicked, navigate to ProductsList and pass the categoryId in state
  const handleCategoryClick = (categoryId: string) => {
    navigate("/productsfilter", { state: { categoryId } });
  };

  return (
    <section className="border-top">
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
                  <span className="d-block fw-semibold text-nowrap ms-1">
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
