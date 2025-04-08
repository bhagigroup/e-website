import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductServices } from "../../services/ProductServices";
interface Product {
  id: string;
  Name: string;
  price: number;
  "Discount Price"?: number;
  attachments?: { fileUrl: string }[];
  Size?: string;
}

const PopularProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductServices.getAllProducts();
      if (data) {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (productId: string) => {
    // Navigate to the detail page based on product id
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4 mb-3 mb-lg-4">
        <h2 className="h3 mb-0">Popular products</h2>
        <div className="nav ms-3">
          <a className="nav-link animate-underline px-0 py-2">
            <span className="animate-target">View all</span>
            <i className="ci-chevron-right fs-base ms-1"></i>
          </a>
        </div>
      </div>

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-3 row-cols-xl-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div
              className="card product-card h-100 bg-transparent
             border-0 shadow-none"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="position-relative z-2">
                <a className="d-block p-2 p-lg-3">
                  <div
                    className="ratio"
                    style={{ paddingBottom: "calc(160 / 191 * 100%)" }}
                  >
                    <img
                      src={
                        product.attachments && product.attachments.length > 0
                          ? product.attachments[0].fileUrl
                          : "https://via.placeholder.com/150"
                      }
                    />
                  </div>
                </a>
              </div>
              <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                <div className="h6 mb-2">Starts from ₹ {product.price}</div>

                <h3 className="fs-sm lh-base mb-0">
                  <a
                    className="hover-effect-underline fw-normal d-block fs-sm fw-medium text-truncate"
                    style={{ cursor: "pointer" }}
                  >
                    {product.Name}
                  </a>
                </h3>
              </div>
              {/* <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                {product.Size || "-"}
              </div> */}
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-primary w-100 rounded-pill
                   px-3"
                >
                  View Options
                </button>
                <button
                  type="button"
                  className="btn btn-icon btn-secondary rounded-circle animate-pulse"
                  aria-label="Add to wishlist"
                >
                  <i className="ci-heart fs-base animate-target" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularProducts;
