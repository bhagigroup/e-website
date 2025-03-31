import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { NavbarServices } from "../services/navbarServices";

interface Attachment {
  id: string;
  fileUrl: string;
  fileName: string;
}

interface Product {
  id: string;
  Name: string;
  Size: string;
  price: number;
  categoryId: string;
  subCategoryId: string;
  attachments: Attachment[];
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const navigate = useNavigate();

  // Set to 2 for testing pagination display
  const productsPerPage = 10;

  const location = useLocation();
  const categoryId = location.state?.categoryId;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data;
        if (categoryId) {
          data = await NavbarServices.getProductsByFilter(categoryId);
        } else {
          data = await NavbarServices.getAllProducts();
        }

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError("Invalid response format.");
        }
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const offset = currentPage * productsPerPage;
  const currentProducts = products.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };
  const handleProductClick = (productId: string) => {
    // Navigate to the detail page based on product id
    navigate(`/product/${productId}`);
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <div className="fs-sm text-body-emphasis text-nowrap mb-2 mb-sm-0">
          Found <span className="fw-semibold">{products.length}</span> items
        </div>
        <div className="d-flex align-items-center text-nowrap">
          <label className="form-label fw-semibold mb-0 me-2">Sort by:</label>
          <div style={{ width: "200px" }}>
            <select
              className="form-select rounded-pill"
              data-select='{
                "removeItemButton": false,
                "classNames": {
                  "containerInner": ["form-select", "rounded-pill"]
                }
              }'
            >
              <option value="Relevance">Relevance</option>
              <option value="Popularity">Popularity</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Newest Arrivals">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>
      {loading && <p>Loading products...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-3 row-cols-xl-4 g-4">
        {currentProducts.length > 0
          ? currentProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <a
                      className="d-block p-2 p-lg-3"
                      onClick={() => handleProductClick(product.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className="ratio"
                        style={{ paddingBottom: "calc(160 / 191 * 100%)" }}
                      >
                        <img
                          src={
                            product.attachments &&
                            product.attachments.length > 0
                              ? product.attachments[0].fileUrl
                              : "/default-product.jpg"
                          }
                          alt={product.Name}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">₹{product.price}</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <a
                        className="hover-effect-underline fw-normal d-block fs-sm fw-medium text-truncate"
                        style={{ cursor: "pointer" }}
                      >
                        {product.Name}
                      </a>
                    </h3>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-primary w-100 rounded-pill
                   px-3"
                      onClick={() => handleProductClick(product.id)}
                    >
                      View variants
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
            ))
          : !loading && <p className="text-center">No products available.</p>}
      </div>

      {/* Pagination Controls */}
      {products.length > 0 && (
        <div className="d-flex justify-content-center mt-4">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      )}
    </>
  );
};

export default ProductsList;
