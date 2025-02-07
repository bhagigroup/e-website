import React from 'react';

const FeaturedCategories: React.FC = () => {
  return (
    <section className="container pt-4 pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
      <div className="row">

        {/* Category 1 */}
        <div className="col-12 col-sm-6 col-lg-4 mb-4">
          <div className="position-relative d-flex justify-content-between align-items-center h-100 bg-primary-subtle rounded-5 overflow-hidden ps-2 ps-xl-3">
            <div className="d-flex flex-column pt-4 px-3 pb-3">
              <p className="fs-xs pb-2 mb-1">124 products</p>
              <h2 className="h5 mb-2 mb-xxl-3">Only fresh fish to your table</h2>
              <div className="nav">
                <a className="nav-link animate-underline stretched-link text-body-emphasis text-nowrap px-0" href="shop-catalog-grocery.html">
                  <span className="animate-target">Shop now</span>
                  <i className="ci-chevron-right fs-base ms-1"></i>
                </a>
              </div>
            </div>
            <div className="ratio w-100 align-self-end rtl-flip" style={{ maxWidth: '216px', '--cz-aspect-ratio': 'calc(240 / 216 * 100%)' }as React.CSSProperties}>
              <img src="assets/img/home/grocery/featured/01.png" alt="Image" />
            </div>
          </div>
        </div>

        {/* Category 2 */}
        <div className="col-12 col-sm-6 col-lg-4 mb-4">
          <div className="position-relative d-flex justify-content-between align-items-center h-100 bg-success-subtle rounded-5 overflow-hidden ps-2 ps-xl-3">
            <div className="d-flex flex-column pt-4 px-3 pb-3">
              <p className="fs-xs pb-2 mb-1">97 products</p>
              <h2 className="h5 mb-2 mb-xxl-3">Products for Easter table</h2>
              <div className="nav">
                <a className="nav-link animate-underline stretched-link text-body-emphasis text-nowrap px-0" href="shop-catalog-grocery.html">
                  <span className="animate-target">Shop now</span>
                  <i className="ci-chevron-right fs-base ms-1"></i>
                </a>
              </div>
            </div>
            <div className="ratio w-100 align-self-end rtl-flip" style={{ maxWidth: '216px', '--cz-aspect-ratio': 'calc(240 / 216 * 100%)' }as React.CSSProperties}>
              <img src="assets/img/home/grocery/featured/02.png" alt="Image" />
            </div>
          </div>
        </div>

        {/* Category 3 */}
        <div className="col-12 col-sm-6 col-lg-4 mb-4">
          <div className="position-relative d-flex justify-content-between align-items-center h-100 bg-info-subtle rounded-5 overflow-hidden ps-2 ps-xl-3">
            <div className="d-flex flex-column pt-4 px-3 pb-3">
              <p className="fs-xs pb-2 mb-1">28 products</p>
              <h2 className="h5 mb-2 mb-xxl-3">Berries from the garden</h2>
              <div className="nav">
                <a className="nav-link animate-underline stretched-link text-body-emphasis text-nowrap px-0" href="shop-catalog-grocery.html">
                  <span className="animate-target">Shop now</span>
                  <i className="ci-chevron-right fs-base ms-1"></i>
                </a>
              </div>
            </div>
            <div className="ratio w-100 align-self-end rtl-flip" style={{ maxWidth: '216px', '--cz-aspect-ratio': 'calc(240 / 216 * 100%)' }as React.CSSProperties}>
              <img src="assets/img/home/grocery/featured/03.png" alt="Image" />
            </div>
          </div>
        </div>

      </div>

      {/* Slider pagination (Bullets) */}
      <div className="swiper-pagination position-static mt-3 mt-sm-4"></div>
    </section>
  );
};

export default FeaturedCategories;
