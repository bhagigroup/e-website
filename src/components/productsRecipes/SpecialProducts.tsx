import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const products = [
  {
    id: 1,
    name: "Pure virgin olive oil Basso",
    price: "$18.60",
    image: "assets/img/shop/grocery/09.png",
    weight: "1000ml",
  },
  {
    id: 2,
    name: "Fresh pork butt steaks with rosemary",
    price: "$9.15",
    image: "assets/img/shop/grocery/10.png",
    weight: "500g",
  },
  {
    id: 3,
    name: "Fresh red grapefruit",
    price: "$3.40",
    image: "assets/img/shop/grocery/11.png",
    weight: "1kg",
  },
  {
    id: 4,
    name: "Soft creme cheese ",
    price: "$2.40",
    image: "assets/img/shop/grocery/12.png",
    weight: "1kg",
  },
];

const SpecialProducts: React.FC = () => {
  return (
    <section className="container pt-xl-2 pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
      <div className="row">
        {/* Banner */}
        <div className="col-sm-5 col-md-4 col-lg-3 mb-5 mb-sm-0">
          <div className="pe-lg-2 pe-xl-4">
            <div
              className="rounded-4 overflow-hidden"
              style={{ backgroundColor: "#a6cddc" }}
            >
              <div className="pt-3 px-3 mt-3 mx-3">
                <h4 className="mb-2 mb-xl-3">
                  Make breakfast healthy and easy
                </h4>
                <div className="nav">
                  <a
                    className="nav-link animate-underline stretched-link px-0"
                    href="#!"
                  >
                    <span className="animate-target">Shop now</span>
                    <i className="ci-chevron-right fs-base mt-1 ms-1"></i>
                  </a>
                </div>
              </div>
              <div
                className="ratio mt-n2"
                style={{ paddingBottom: "calc(240 / 282 * 100%)" }}
              >
                <img
                  src="assets/img/shop/grocery/banner.jpg"
                  alt="Banner"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Special products carousel */}
        <div className="col-sm-7 col-md-8 col-lg-9">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4 mb-3 mb-lg-4">
            <h2 className="h3 mb-0">Special products</h2>
            <div className="nav ms-3">
              <a className="nav-link animate-underline px-0 py-2">
                <span className="animate-target text-nowrap">View all</span>
                <i className="ci-chevron-right fs-base ms-1"></i>
              </a>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={24}
            pagination={{ clickable: true }}
            breakpoints={{
              840: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            modules={[Pagination]}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      className="btn btn-icon btn-sm btn-secondary position-absolute top-0 end-0 mt-1 me-1"
                      aria-label="Add to Wishlist"
                    >
                      <i className="ci-heart"></i>
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
                          src={product.image}
                          alt={product.name}
                          className="w-100"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">{product.price}</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <a
                        className="hover-effect-underline fw-normal"
                        href="shop-product-grocery.html"
                      >
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    {product.weight}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SpecialProducts;
