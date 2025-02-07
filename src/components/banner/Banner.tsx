import React,{useEffect} from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination,EffectFade } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';  // if you're using pagination
import 'swiper/css/effect-fade'; // if you're using the fade effect

const Banner: React.FC = () => {

    useEffect(() => {
        // Initialize Swiper
        new Swiper('.swiper', {
          modules: [Pagination, Autoplay, EffectFade],
          effect: 'fade',
          loop: true,
          speed: 400,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        });
      }, []);
    
  return (
    <div>
      <section className="border-top">
        <div className="container py-lg-1">
          <div className="overflow-auto" data-simplebar>
            <div className="nav flex-nowrap justify-content-between gap-4 py-2">
              <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i className="ci-percent text-primary fs-xl"></i>
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">Weekly sale</span>
              </a>
              <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{ width: '40px', height: '40px' }}
                >
                  <img src="assets/img/mega-menu/grocery/th01.png" width="30" alt="Image" />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">Vegetables</span>
              </a>
              <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{ width: '40px', height: '40px' }}
                >
                  <img src="assets/img/mega-menu/grocery/th02.png" width="30" alt="Image" />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">Easter is coming</span>
              </a>
              <a className="nav-link align-items-center animate-underline gap-2 m-0" href="shop-catalog-grocery.html">
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{ width: '40px', height: '40px' }}
                >
                  <img src="assets/img/mega-menu/grocery/th03.png" width="30" alt="Image" />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">Poultry meat</span>
              </a>
              <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{ width: '40px', height: '40px' }}
                >
                  <img src="assets/img/mega-menu/grocery/th04.png" width="30" alt="Image" />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">Fresh fruits</span>
              </a>
              <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{ width: '40px', height: '40px' }}
                >
                  <img src="assets/img/mega-menu/grocery/th05.png" width="30" alt="Image" />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">St. Patrick's day</span>
              </a>
              <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{ width: '40px', height: '40px' }}
                >
                  <img src="assets/img/mega-menu/grocery/th06.png" width="30" alt="Image" />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">Exotic fruits</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      <main className="content-wrapper">
      <section className="position-relative">
        <div className="swiper position-absolute top-0 start-0 w-100 h-100">
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide" style={{ backgroundColor: '#6dafca' }}>
              <div className="position-absolute d-flex align-items-center w-100 h-100 z-2">
                <div className="container mt-lg-n4">
                  <div className="row">
                    <div className="col-9 col-sm-8 col-md-7 col-lg-6">
                      <p className="fs-sm text-white mb-lg-4">
                        🔥 Free shipping - order over <strong>50$</strong>
                      </p>
                      <h2 className="display-4 pb-2 pb-md-3 pb-lg-4">Healthy Food Available to Everyone</h2>
                      <a className="btn btn-lg btn-outline-light rounded-pill" href="shop-catalog-grocery.html">
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="assets/img/home/grocery/hero-slider/01.jpg"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rtl-flip"
                alt="Healthy Food"
              />
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide" style={{ backgroundColor: '#5a7978' }}>
              <div className="position-absolute d-flex align-items-center w-100 h-100 z-2">
                <div className="container mt-lg-n4">
                  <div className="row">
                    <div className="col-12 col-sm-10 col-md-7 col-lg-6">
                      <p className="fs-sm text-white mb-lg-4">🥚 Organic products to your table</p>
                      <h2 className="display-4 pb-2 pb-md-3 pb-lg-4">Organic eggs from home-grown chicken</h2>
                      <a className="btn btn-lg btn-outline-light rounded-pill" href="shop-catalog-grocery.html">
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="assets/img/home/grocery/hero-slider/02.jpg"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rtl-flip"
                alt="Organic Eggs"
              />
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide" style={{ backgroundColor: '#f99c03' }}>
              <div className="position-absolute d-flex align-items-center w-100 h-100 z-2">
                <div className="container mt-lg-n4">
                  <div className="row">
                    <div className="col-9 col-sm-8 col-md-7 col-lg-6">
                      <p className="fs-sm text-white mb-lg-4">🥝 Only natural ingredients</p>
                      <h2 className="display-4 pb-2 pb-md-3 pb-lg-4">Enjoy refreshing summer drink</h2>
                      <a className="btn btn-lg btn-outline-light rounded-pill" href="shop-catalog-grocery.html">
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="assets/img/home/grocery/hero-slider/03.jpg"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rtl-flip"
                alt="Summer Drink"
              />
            </div>
          </div>

          {/* Slider pagination (Bullets) */}
          <div className="swiper-pagination pb-sm-2"></div>
        </div>
        
        {/* Different height based on screen size */}
        <div className="d-md-none" style={{ height: '380px' }}></div>
        <div className="d-none d-md-block d-lg-none" style={{ height: '420px' }}></div>
        <div className="d-none d-lg-block d-xl-none" style={{ height: '500px' }}></div>
        <div className="d-none d-xl-block d-xxl-none" style={{ height: '560px' }}></div>
        <div className="d-none d-xxl-block" style={{ height: '624px' }}></div>
      </section>
      

      
    </main>



    </div>
  );
};

export default Banner;
