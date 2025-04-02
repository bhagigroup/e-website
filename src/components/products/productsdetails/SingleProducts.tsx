import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../../navbar/Navbar";

export interface ProductDetailType {
  id: string;
  "Discount Price": number;
  Price: number;
  Quantity: number | null;
  attachments: { id: string; fileUrl: string; fileName: string }[];
  variants: {
    id: string;
    name: string;
    mrp: number;
    attributes: { attributeName: string; attributeValue: string }[];
  }[];
  Name: string;
  Description: string;
  Type: string;
  Color: string;
  Size: string;
  Material: string;
  Inventory: number;
  categoryId: string;
  subCategoryId: string;
  productName: string;
}

const SingleProducts: React.FC = () => {
  const navigate = useNavigate();

  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    const fetchProductDetail = async () => {
      if (!productId) return;
      const productDetailUrl = `http://49.207.5.51:7000/cms/api/v1/product/${productId}`;
      try {
        const response = await axios.get<ProductDetailType>(productDetailUrl);
        setProduct(response.data);
        if (response.data.variants.length > 0) {
          setSelectedVariant(response.data.variants[0]);
        }
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchProductDetail();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) return;

    const payload = {
      productId: product.id,
      variantId: selectedVariant.id,
      quantity: "1",
      userId: "674b61875b09ec4b3c05bd68",
      cartId: "",
    };

    try {
      const response = await axios.post(
        "http://49.207.5.51:7000/cms/api/v1/order/add-to-cart",
        payload
      );
      navigate("/cart", { state: { cartData: response.data } });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <>
      <Navbar />
      <main className="content-wrapper">
        <nav
          className="container position-relative z-2 pt-lg-2 mt-3 mt-lg-4"
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product page
            </li>
          </ol>
        </nav>
        <section className="container pt-md-4 pb-5 mt-md-2 mt-lg-3 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
          <div className="row align-items-start">
            <div className="col-md-6 col-lg-7 sticky-md-top z-1 mb-4 mb-md-0">
              <div className="d-flex" style={{ paddingTop: "120px" }}>
                <div className="ratio ratio-1x1" style={{ maxWidth: "500px" }}>
                  <img
                    src={
                      product.attachments.length > 0
                        ? product.attachments[0].fileUrl
                        : "https://via.placeholder.com/150"
                    }
                    className="swiper-thumb-img"
                    alt={product.Name}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 position-relative">
              <div className="ps-xxl-3">
                <p className="fs-sm text-body-secondary">{product.Name}</p>
                <h1 className="h5 mb-2">{product.Description}</h1>
                <div className="border rounded-pill px-4 py-2 my-4">
                  <div className="text-dark-emphasis fs-sm py-1">
                    We will deliver your goods as soon as possible
                    <a className="text-dark-emphasis fw-medium ms-1" href="#!">
                      Check availability
                    </a>
                  </div>
                </div>
                <div className="h3">
                  ₹{selectedVariant ? selectedVariant.mrp : "N/A"}
                </div>
                <div className="d-flex gap-3 mb-4">
                  <button
                    type="button"
                    className="btn btn-lg btn-primary rounded-pill w-100"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                </div>
                <p className="fs-sm mb-4">
                  Muesli Fitness Nutritious Energy is a popular breakfast cereal
                  that is a healthy and nutritious way to start your day. This
                  delicious cereal is made up of a combination of whole grains,
                  nuts, seeds, and dried fruits.
                </p>
                <div className="d-flex flex-wrap gap-3 gap-xxl-4 fs-sm text-dark-emphasis mb-2">
                  <div className="d-flex align-items-center me-3">
                    <i className="ci-gluten-free fs-xl text-body-emphasis me-2"></i>
                    Gluten-free
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <i className="ci-broccoli fs-xl text-body-emphasis me-2"></i>
                    Plant based
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <i className="ci-leaf fs-xl text-body-emphasis me-2"></i>
                    Vegan
                  </div>
                </div>
                {product.variants.length > 0 && (
                  <div className="variants-box my-3">
                    <div
                      className="row d-flex flex-wrap gap-3"
                      style={{ justifyContent: "flex-start" }}
                    >
                      {product.variants.map((variant) => {
                        const quantityAttribute = variant.attributes.find(
                          (attr: any) => attr.attributeName === "Quantity"
                        );
                        const isSelected = selectedVariant?.id === variant.id;

                        return (
                          <div
                            key={variant.id}
                            className="col-auto"
                            style={{ width: "auto" }}
                          >
                            <div
                              className={`variant-item border p-3 rounded text-center ${
                                isSelected ? "border-primary" : ""
                              }`}
                              onClick={() => setSelectedVariant(variant)}
                              style={{
                                cursor: "pointer",
                                minWidth: "160px",
                                maxWidth: "200px",
                                padding: "15px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                              }}
                            >
                              <h6 className="mb-2">{variant.name}</h6>
                              <div className="mb-1">
                                <strong>Price:</strong>
                                <span className="ms-1">₹{variant.mrp}</span>
                              </div>
                              <div
                                style={{
                                  width: "100%",
                                  fontWeight: "bold",
                                  fontSize: "16px",
                                }}
                              >
                                <strong>Weight:</strong>
                                <span className="ms-1">
                                  {quantityAttribute
                                    ? quantityAttribute.attributeValue
                                    : "N/A"}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingleProducts;
