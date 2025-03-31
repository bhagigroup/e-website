import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ProductServices } from "../services/ProductServices";
interface Banner {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  image: {
    fileUrl: string;
  } | null;
}

const Banner: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  //alert("Categories"+ JSON.stringify(categories))
  const navigate = useNavigate();
  useEffect(() => {
    // Initialize Swiper
    new Swiper(".swiper", {
      modules: [Pagination, Autoplay, EffectFade],
      effect: "fade",
      loop: true,
      speed: 400,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });

    const fetchCategories = async () => {
          const data = await ProductServices.getBanners();
          if (Array.isArray(data)) {
            setBanners(data);
          }
        };
    fetchCategories();

  }, []);

  const handleCategoryClick = (categoryId: string) => {
    alert("helloo...")
    navigate("/productsfilter", { state: { categoryId } });
  };

  return (
    <div>
      <main className="content-wrapper">
        <section className="position-relative">
          <div className="swiper position-absolute top-0 start-0 w-100 h-100">
            <div className="swiper-wrapper">
              {/* Slide 1 */}
              {banners.map((category) => (
              <div
                key={category.id}
                className="swiper-slide"
                style={{ backgroundColor: "#6dafca" }}
              >
                <div className="position-absolute d-flex align-items-center w-100 h-100 z-2">
                  <div className="container mt-lg-n4">
                    <div className="row">
                      <div className="col-9 col-sm-8 col-md-7 col-lg-6">
                        <p className="fs-sm text-white mb-lg-4">
                          🔥 Free shipping - order over <strong>50$</strong>
                        </p>
                        <h2 className="display-4 pb-2 pb-md-3 pb-lg-4">
                          Healthy Food Available to Everyone
                        </h2>
                        <a className="btn btn-lg btn-outline-light rounded-pill" onClick={() => handleCategoryClick(category.categoryId)}>
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={category.image?.fileUrl}
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rtl-flip"
                  alt="Healthy Food"
                />
              </div>
              ))}

            </div>

            {/* Slider pagination (Bullets) */}
            <div className="swiper-pagination pb-sm-2"></div>
          </div>

          {/* Different height based on screen size */}
          <div className="d-md-none" style={{ height: "380px" }}></div>
          <div
            className="d-none d-md-block d-lg-none"
            style={{ height: "420px" }}
          ></div>
          <div
            className="d-none d-lg-block d-xl-none"
            style={{ height: "500px" }}
          ></div>
          <div
            className="d-none d-xl-block d-xxl-none"
            style={{ height: "560px" }}
          ></div>
          <div className="d-none d-xxl-block" style={{ height: "624px" }}></div>
        </section>
      </main>
    </div>
  );
};

export default Banner;
