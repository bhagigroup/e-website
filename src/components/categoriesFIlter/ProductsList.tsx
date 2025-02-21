import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

interface Attachment {
  id: string;
  fileUrl: string;
  fileName: string;
}

interface Product {
  id: string;
  Name: string;
  Size: string;
  Price: number;
  categoryId: string;
  subCategoryId: string;
  attachments: Attachment[];
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  // Set to 2 for testing pagination display
  const productsPerPage = 2;

  const location = useLocation();
  const categoryId = location.state?.categoryId;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        if (categoryId) {
          response = await axios.post(
            "http://49.207.5.51:7000/cms/api/v1/product/products-by-filter",
            {
              name: "",
              categoryId: categoryId,
              subCategoryId: "",
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else {
          response = await axios.get(
            "http://49.207.5.51:7000/cms/api/v1/product/get-products"
          );
        }
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setError("Invalid response format.");
          console.error("Invalid API response format:", response.data);
        }
      } catch (error) {
        setError("Failed to fetch products.");
        console.error("Error fetching products:", error);
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
                    <button
                      type="button"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      aria-label="Add to Wishlist"
                    >
                      <i className="ci-heart animate-target"></i>
                    </button>
                    <a
                      className="d-block p-2 p-lg-3"
                      href="shop-product-grocery.html"
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
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            type="button"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement
                            aria-label="Decrement quantity"
                          >
                            <i className="ci-minus fs-sm"></i>
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm bg-primary text-white w-100"
                            value="0"
                            min="0"
                            readOnly
                          />
                          <button
                            type="button"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment
                            aria-label="Increment quantity"
                          >
                            <span data-count-input-value></span>
                            <i className="ci-plus fs-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">${product.Price}</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <a
                        className="hover-effect-underline fw-normal"
                        href="shop-product-grocery.html"
                      >
                        {product.Name}
                      </a>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    {product.Size}
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
