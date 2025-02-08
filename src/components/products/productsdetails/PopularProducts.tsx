import React from "react";

const PopularProducts: React.FC = () => {
  return (
    <section  >
      <div  >
        

        {/* Popular Products */}
        <div  >
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4 mb-3 mb-lg-4">
            <h2 className="h3 mb-0">Popular products</h2>
            <div className="nav ms-3">
              <a
                className="nav-link animate-underline px-0 py-2"
                href="shop-catalog-grocery.html"
              >
                <span className="animate-target">View all</span>
                <i className="ci-chevron-right fs-base ms-1"></i>
              </a>
            </div>
          </div>

          {/* Products Grid */}
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-3 row-cols-xl-4 g-4">
          
          <div className="col">
      <div className="card product-card h-100 bg-transparent
       border-0 shadow-none">
        <div className="position-relative z-2">
          <button
            type="button"
            className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2
             me-1 me-sm-2"
            aria-label="Add to Wishlist"
          >
            <i className="ci-heart animate-target"></i>
          </button>
          <a className="d-block p-2 p-lg-3"
           href="shop-product-grocery.html">
            <div className="ratio" 
            style={{ paddingBottom: "calc(160 / 191 * 100%)" }}>
              <img src="assets/img/shop/grocery/01.png" alt="Product" />
            </div>
          </a>
          <div className="position-absolute w-100 start-0 bottom-0">
            <div className="d-flex justify-content-end px-2 px-lg-3 
            pb-2 pb-lg-3">
              <div className="count-input
               count-input-collapsible collapsed 
               justify-content-between w-100 bg-transparent 
               border-0 rounded-2">
                {/* <button
                  type="button"
                  className="btn btn-icon btn-sm btn-primary"
                  aria-label="Decrement quantity"
                >
                  <i className="ci-minus fs-sm"></i>
                </button> */}
                {/* <input
                  type="number"
                  className="form-control form-control-sm bg-primary text-white w-100"
                  value="0"
                  readOnly
                /> */}
                <button
                  type="button"
                  className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                  aria-label="Increment quantity"
                >
                  <i className="ci-plus fs-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
          <div className="h6 mb-2">$2.15</div>
          <h3 className="fs-sm lh-base mb-0">
            <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Muesli Fitness Energy, gluten free</a>
          </h3>
        </div>
        <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">500g</div>
      </div>
    </div>
    <div className="col">
      <div className="card product-card h-100 bg-transparent
       border-0 shadow-none">
        <div className="position-relative z-2">
          <button
            type="button"
            className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2
             me-1 me-sm-2"
            aria-label="Add to Wishlist"
          >
            <i className="ci-heart animate-target"></i>
          </button>
          <a className="d-block p-2 p-lg-3"
           href="shop-product-grocery.html">
            <div className="ratio" 
            style={{ paddingBottom: "calc(160 / 191 * 100%)" }}>
                        <img src="assets/img/shop/grocery/02.png" alt="Image"/>
             
            </div>
          </a>
          <div className="position-absolute w-100 start-0 bottom-0">
            <div className="d-flex justify-content-end px-2 px-lg-3 
            pb-2 pb-lg-3">
              <div className="count-input
               count-input-collapsible collapsed 
               justify-content-between w-100 bg-transparent 
               border-0 rounded-2">
                 
                <button
                  type="button"
                  className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                  aria-label="Increment quantity"
                >
                  <i className="ci-plus fs-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
          <div className="h6 mb-2">$2.15</div>
          <h3 className="fs-sm lh-base mb-0">
            <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Fresh orange Klementina, Spain</a>
          </h3>
        </div>
        <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">500g</div>
      </div>
    </div>
    <div className="col">
      <div className="card product-card h-100 bg-transparent
       border-0 shadow-none">
        <div className="position-relative z-2">
          <button
            type="button"
            className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2
             me-1 me-sm-2"
            aria-label="Add to Wishlist"
          >
            <i className="ci-heart animate-target"></i>
          </button>
          <a className="d-block p-2 p-lg-3"
           href="shop-product-grocery.html">
            <div className="ratio" 
            style={{ paddingBottom: "calc(160 / 191 * 100%)" }}>
                        <img src="assets/img/shop/grocery/03.png" alt="Image"/>
             
            </div>
          </a>
          <div className="position-absolute w-100 start-0 bottom-0">
            <div className="d-flex justify-content-end px-2 px-lg-3 
            pb-2 pb-lg-3">
              <div className="count-input
               count-input-collapsible collapsed 
               justify-content-between w-100 bg-transparent 
               border-0 rounded-2">
                 
                <button
                  type="button"
                  className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                  aria-label="Increment quantity"
                >
                  <i className="ci-plus fs-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
          <div className="h6 mb-2">$2.15</div>
          <h3 className="fs-sm lh-base mb-0">
            <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Pepsi soda classic, can</a>
          </h3>
        </div>
        <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">500g</div>
      </div>
    </div>
    <div className="col">
      <div className="card product-card h-100 bg-transparent
       border-0 shadow-none">
        <div className="position-relative z-2">
          <button
            type="button"
            className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2
             me-1 me-sm-2"
            aria-label="Add to Wishlist"
          >
            <i className="ci-heart animate-target"></i>
          </button>
          <a className="d-block p-2 p-lg-3"
           href="shop-product-grocery.html">
            <div className="ratio" 
            style={{ paddingBottom: "calc(160 / 191 * 100%)" }}>
                        <img src="assets/img/shop/grocery/04.png" alt="Image"/>
             
            </div>
          </a>
          <div className="position-absolute w-100 start-0 bottom-0">
            <div className="d-flex justify-content-end px-2 px-lg-3 
            pb-2 pb-lg-3">
              <div className="count-input
               count-input-collapsible collapsed 
               justify-content-between w-100 bg-transparent 
               border-0 rounded-2">
                 
                <button
                  type="button"
                  className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                  aria-label="Increment quantity"
                >
                  <i className="ci-plus fs-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
          <div className="h6 mb-2">$2.15</div>
          <h3 className="fs-sm lh-base mb-0">
            <a className="hover-effect-underline fw-normal" 
            href="shop-product-grocery.html">Mozzarella mini cheese Granaloro</a>
          </h3>
        </div>
        <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">500g</div>
      </div>
    </div>
    <div className="col">
      <div className="card product-card h-100 bg-transparent
       border-0 shadow-none">
        <div className="position-relative z-2">
          <button
            type="button"
            className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2
             me-1 me-sm-2"
            aria-label="Add to Wishlist"
          >
            <i className="ci-heart animate-target"></i>
          </button>
          <a className="d-block p-2 p-lg-3"
           href="shop-product-grocery.html">
            <div className="ratio" 
            style={{ paddingBottom: "calc(160 / 191 * 100%)" }}>
                        <img src="assets/img/shop/grocery/05.png" 
                        alt="Image"/>
             
            </div>
          </a>
          <div className="position-absolute w-100 start-0 bottom-0">
            <div className="d-flex justify-content-end px-2 px-lg-3 
            pb-2 pb-lg-3">
              <div className="count-input
               count-input-collapsible collapsed 
               justify-content-between w-100 bg-transparent 
               border-0 rounded-2">
                 
                <button
                  type="button"
                  className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                  aria-label="Increment quantity"
                >
                  <i className="ci-plus fs-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
          <div className="h6 mb-2">$2.15</div>
          <h3 className="fs-sm lh-base mb-0">
            <a className="hover-effect-underline fw-normal" 
            href="shop-product-grocery.html">
                Coconut, Indonesia</a>
          </h3>
        </div>
        <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">500g</div>
      </div>
    </div>
    <div className="col">
      <div className="card product-card h-100 bg-transparent
       border-0 shadow-none">
        <div className="position-relative z-2">
          <button
            type="button"
            className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2
             me-1 me-sm-2"
            aria-label="Add to Wishlist"
          >
            <i className="ci-heart animate-target"></i>
          </button>
          <a className="d-block p-2 p-lg-3"
           href="shop-product-grocery.html">
            <div className="ratio" 
            style={{ paddingBottom: "calc(160 / 191 * 100%)" }}>
                                               <img
    src="assets/img/shop/grocery/06.png" alt="Image"/>

             
            </div>
          </a>
          <div className="position-absolute w-100 start-0 bottom-0">
            <div className="d-flex justify-content-end px-2 px-lg-3 
            pb-2 pb-lg-3">
              <div className="count-input
               count-input-collapsible collapsed 
               justify-content-between w-100 bg-transparent 
               border-0 rounded-2">
                 
                <button
                  type="button"
                  className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                  aria-label="Increment quantity"
                >
                  <i className="ci-plus fs-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
          <div className="h6 mb-2">$2.15</div>
          <h3 className="fs-sm lh-base mb-0">
            <a className="hover-effect-underline fw-normal" 
            href="shop-product-grocery.html">
                Pesto sauce Barilla with parmesan and basil</a>
          </h3>
        </div>
        <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">500g</div>
      </div>
    </div>

    <div className="col">
      <div className="card product-card h-100 bg-transparent
       border-0 shadow-none">
        <div className="position-relative z-2">
          <button
            type="button"
            className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2
             me-1 me-sm-2"
            aria-label="Add to Wishlist"
          >
            <i className="ci-heart animate-target"></i>
          </button>
          <a className="d-block p-2 p-lg-3"
           href="shop-product-grocery.html">
            <div className="ratio" 
            style={{ paddingBottom: "calc(160 / 191 * 100%)" }}>
   <img src="assets/img/shop/grocery/07.png" alt="Image"/>
       
            </div>
          </a>
          <div className="position-absolute w-100 start-0 bottom-0">
            <div className="d-flex justify-content-end px-2 px-lg-3 
            pb-2 pb-lg-3">
              <div className="count-input
               count-input-collapsible collapsed 
               justify-content-between w-100 bg-transparent 
               border-0 rounded-2">
                 
                <button
                  type="button"
                  className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                  aria-label="Increment quantity"
                >
                  <i className="ci-plus fs-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
          <div className="h6 mb-2">$2.15</div>
          <h3 className="fs-sm lh-base mb-0">
            <a className="hover-effect-underline fw-normal" 
            href="shop-product-grocery.html">
                Fresh mango, Spain</a>
          </h3>
        </div>
        <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">500g</div>
      </div>
    </div>
    <div className="col">
      <div className="card product-card h-100 bg-transparent
       border-0 shadow-none">
        <div className="position-relative z-2">
          <button
            type="button"
            className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2
             me-1 me-sm-2"
            aria-label="Add to Wishlist"
          >
            <i className="ci-heart animate-target"></i>
          </button>
          <a className="d-block p-2 p-lg-3"
           href="shop-product-grocery.html">
            <div className="ratio" 
            style={{ paddingBottom: "calc(160 / 191 * 100%)" }}>
 <img src="assets/img/shop/grocery/08.png" alt="Image"/>
 
            </div>
          </a>
          <div className="position-absolute w-100 start-0 bottom-0">
            <div className="d-flex justify-content-end px-2 px-lg-3 
            pb-2 pb-lg-3">
              <div className="count-input
               count-input-collapsible collapsed 
               justify-content-between w-100 bg-transparent 
               border-0 rounded-2">
                 
                <button
                  type="button"
                  className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                  aria-label="Increment quantity"
                >
                  <i className="ci-plus fs-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
          <div className="h6 mb-2">$2.15</div>
          <h3 className="fs-sm lh-base mb-0">
            <a className="hover-effect-underline fw-normal" 
            href="shop-product-grocery.html">
                Fresh green asparagus, bunch</a>
          </h3>
        </div>
        <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">500g</div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
