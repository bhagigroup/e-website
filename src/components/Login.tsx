import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
//import useScript from 'react';
const Login: React.FC = () => {
  //useScript('/assets/vendor/swiper/swiper-bundle.min.js');
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'assets/vendor/swiper/swiper-bundle.min.js';
    script.src = 'assets/vendor/simplebar/dist/simplebar.min.js';
    script.src = 'assets/vendor/choices.js/public/assets/scripts/choices.min.js';
    script.async = true;

    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />

      <title>Cartzilla | Grocery Store</title>
      <meta name="description" content="Cartzilla - Multipurpose Bootstrap E-Commerce HTML Template" />
      <meta name="keywords" content="online shop, e-commerce, online store, market, multipurpose, product landing, cart, checkout, ui kit, light and dark mode, bootstrap, html5, css3, javascript, gallery, slider, mobile, pwa" />
      <meta name="author" content="Createx Studio" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      <link rel="icon" type="image/png" href="assets/app-icons/icon-32x32.png" sizes="32x32" />
    <link rel="apple-touch-icon" href="assets/app-icons/icon-180x180.png" />
    <script src="assets/js/theme-switcher.js"></script>
    <link rel="preload" href="assets/fonts/inter-variable-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" href="assets/icons/cartzilla-icons.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="stylesheet" href="assets/icons/cartzilla-icons.min.css" />
    <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="assets/vendor/simplebar/dist/simplebar.min.css" />
    <link rel="stylesheet" href="assets/vendor/choices.js/public/assets/styles/choices.min.css" />
    <link rel="preload" href="assets/css/theme.min.css" as="style" />
    <link rel="preload" href="assets/css/theme.rtl.min.css" as="style" />
    <link rel="stylesheet" href="assets/css/theme.min.css" id="theme-styles"></link>
    </Helmet>
    <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2" id="shoppingCart" tabIndex={-1} aria-labelledby="shoppingCartLabel" style={{ width: '500px' }}>
      <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
        <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
          <h4 className="offcanvas-title" id="shoppingCartLabel">Shopping cart</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-0" role="alert">
          Congratulations 🎉 You have added more than <span className="fw-semibold">$50</span> to your cart. <span className="fw-semibold">Delivery is free</span> for you!
        </div>
      </div>
      <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
        <div className="d-flex align-items-center">
          <a className="position-relative flex-shrink-0" href="shop-product-grocery.html">
            <span className="badge text-bg-danger position-absolute top-0 start-0 z-2 mt-0 ms-0">-$2.79</span>
            <img src="assets/img/shop/grocery/thumbs/01.png" width="110" alt="Thumbnail" />
          </a>
          <div className="w-100 ps-3">
            <h5 className="fs-sm fw-medium lh-base mb-2">
              <a className="hover-effect-underline" href="shop-product-grocery.html">Fresh orange Klementina, Spain</a>
            </h5>
            <div className="h6 pb-1 mb-2">$3.12</div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="count-input rounded-pill">
                <button type="button" className="btn btn-icon btn-sm" data-decrement aria-label="Decrement quantity">
                  <i className="ci-minus"></i>
                </button>
                <input type="number" className="form-control form-control-sm" value="3" readOnly />
                <button type="button" className="btn btn-icon btn-sm" data-increment aria-label="Increment quantity">
                  <i className="ci-plus"></i>
                </button>
              </div>
              <button type="button" className="btn-close fs-sm" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" data-bs-title="Remove" aria-label="Remove from cart"></button>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a className="flex-shrink-0" href="shop-product-grocery.html">
            <img src="assets/img/shop/grocery/thumbs/02.png" width="110" alt="Thumbnail" />
          </a>
          <div className="w-100 ps-3">
            <h5 className="fs-sm fw-medium lh-base mb-2">
              <a className="hover-effect-underline" href="shop-product-grocery.html">Pesto sauce Barilla with basil, Italy</a>
            </h5>
            <div className="h6 pb-1 mb-2">$3.95</div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="count-input rounded-pill">
                <button type="button" className="btn btn-icon btn-sm" data-decrement aria-label="Decrement quantity">
                  <i className="ci-minus"></i>
                </button>
                <input type="number" className="form-control form-control-sm" value="1" readOnly />
                <button type="button" className="btn btn-icon btn-sm" data-increment aria-label="Increment quantity">
                  <i className="ci-plus"></i>
                </button>
              </div>
              <button type="button" className="btn-close fs-sm" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" data-bs-title="Remove" aria-label="Remove from cart"></button>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a className="flex-shrink-0" href="shop-product-grocery.html">
            <img src="assets/img/shop/grocery/thumbs/03.png" width="110" alt="Thumbnail" />
          </a>
          <div className="w-100 ps-3">
            <h5 className="fs-sm fw-medium lh-base mb-2">
              <a className="hover-effect-underline" href="shop-product-grocery.html">Steak salmon fillet with rosmary</a>
            </h5>
            <div className="h6 pb-1 mb-2">$27.00</div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="count-input rounded-pill">
                <button type="button" className="btn btn-icon btn-sm" data-decrement aria-label="Decrement quantity">
                  <i className="ci-minus"></i>
                </button>
                <input type="number" className="form-control form-control-sm" value="2" readOnly />
                <button type="button" className="btn btn-icon btn-sm" data-increment aria-label="Increment quantity">
                  <i className="ci-plus"></i>
                </button>
              </div>
              <button type="button" className="btn-close fs-sm" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" data-bs-title="Remove" aria-label="Remove from cart"></button>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a className="flex-shrink-0" href="shop-product-grocery.html">
            <img src="assets/img/shop/grocery/thumbs/04.png" width="110" alt="Thumbnail" />
          </a>
          <div className="w-100 ps-3">
            <h5 className="fs-sm fw-medium lh-base mb-2">
              <a className="hover-effect-underline" href="shop-product-grocery.html">Sprite soda lemon lime, can</a>
            </h5>
            <div className="h6 pb-1 mb-2">$0.80</div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="count-input rounded-pill">
                <button type="button" className="btn btn-icon btn-sm" data-decrement aria-label="Decrement quantity">
                  <i className="ci-minus"></i>
                </button>
                <input type="number" className="form-control form-control-sm" value="2" readOnly />
                <button type="button" className="btn btn-icon btn-sm" data-increment aria-label="Increment quantity">
                  <i className="ci-plus"></i>
                </button>
              </div>
              <button type="button" className="btn-close fs-sm" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" data-bs-title="Remove" aria-label="Remove from cart"></button>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-header flex-column align-items-start">
        <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
          <span className="text-light-emphasis">Subtotal:</span>
          <span className="h6 mb-0">$68.91</span>
        </div>
        <div className="d-flex w-100 gap-3">
          <a className="btn btn-lg btn-secondary w-100 rounded-pill" href="checkout-v2-cart.html">View cart</a>
          <a className="btn btn-lg btn-primary w-100 rounded-pill" href="checkout-v2-delivery.html">Checkout</a>
        </div>
      </div>
    </div>
    <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2" id="deliveryOptions" tabIndex={-1} aria-labelledby="deliveryOptionsLabel" style={{ width: '500px' }}>

      <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
        <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
          <h4 className="offcanvas-title" id="deliveryOptionsLabel">Delivery options</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <ul className="nav nav-pills nav-justified w-100" role="tablist">
          <li className="nav-item" role="presentation">
            <button type="button" className="nav-link active" id="delivery-tab" data-bs-toggle="tab" data-bs-target="#delivery-tab-pane" role="tab" aria-controls="delivery-tab-pane" aria-selected="true">
              <i className="ci-shopping-bag fs-base ms-n1 me-2"></i>
              Delivery
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button type="button" className="nav-link" id="pickup-tab" data-bs-toggle="tab" data-bs-target="#pickup-tab-pane" role="tab" aria-controls="pickup-tab-pane" aria-selected="false">
              <i className="ci-box fs-base ms-n1 me-2"></i>
              Pickup
            </button>
          </li>
        </ul>
      </div>

      <div className="offcanvas-body tab-content py-2 py-sm-3">
        <div className="tab-pane fade show active" id="delivery-tab-pane" role="tabpanel" aria-labelledby="delivery-tab">

          <div className="collapse delivery-address show" id="deliveryAddressOptions">
            <div className="mt-n3">
              <div className="form-check border-bottom py-4 m-0">
                <input type="radio" className="form-check-input" id="address-1" name="delivery-address" checked />
                <label htmlFor="address-1" className="form-check-label text-dark-emphasis fw-semibold">567 Cherry Lane Apt B12 Sacramento, 95829</label>
              </div>
              <div className="form-check border-bottom py-4 m-0">
                <input type="radio" className="form-check-input" id="address-2" name="delivery-address" />
                <div className="d-flex w-100">
                  <label htmlFor="address-2" className="form-check-label text-dark-emphasis me-3">1901 Thornridge Cir. Shiloh, Hawaii, 81063</label>
                  <button type="button" className="btn-close fs-sm ms-auto" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" data-bs-title="Remove" aria-label="Remove"></button>
                </div>
              </div>
              <div className="form-check border-bottom py-4 m-0">
                <input type="radio" className="form-check-input" id="address-3" name="delivery-address" />
                <div className="d-flex w-100">
                  <label htmlFor="address-3" className="form-check-label text-dark-emphasis me-3">3517 W. Gray St. Utica, Pennsylvania, 57867</label>
                  <button type="button" className="btn-close fs-sm ms-auto" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" data-bs-title="Remove" aria-label="Remove"></button>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse delivery-address" id="deliveryAddressAdd">
            <div className="nav mb-4">
              <a className="nav-link animate-underline p-0" href=".delivery-address" data-bs-toggle="collapse" aria-expanded="true" aria-controls="deliveryAddressOptions deliveryAddressAdd">
                <i className="ci-chevron-left fs-lg ms-n1 me-1"></i>
                <span className="animate-target">Back to my addresses</span>
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
              <h5 className="h6 mb-0 me-3">Add an address to start ordering</h5>
              <a className="btn btn-sm btn-outline-primary rounded-pill" href="#!">
                <i className="ci-map-pin fs-base ms-n1 me-1"></i>
                Find on map
              </a>
            </div>
            <div className="mb-3 mb-lg-4">
              <label className="form-label">State *</label>
              <select className="form-select form-select-lg rounded-pill" data-select='{
                "classNames": {
                  "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
                }
              }' aria-label="Large pill select">
                <option value="">Select state</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Montana">Montana</option>
                <option value="Nevada">Nevada</option>
                <option value="New Mexico">New Mexico</option>
                <option value="Texas">Texas</option>
              </select>
            </div>
            <div className="mb-3 mb-lg-4">
              <label htmlFor="my-postcode" className="form-label">Postcode *</label>
              <input type="text" className="form-control form-control-lg rounded-pill" id="my-postcode" />
            </div>
            <div className="mb-3 mb-lg-4">
              <label className="form-label">City *</label>
              <select className="form-select form-select-lg rounded-pill" data-select='{
                "classNames": {
                  "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
                }
              }' aria-label="Large pill select">
                <option value="">Select city</option>
                <option value="Austin">Austin</option>
                <option value="Helena">Helena</option>
                <option value="Sacramento">Sacramento</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Las Vegas">Las Vegas</option>
                <option value="Phoenix">Phoenix</option>
              </select>
            </div>
            <label htmlFor="my-address" className="form-label">Street address *</label>
            <input type="text" className="form-control form-control-lg rounded-pill" id="my-address" />
          </div>

          <div className="nav">
            <a className="nav-link hiding-collapse-toggle animate-underline collapsed px-0 mt-4" href=".delivery-address" data-bs-toggle="collapse" aria-expanded="false" aria-controls="deliveryAddressOptions deliveryAddressAdd">
              <span className="animate-target">Add delivery address</span>
              <i className="ci-plus fs-base ms-1"></i>
            </a>
          </div>
        </div>

        <div className="tab-pane fade" id="pickup-tab-pane" role="tabpanel" aria-labelledby="pickup-tab">

          <div className="collapse pickup-options show" id="pickupStoreOptions">
            <div className="mt-n3">
              <div className="form-check border-bottom py-4 m-0">
                <input type="radio" className="form-check-input" id="store-1" name="pickup-store" checked />
                <div>
                  <div className="d-flex w-100 pb-2 mb-1">
                    <label htmlFor="store-1" className="form-check-label text-dark-emphasis fw-semibold me-3">Sacramento Supercenter</label>
                    <button type="button" className="btn-close fs-sm ms-auto" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" data-bs-title="Remove" aria-label="Remove"></button>
                  </div>
                  <div className="fs-xs mb-2">8270 Delta Shores Cir S, Sacramento, CA 95832</div>
                  <div className="fs-xs">Open: <span className="text-dark-emphasis fw-medium">07:00 - 22:00</span></div>
                </div>
              </div>
              <div className="form-check border-bottom py-4 m-0">
                <input type="radio" className="form-check-input" id="store-2" name="pickup-store" />
                <div>
                  <div className="d-flex w-100 pb-2 mb-1">
                    <label htmlFor="store-2" className="form-check-label text-dark-emphasis fw-semibold me-3">West Sacramento Supercenter</label>
                    <button type="button" className="btn-close fs-sm ms-auto" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" data-bs-title="Remove" aria-label="Remove"></button>
                  </div>
                  <div className="fs-xs mb-2">755 Riverpoint Ct, West Sacramento, CA 95605</div>
                  <div className="fs-xs">Open: <span className="text-dark-emphasis fw-medium">07:00 - 21:00</span></div>
                </div>
              </div>
              <div className="form-check border-bottom py-4 m-0">
                <input type="radio" className="form-check-input" id="store-3" name="pickup-store" />
                <div>
                  <div className="d-flex w-100 pb-2 mb-1">
                    <label htmlFor="store-3" className="form-check-label text-dark-emphasis fw-semibold me-3">Rancho Cordova Supercenter</label>
                    <button type="button" className="btn-close fs-sm ms-auto" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" data-bs-title="Remove" aria-label="Remove"></button>
                  </div>
                  <div className="fs-xs mb-2">10655 Folsom Blvd, Rancho Cordova, CA 95670</div>
                  <div className="fs-xs">Open: <span className="text-dark-emphasis fw-medium">08:00 - 23:00</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse pickup-options" id="pickupStoreAdd">
            <div className="nav mb-4">
              <a className="nav-link animate-underline p-0" href=".pickup-options" data-bs-toggle="collapse" aria-expanded="true" aria-controls="pickupStoreOptions pickupStoreAdd">
                <i className="ci-chevron-left fs-lg ms-n1 me-1"></i>
                <span className="animate-target">Back to my stores</span>
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
              <h5 className="h6 mb-0 me-3">Select a suitable store</h5>
              <a className="btn btn-sm btn-outline-primary rounded-pill" href="#!">
                <i className="ci-map-pin fs-base ms-n1 me-1"></i>
                Find on map
              </a>
            </div>
            <div className="mb-3 mb-lg-4">
              <label className="form-label">State *</label>
              <select className="form-select form-select-lg rounded-pill" data-select='{
                "classNames": {
                  "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
                }
              }' aria-label="Large pill select">
                <option value="">Select state</option>
                <option value="Arizona">Arizona</option>
                <option value="California" selected>California</option>
                <option value="Montana">Montana</option>
                <option value="Nevada">Nevada</option>
                <option value="New Mexico">New Mexico</option>
                <option value="Texas">Texas</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="form-label">City *</label>
              <select className="form-select form-select-lg rounded-pill" data-select='{
                "classNames": {
                  "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
                }
              }' aria-label="Large pill select">
                <option value="">Select city</option>
                <option value="Austin">Austin</option>
                <option value="Helena">Helena</option>
                <option value="Sacramento" selected>Sacramento</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Las Vegas">Las Vegas</option>
                <option value="Phoenix">Phoenix</option>
              </select>
            </div>
            <div className="fs-xs fw-medium text-uppercase text-body-secondary">Found stores:</div>
            <div className="form-check border-bottom py-4 m-0">
              <input type="radio" className="form-check-input" id="store-4" name="found-store" />
              <div>
                <label htmlFor="store-4" className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1">Sacramento Supercenter</label>
                <div className="fs-xs mb-2">8270 Delta Shores Cir S, Sacramento, CA 95832</div>
                <div className="fs-xs">Open: <span className="text-dark-emphasis fw-medium">07:00 - 22:00</span></div>
              </div>
            </div>
            <div className="form-check border-bottom py-4 m-0">
              <input type="radio" className="form-check-input" id="store-5" name="found-store" />
              <div>
                <label htmlFor="store-5" className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1">West Sacramento Supercenter</label>
                <div className="fs-xs mb-2">755 Riverpoint Ct, West Sacramento, CA 95605</div>
                <div className="fs-xs">Open: <span className="text-dark-emphasis fw-medium">07:00 - 21:00</span></div>
              </div>
            </div>
            <div className="form-check border-bottom py-4 m-0">
              <input type="radio" className="form-check-input" id="store-6" name="found-store" />
              <div>
                <label htmlFor="store-6" className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1">Rancho Cordova Supercenter</label>
                <div className="fs-xs mb-2">10655 Folsom Blvd, Rancho Cordova, CA 95670</div>
                <div className="fs-xs">Open: <span className="text-dark-emphasis fw-medium">08:00 - 23:00</span></div>
              </div>
            </div>
          </div>
          <div className="nav">
            <a className="nav-link hiding-collapse-toggle animate-underline collapsed px-0 mt-4" href=".pickup-options" data-bs-toggle="collapse" aria-expanded="false" aria-controls="pickupStoreOptions pickupStoreAdd">
              <span className="animate-target">Add store address</span>
              <i className="ci-plus fs-base ms-1"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="offcanvas-header">
        <button type="button" className="btn btn-lg btn-primary w-100 rounded-pill">Confirm address</button>
      </div>
    </div>
    <nav className="offcanvas offcanvas-start" id="navbarNav" tabIndex={-1} aria-labelledby="navbarNavLabel">
      <div className="offcanvas-header py-3">
        <h5 className="offcanvas-title" id="navbarNavLabel">Browse Cartzilla</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body pt-0 pb-3">

        <div className="accordion" id="navigation">

        
          <div className="accordion-item border-0 d-lg-none">
            <div className="accordion-header" id="headingCategories">
              <button type="button" className="accordion-button animate-underline fw-medium collapsed py-2" data-bs-toggle="collapse" data-bs-target="#categoriesMenu" aria-expanded="false" aria-controls="categoriesMenu">
                <i className="ci-grid fs-lg me-2"></i>
                <span className="d-block animate-target py-1">Categories</span>
              </button>
            </div>
            <div className="accordion-collapse collapse" id="categoriesMenu" aria-labelledby="headingCategories" data-bs-parent="#navigation">
              <div className="accordion-body pb-3">
                <div className="dropdown-menu show position-static d-flex flex-column gap-4 shadow-none p-4">
                  <div>
                    <div className="h6">Bakery &amp; bread</div>
                    <ul className="nav flex-column gap-2 mt-n2">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Bread</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Pastries</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Bakery cookies</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Cupcakes</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Buns &amp; rolls</a>
                      </li>
                    </ul>
                    <div className="h6 pt-4">Meat products</div>
                    <ul className="nav flex-column gap-2 mt-n2">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Fresh meat</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Processed meat</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Seafood</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Poultry products</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Prepared meat</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="h6">Vegetables</div>
                    <ul className="nav flex-column gap-2 mt-n2">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Leafy greens</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Root vegetables</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Allium vegetables</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Peppers and tomatoes</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Cruciferous</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Seasonal squashes</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Beans, peas &amp; lentils</a>
                      </li>
                    </ul>
                    <div className="h6 pt-4">Sauces and ketchup</div>
                    <ul className="nav flex-column gap-2 mt-n2">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Tomato-based sauces</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Salad dressing</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Hot sauces</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="h6">Fresh fruits</div>
                    <ul className="nav flex-column gap-2 mt-n2">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Citrus fruits</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Berries</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Tropical fruits</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Stone fruits</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Exotic fruits</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Melons</a>
                      </li>
                    </ul>
                    <div className="h6 pt-4">Italian dinner</div>
                    <ul className="nav flex-column gap-2 mt-n2">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Pasta &amp; sauces</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Italian cheese</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Italian meats</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Desserts &amp; beverages</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="h6">Beverages</div>
                    <ul className="nav flex-column gap-2 mt-n2">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Soft drinks</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Juices</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Sports &amp; energy drinks</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Tea and coffee</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Alcoholic beverages</a>
                      </li>
                    </ul>
                    <div className="h6 pt-4">Dairy &amp; eggs</div>
                    <ul className="nav flex-column gap-2 mt-n2">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Chees</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Milk &amp; yogurt</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Sour cream</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Eggs</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Butter &amp; margarine</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="accordion-item border-0">
            <div className="accordion-header" id="headingHome">
              <button type="button" className="accordion-button animate-underline fw-medium collapsed py-2" data-bs-toggle="collapse" data-bs-target="#home" aria-expanded="false" aria-controls="home">
                <span className="d-block animate-target py-1">Home</span>
              </button>
            </div>
            <div className="accordion-collapse collapse" id="home" aria-labelledby="headingHome" data-bs-parent="#navigation">
              <div className="accordion-body pb-3">
                <ul className="dropdown-menu show position-static shadow-none">
                  <li className="hover-effect-opacity px-2 mx-n2">
                    <a className="dropdown-item d-block mb-0" href="home-electronics.html">
                      <span className="fw-medium">Electronics Store</span>
                      <span className="d-block fs-xs text-body-secondary">Megamenu + Hero slider</span>
                    </a>
                  </li>
                  <li className="hover-effect-opacity px-2 mx-n2">
                    <a className="dropdown-item d-block mb-0" href="home-fashion-v1.html">
                      <span className="fw-medium">Fashion Store v.1</span>
                      <span className="d-block fs-xs text-body-secondary">Hero promo slider</span>
                    </a>
                  </li>
                  <li className="hover-effect-opacity px-2 mx-n2">
                    <a className="dropdown-item d-block mb-0" href="home-fashion-v2.html">
                      <span className="fw-medium">Fashion Store v.2</span>
                      <span className="d-block fs-xs text-body-secondary">Hero banner with hotspots</span>
                    </a>
                  </li>
                  <li className="hover-effect-opacity px-2 mx-n2">
                    <a className="dropdown-item d-block mb-0" href="home-furniture.html">
                      <span className="fw-medium">Furniture Store</span>
                      <span className="d-block fs-xs text-body-secondary">Fancy product carousel</span>
                    </a>
                  </li>
                  <li className="hover-effect-opacity px-2 mx-n2">
                    <a className="dropdown-item d-block mb-0" href="home-grocery.html">
                      <span className="fw-medium">Grocery Store</span>
                      <span className="d-block fs-xs text-body-secondary">Hero slider + Category cards</span>
                    </a>
                  </li>
                  <li className="hover-effect-opacity px-2 mx-n2">
                    <a className="dropdown-item d-block mb-0" href="home-marketplace.html">
                      <span className="fw-medium">Marketplace</span>
                      <span className="d-block fs-xs text-body-secondary">Multi-vendor, digital goods</span>
                    </a>
                  </li>
                  <li className="hover-effect-opacity px-2 mx-n2">
                    <a className="dropdown-item d-block mb-0" href="home-single-store.html">
                      <span className="fw-medium">Single Product Store</span>
                      <span className="d-block fs-xs text-body-secondary">Single product / mono brand</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0">
            <div className="accordion-header" id="headingShop">
              <button type="button" className="accordion-button animate-underline fw-medium collapsed py-2" data-bs-toggle="collapse" data-bs-target="#shop" aria-expanded="false" aria-controls="shop">
                <span className="d-block animate-target py-1">Shop</span>
              </button>
            </div>
            <div className="accordion-collapse collapse" id="shop" aria-labelledby="headingShop" data-bs-parent="#navigation">
              <div className="accordion-body pb-3">
                <div className="dropdown-menu show position-static shadow-none p-4">
                  <div className="d-flex flex-column gap-4">
                    <div style={{ width: '190px' }} >
                      <div className="h6 mb-2">Electronics Store</div>
                      <ul className="nav flex-column gap-2 mt-0">
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-categories-electronics.html">Categories Page</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Catalog with Side Filters</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-general-electronics.html">Product General Info</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-details-electronics.html">Product Details</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-reviews-electronics.html">Product Reviews</a>
                        </li>
                      </ul>
                      <div className="h6 pt-4 mb-2">Fashion Store</div>
                      <ul className="nav flex-column gap-2 mt-0">
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-fashion.html">Catalog with Side Filters</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-fashion.html">Product Page</a>
                        </li>
                      </ul>
                      <div className="h6 pt-4 mb-2">Furniture Store</div>
                      <ul className="nav flex-column gap-2 mt-0">
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-furniture.html">Catalog with Top Filters</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-furniture.html">Product Page</a>
                        </li>
                      </ul>
                    </div>
                    <div style={{ width: '190px' }}>
                      <div className="h6 mb-2">Grocery Store</div>
                      <ul className="nav flex-column gap-2 mt-0">
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Catalog with Side Filters</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-grocery.html">Product Page</a>
                        </li>
                      </ul>
                      <div className="h6 pt-4 mb-2">Marketplace</div>
                      <ul className="nav flex-column gap-2 mt-0">
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-marketplace.html">Catalog with Top Filters</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-marketplace.html">Digital Product Page</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-marketplace.html">Cart / Checkout</a>
                        </li>
                      </ul>
                      <div className="h6 pt-4 mb-2">Checkout v.1</div>
                      <ul className="nav flex-column gap-2 mt-0">
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-cart.html">Shopping Cart</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-delivery-1.html">Delivery Info (Step 1)</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-delivery-2.html">Delivery Info (Step 2)</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-shipping.html">Shipping Address</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-payment.html">Payment</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-thankyou.html">Thank You Page</a>
                        </li>
                      </ul>
                    </div>
                    <div style={{ width: '190px' }}>
                      <div className="h6 mb-2">Checkout v.2</div>
                      <ul className="nav flex-column gap-2 mt-0">
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-cart.html">Shopping Cart</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-delivery.html">Delivery Info</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-pickup.html">Pickup from Store</a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-thankyou.html">Thank You Page</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0">
            <div className="accordion-header" id="headingAccount">
              <button type="button" className="accordion-button animate-underline fw-medium collapsed py-2" data-bs-toggle="collapse" data-bs-target="#account" aria-expanded="false" aria-controls="account">
                <span className="d-block animate-target py-1">Account</span>
              </button>
            </div>
            <div className="accordion-collapse collapse" id="account" aria-labelledby="headingAccount" data-bs-parent="#navigation">
              <div className="accordion-body pb-3">
                <ul className="dropdown-menu show position-static shadow-none">
                  <li className="dropdown">
                    <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Auth Pages</a>
                    <ul className="dropdown-menu position-static transform-none shadow-none">
                      <li><a className="dropdown-item" href="account-signin.html">Sign In</a></li>
                      <li><a className="dropdown-item" href="account-signup.html">Sign Up</a></li>
                      <li><a className="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop User</a>
                    <ul className="dropdown-menu position-static transform-none shadow-none">
                      <li><a className="dropdown-item" href="account-orders.html">Orders History</a></li>
                      <li><a className="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                      <li><a className="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                      <li><a className="dropdown-item" href="account-reviews.html">My Reviews</a></li>
                      <li><a className="dropdown-item" href="account-info.html">Personal Info</a></li>
                      <li><a className="dropdown-item" href="account-addresses.html">Addresses</a></li>
                      <li><a className="dropdown-item" href="account-notifications.html">Notifications</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Marketplace User</a>
                    <ul className="dropdown-menu position-static transform-none shadow-none">
                      <li><a className="dropdown-item" href="account-marketplace-dashboard.html">Dashboard</a></li>
                      <li><a className="dropdown-item" href="account-marketplace-products.html">Products</a></li>
                      <li><a className="dropdown-item" href="account-marketplace-sales.html">Sales</a></li>
                      <li><a className="dropdown-item" href="account-marketplace-payouts.html">Payouts</a></li>
                      <li><a className="dropdown-item" href="account-marketplace-purchases.html">Purchases</a></li>
                      <li><a className="dropdown-item" href="account-marketplace-favorites.html">Favorites</a></li>
                      <li><a className="dropdown-item" href="account-marketplace-settings.html">Settings</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0">
            <div className="accordion-header" id="headingPages">
              <button type="button" className="accordion-button animate-underline fw-medium collapsed py-2" data-bs-toggle="collapse" data-bs-target="#pages" aria-expanded="false" aria-controls="pages">
                <span className="d-block animate-target py-1">Pages</span>
              </button>
            </div>
            <div className="accordion-collapse collapse" id="pages" aria-labelledby="headingPages" data-bs-parent="#navigation">
              <div className="accordion-body pb-3">
                <ul className="dropdown-menu show position-static shadow-none">
                  <li className="dropdown">
                    <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                    <ul className="dropdown-menu position-static transform-none shadow-none">
                      <li><a className="dropdown-item" href="about-v1.html">About v.1</a></li>
                      <li><a className="dropdown-item" href="about-v2.html">About v.2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu position-static transform-none shadow-none">
                      <li><a className="dropdown-item" href="blog-grid-v1.html">Grid View v.1</a></li>
                      <li><a className="dropdown-item" href="blog-grid-v2.html">Grid View v.2</a></li>
                      <li><a className="dropdown-item" href="blog-list.html">List View</a></li>
                      <li><a className="dropdown-item" href="blog-single-v1.html">Single Post v.1</a></li>
                      <li><a className="dropdown-item" href="blog-single-v2.html">Single Post v.2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact</a>
                    <ul className="dropdown-menu position-static transform-none shadow-none">
                      <li><a className="dropdown-item" href="contact-v1.html">Contact v.1</a></li>
                      <li><a className="dropdown-item" href="contact-v2.html">Contact v.2</a></li>
                      <li><a className="dropdown-item" href="contact-v3.html">Contact v.3</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Help Center</a>
                    <ul className="dropdown-menu position-static transform-none shadow-none">
                      <li><a className="dropdown-item" href="help-topics-v1.html">Help Topics v.1</a></li>
                      <li><a className="dropdown-item" href="help-topics-v2.html">Help Topics v.2</a></li>
                      <li><a className="dropdown-item" href="help-single-article-v1.html">Help Single Article v.1</a></li>
                      <li><a className="dropdown-item" href="help-single-article-v2.html">Help Single Article v.2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">404 Error</a>
                    <ul className="dropdown-menu position-static transform-none shadow-none">
                      <li><a className="dropdown-item" href="404-electronics.html">404 Electronics</a></li>
                      <li><a className="dropdown-item" href="404-fashion.html">404 Fashion</a></li>
                      <li><a className="dropdown-item" href="404-furniture.html">404 Furniture</a></li>
                      <li><a className="dropdown-item" href="404-grocery.html">404 Grocery</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="h6 fw-medium py-1 mb-0">
          <a className="d-block animate-underline py-1" href="docs/installation.html">
            <span className="d-inline-block animate-target py-1">Docs</span>
          </a>
        </div>
        <div className="h6 fw-medium py-1 mb-0">
          <a className="d-block animate-underline py-1" href="docs/typography.html">
            <span className="d-inline-block animate-target py-1">Components</span>
          </a>
        </div>
      </div>

      
      <div className="offcanvas-header flex-column align-items-start d-md-none">
        <a className="btn btn-lg btn-outline-secondary w-100 rounded-pill" href="account-signin.html">
          <i className="ci-user fs-lg ms-n1 me-2"></i>
          Account
        </a>
      </div>
    </nav>
    <header className="navbar navbar-expand navbar-sticky sticky-top d-block bg-body z-fixed py-1 py-lg-0 py-xl-1 px-0" data-sticky-element>
      <div className="container justify-content-start py-2 py-lg-3">

        <button type="button" className="navbar-toggler d-block flex-shrink-0 me-3 me-sm-4" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand fs-2 p-0 pe-lg-2 pe-xxl-0 me-0 me-sm-3 me-md-4 me-xxl-5" href="index.html">Cartzilla</a>

        <div className="dropdown d-none d-lg-block w-100 me-4" style={{ width: '200px' }}>
          <button type="button" className="btn btn-lg btn-secondary w-100 border-0 rounded-pill" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="ci-grid fs-lg me-2 ms-n1"></i>
            Categories
            <i className="ci-chevron-down fs-lg me-2 ms-auto me-n1"></i>
          </button>
          <div className="dropdown-menu rounded-4 p-4" style={{'--cz-dropdown-spacer': '.75rem', marginLeft: '-75px'} as React.CSSProperties & { [key: string]: string | number }}>
            <div className="d-flex gap-4">
              <div style={{ width: '170px' }}>
                <div className="h6">Bakery &amp; bread</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Bread</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Pastries</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Bakery cookies</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Cupcakes</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Buns &amp; rolls</a>
                  </li>
                </ul>
                <div className="h6 pt-4">Meat products</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Fresh meat</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Processed meat</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Seafood</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Poultry products</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Prepared meat</a>
                  </li>
                </ul>
              </div>
              <div style={{ width: '170px' }}>
                <div className="h6">Vegetables</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Leafy greens</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Root vegetables</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Allium vegetables</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Peppers and tomatoes</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Cruciferous</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Seasonal squashes</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Beans, peas &amp; lentils</a>
                  </li>
                </ul>
                <div className="h6 pt-4">Sauces and ketchup</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Tomato-based sauces</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Salad dressing</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Hot sauces</a>
                  </li>
                </ul>
              </div>
              <div style={{ width: '170px' }}>
                <div className="h6">Fresh fruits</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Citrus fruits</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Berries</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Tropical fruits</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Stone fruits</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Exotic fruits</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Melons</a>
                  </li>
                </ul>
                <div className="h6 pt-4">Italian dinner</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Pasta &amp; sauces</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Italian cheese</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Italian meats</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Desserts &amp; beverages</a>
                  </li>
                </ul>
              </div>
              <div style={{ width: '170px' }}>
                <div className="h6">Beverages</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Soft drinks</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Juices</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Sports &amp; energy drinks</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Tea and coffee</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Alcoholic beverages</a>
                  </li>
                </ul>
                <div className="h6 pt-4">Dairy &amp; eggs</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Shop all</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Chees</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Milk &amp; yogurt</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Sour cream</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Eggs</a>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Butter &amp; margarine</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative w-100 d-none d-md-block me-3 me-xl-4">
          <input type="search" className="form-control form-control-lg rounded-pill" placeholder="Search for products" aria-label="Search" />
          <button type="button" className="btn btn-icon btn-ghost fs-lg btn-secondary text-bo border-0 position-absolute top-0 end-0 rounded-circle mt-1 me-1" aria-label="Search button">
            <i className="ci-search"></i>
          </button>
        </div>
        <div className="nav me-4 me-xxl-5 d-none d-xl-block">
          <a className="nav-link flex-column align-items-start animate-underline p-0" href="#deliveryOptions" data-bs-toggle="offcanvas" aria-controls="deliveryOptions">
            <div className="h6 fs-sm mb-0">Delivery</div>
            <div className="d-flex align-items-center fs-sm fw-normal text-body">
              <span className="animate-target text-nowrap">Set your address</span>
              <i className="ci-chevron-down fs-base ms-1"></i>
            </div>
          </a>
        </div>

        <div className="d-flex align-items-center gap-md-1 gap-lg-2 ms-auto">

          <div className="dropdown">
            <button type="button" className="theme-switcher btn btn-icon btn-outline-secondary fs-lg border-0 rounded-circle animate-scale" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Toggle theme (light)">
              <span className="theme-icon-active d-flex animate-target">
                <i className="ci-sun"></i>
              </span>
            </button>
            <ul className="dropdown-menu" style={{'--cz-dropdown-min-width': '9rem' } as React.CSSProperties & { [key: string]: string | number }}>
              <li>
                <button type="button" className="dropdown-item active" data-bs-theme-value="light" aria-pressed="true">
                  <span className="theme-icon d-flex fs-base me-2">
                    <i className="ci-sun"></i>
                  </span>
                  <span className="theme-label">Light</span>
                  <i className="item-active-indicator ci-check ms-auto"></i>
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item" data-bs-theme-value="dark" aria-pressed="false">
                  <span className="theme-icon d-flex fs-base me-2">
                    <i className="ci-moon"></i>
                  </span>
                  <span className="theme-label">Dark</span>
                  <i className="item-active-indicator ci-check ms-auto"></i>
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item" data-bs-theme-value="auto" aria-pressed="false">
                  <span className="theme-icon d-flex fs-base me-2">
                    <i className="ci-auto"></i>
                  </span>
                  <span className="theme-label">Auto</span>
                  <i className="item-active-indicator ci-check ms-auto"></i>
                </button>
              </li>
            </ul>
          </div>

          <button type="button" className="btn btn-icon fs-xl btn-outline-secondary border-0 rounded-circle animate-shake d-md-none" data-bs-toggle="collapse" data-bs-target="#searchBar" aria-controls="searchBar" aria-label="Toggle search bar">
            <i className="ci-search animate-target"></i>
          </button>

          <button type="button" className="btn btn-icon fs-lg btn-outline-secondary border-0 rounded-circle animate-scale d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#deliveryOptions" aria-controls="deliveryOptions" aria-label="Toggle delivery options offcanvas">
            <i className="ci-map-pin animate-target"></i>
          </button>

          <a className="btn btn-icon fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex" href="account-signin.html">
            <i className="ci-user animate-target"></i>
            <span className="visually-hidden">Account</span>
          </a>

          <button type="button" className="btn btn-icon fs-xl btn-outline-secondary position-relative border-0 rounded-circle animate-scale" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" aria-label="Shopping cart">
            <span className="position-absolute top-0 start-100 badge fs-xs text-bg-primary rounded-pill ms-n3 z-2" style={{
        '--cz-badge-padding-y': '.25em', // Custom CSS property
        '--cz-badge-padding-x': '.42em'
      } as React.CSSProperties & { [key: string]: string | number }}>8</span>
            <i className="ci-shopping-cart animate-target"></i>
          </button>
        </div>
      </div>
      
      <div className="collapse d-md-none" id="searchBar">
        <div className="container pt-2 pb-3">
          <div className="position-relative">
            <i className="ci-search position-absolute top-50 translate-middle-y d-flex fs-lg ms-3"></i>
            <input type="search" className="form-control form-icon-start rounded-pill" placeholder="Search for products" data-autofocus="collapse" />
          </div>
        </div>
      </div>
    </header>
    <section className="border-top">
      <div className="container py-lg-1">
        <div className="overflow-auto" data-simplebar>
          <div className="nav flex-nowrap justify-content-between gap-4 py-2">
            <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
              <span className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '40px',   // Width as a string
        height: '40px',  // Height as a string
      }}>
                <i className="ci-percent text-primary fs-xl"></i>
              </span>
              <span className="d-block animate-target fw-semibold text-nowrap ms-1">Weekly sale</span>
            </a>
            <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
              <span className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '40px',   // Width as a string
        height: '40px',  // Height as a string
      }}>
                <img src="assets/img/mega-menu/grocery/th01.png" width="30" alt="Image" />
              </span>
              <span className="d-block animate-target fw-semibold text-nowrap ms-1">Vegetables</span>
            </a>
            <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
              <span className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '40px',   // Width as a string
        height: '40px',  // Height as a string
      }}>
                <img src="assets/img/mega-menu/grocery/th02.png" width="30" alt="Image" />
              </span>
              <span className="d-block animate-target fw-semibold text-nowrap ms-1">Easter is coming</span>
            </a>
            <a className="nav-link align-items-center animate-underline gap-2 m-0" href="shop-catalog-grocery.html">
              <span className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '40px',   // Width as a string
        height: '40px',  // Height as a string
      }}>
                <img src="assets/img/mega-menu/grocery/th03.png" width="30" alt="Image" />
              </span>
              <span className="d-block animate-target fw-semibold text-nowrap ms-1">Poultry meat</span>
            </a>
            <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
              <span className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '40px',   // Width as a string
        height: '40px',  // Height as a string
      }}>
                <img src="assets/img/mega-menu/grocery/th04.png" width="30" alt="Image" />
              </span>
              <span className="d-block animate-target fw-semibold text-nowrap ms-1">Fresh fruits</span>
            </a>
            <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
              <span className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '40px',   // Width as a string
        height: '40px',  // Height as a string
      }}>
                <img src="assets/img/mega-menu/grocery/th05.png" width="30" alt="Image" />
              </span>
              <span className="d-block animate-target fw-semibold text-nowrap ms-1">St. Patrick's day</span>
            </a>
            <a className="nav-link align-items-center animate-underline gap-2 p-0" href="shop-catalog-grocery.html">
              <span className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '40px',   // Width as a string
        height: '40px',  // Height as a string
      }}>
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
        <div className="swiper position-absolute top-0 start-0 w-100 h-100" data-swiper='{
          "effect": "fade",
          "loop": true,
          "speed": 400,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "autoplay": {
            "delay": 5500,
            "disableOnInteraction": false
          }
        }' data-bs-theme="dark">
          <div className="swiper-wrapper">

            
            <div className="swiper-slide" style={{backgroundColor: '#6dafca'}}>
              <div className="position-absolute d-flex align-items-center w-100 h-100 z-2">
                <div className="container mt-lg-n4">
                  <div className="row">
                    <div className="col-9 col-sm-8 col-md-7 col-lg-6">
                      <p className="fs-sm text-white mb-lg-4">🔥 Free shipping - order over <strong>50$</strong></p>
                      <h2 className="display-4 pb-2 pb-md-3 pb-lg-4">Healthy Food Available to Everyone</h2>
                      <a className="btn btn-lg btn-outline-light rounded-pill" href="shop-catalog-grocery.html">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
              <img src="assets/img/home/grocery/hero-slider/01.jpg" className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rtl-flip" alt="Image" />
            </div>

            
            <div className="swiper-slide" style={{backgroundColor: '#5a7978'}}>
              <div className="position-absolute d-flex align-items-center w-100 h-100 z-2">
                <div className="container mt-lg-n4">
                  <div className="row">
                    <div className="col-12 col-sm-10 col-md-7 col-lg-6">
                      <p className="fs-sm text-white mb-lg-4">🥚 Organic products to your table</p>
                      <h2 className="display-4 pb-2 pb-md-3 pb-lg-4">Organic eggs from home-grown chicken</h2>
                      <a className="btn btn-lg btn-outline-light rounded-pill" href="shop-catalog-grocery.html">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
              <img src="assets/img/home/grocery/hero-slider/02.jpg" className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rtl-flip" alt="Image" />
            </div>

            
            <div className="swiper-slide" style={{backgroundColor: '#f99c03'}}>
              <div className="position-absolute d-flex align-items-center w-100 h-100 z-2">
                <div className="container mt-lg-n4">
                  <div className="row">
                    <div className="col-9 col-sm-8 col-md-7 col-lg-6">
                      <p className="fs-sm text-white mb-lg-4">🥝 Only natural ingredients</p>
                      <h2 className="display-4 pb-2 pb-md-3 pb-lg-4">Enjoy refreshing summer drink</h2>
                      <a className="btn btn-lg btn-outline-light rounded-pill" href="shop-catalog-grocery.html">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
              <img src="assets/img/home/grocery/hero-slider/03.jpg" className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rtl-flip" alt="Image" />
            </div>
          </div>

          
          <div className="swiper-pagination pb-sm-2"></div>
        </div>
        <div className="d-md-none" style={{height: '380px'}}></div>
        <div className="d-none d-md-block d-lg-none" style={{height: '420px'}}></div>
        <div className="d-none d-lg-block d-xl-none" style={{height: '500px'}}></div>
        <div className="d-none d-xl-block d-xxl-none" style={{height: '560px'}}></div>
        <div className="d-none d-xxl-block" style={{height: '624px'}}></div>
      </section>


      
      <section className="container pt-4 pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <div className="swiper" data-swiper='{
          "slidesPerView": 1,
          "spaceBetween": 24,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "680": {
              "slidesPerView": 2
            },
            "992": {
              "slidesPerView": 3
            }
          }
        }'>
          <div className="swiper-wrapper">

            
            <div className="swiper-slide h-auto">
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
                <div className="ratio w-100 align-self-end rtl-flip" style={{
        maxWidth: '216px',
        '--cz-aspect-ratio': 'calc(240 / 216 * 100%)'
      } as React.CSSProperties & { [key: string]: string | number }}>
                  <img src="assets/img/home/grocery/featured/01.png" alt="Image" />
                </div>
              </div>
            </div>

            
            <div className="swiper-slide h-auto">
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
                <div className="ratio w-100 align-self-end rtl-flip" style={{
        maxWidth: '216px', // Standard CSS property
        '--cz-aspect-ratio': 'calc(240 / 216 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }} >
                  <img src="assets/img/home/grocery/featured/02.png" alt="Image" />
                </div>
              </div>
            </div>

            
            <div className="swiper-slide h-auto">
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
                <div className="ratio w-100 align-self-end rtl-flip" style={{
        maxWidth: '216px', // Standard CSS property
        '--cz-aspect-ratio': 'calc(240 / 216 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                  <img src="assets/img/home/grocery/featured/03.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>

          
          <div className="swiper-pagination position-static mt-3 mt-sm-4"></div>
        </div>
      </section>


      
      <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <div className="row">

          
          <div className="col-lg-3 pb-2 pb-sm-3 pb-md-4 mb-5 mb-lg-0">
            <h2 className="h3 border-bottom pb-3 pb-md-4 mb-4">Categories</h2>
            <div className="row nav g-3 g-sm-4">
              <div className="col-sm-6 col-md-4 col-lg-12 d-flex">
                <div className="position-relative d-flex min-w-0 align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '56px',  // Width as a string
        height: '56px', // Height as a string
      }}>
                    <img src="assets/img/shop/grocery/categories/01.png" width="40" alt="Image" />
                  </div>
                  <div className="min-w-0 ps-3">
                    <a className="nav-link animate-underline stretched-link fs-base fw-semibold p-0 mb-1" href="shop-catalog-grocery.html">
                      <span className="animate-target text-truncate">Bakery &amp; bread</span>
                    </a>
                    <div className="fs-xs fw-normal text-body-secondary">230 products</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-12 d-flex">
                <div className="position-relative d-flex min-w-0 align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '56px',  // Width as a string
        height: '56px', // Height as a string
      }}>
                    <img src="assets/img/shop/grocery/categories/02.png" width="40" alt="Image" />
                  </div>
                  <div className="min-w-0 ps-3">
                    <a className="nav-link animate-underline stretched-link fs-base fw-semibold p-0 mb-1" href="shop-catalog-grocery.html">
                      <span className="animate-target text-truncate">Vegetables</span>
                    </a>
                    <div className="fs-xs fw-normal text-body-secondary">180 products</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-12 d-flex">
                <div className="position-relative d-flex min-w-0 align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '56px',  // Width as a string
        height: '56px', // Height as a string
      }}>
                    <img src="assets/img/shop/grocery/categories/03.png" width="40" alt="Image" />
                  </div>
                  <div className="min-w-0 ps-3">
                    <a className="nav-link animate-underline stretched-link fs-base fw-semibold p-0 mb-1" href="shop-catalog-grocery.html">
                      <span className="animate-target text-truncate">Fresh fruits</span>
                    </a>
                    <div className="fs-xs fw-normal text-body-secondary">205 products</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-12 d-flex">
                <div className="position-relative d-flex min-w-0 align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '56px',  // Width as a string
        height: '56px', // Height as a string
      }}>
                    <img src="assets/img/shop/grocery/categories/04.png" width="40" alt="Image" />
                  </div>
                  <div className="min-w-0 ps-3">
                    <a className="nav-link animate-underline stretched-link fs-base fw-semibold p-0 mb-1" href="shop-catalog-grocery.html">
                      <span className="animate-target text-truncate">Meet Italian dinner</span>
                    </a>
                    <div className="fs-xs fw-normal text-body-secondary">309 products</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-12 d-flex">
                <div className="position-relative d-flex min-w-0 align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '56px',  // Width as a string
        height: '56px', // Height as a string
      }}>
                    <img src="assets/img/shop/grocery/categories/05.png" width="40" alt="Image" />
                  </div>
                  <div className="min-w-0 ps-3">
                    <a className="nav-link animate-underline stretched-link fs-base fw-semibold p-0 mb-1" href="shop-catalog-grocery.html">
                      <span className="animate-target text-truncate">Beverages</span>
                    </a>
                    <div className="fs-xs fw-normal text-body-secondary">372 products</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-12 d-flex">
                <div className="position-relative d-flex min-w-0 align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '56px',  // Width as a string
        height: '56px', // Height as a string
      }}>
                    <img src="assets/img/shop/grocery/categories/06.png" width="40" alt="Image" />
                  </div>
                  <div className="min-w-0 ps-3">
                    <a className="nav-link animate-underline stretched-link fs-base fw-semibold p-0 mb-1" href="shop-catalog-grocery.html">
                      <span className="animate-target text-truncate">Meat products</span>
                    </a>
                    <div className="fs-xs fw-normal text-body-secondary">124 products</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-12 d-flex">
                <div className="position-relative d-flex min-w-0 align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '56px',  // Width as a string
        height: '56px', // Height as a string
      }}>
                    <img src="assets/img/shop/grocery/categories/07.png" width="40" alt="Image" />
                  </div>
                  <div className="min-w-0 ps-3">
                    <a className="nav-link animate-underline stretched-link fs-base fw-semibold p-0 mb-1" href="shop-catalog-grocery.html">
                      <span className="animate-target text-truncate">Sauces and ketchup</span>
                    </a>
                    <div className="fs-xs fw-normal text-body-secondary">219 products</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-12 d-flex">
                <div className="position-relative d-flex min-w-0 align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-body-tertiary rounded-circle" style={{
        width: '56px',  // Width as a string
        height: '56px', // Height as a string
      }}>
                    <img src="assets/img/shop/grocery/categories/08.png" width="40" alt="Image" />
                  </div>
                  <div className="min-w-0 ps-3">
                    <a className="nav-link animate-underline stretched-link fs-base fw-semibold p-0 mb-1" href="shop-catalog-grocery.html">
                      <span className="animate-target text-truncate">Dairy and eggs</span>
                    </a>
                    <div className="fs-xs fw-normal text-body-secondary">146 products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4 mb-3 mb-lg-4">
              <h2 className="h3 mb-0">Popular products</h2>
              <div className="nav ms-3">
                <a className="nav-link animate-underline px-0 py-2" href="shop-catalog-grocery.html">
                  <span className="animate-target">View all</span>
                  <i className="ci-chevron-right fs-base ms-1"></i>
                </a>
              </div>
            </div>

            
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-3 row-cols-xl-4 g-4">

              
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                      <i className="ci-heart animate-target"></i>
                    </button>
                    <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                      <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                        <img src="assets/img/shop/grocery/01.png" alt="Image" />
                      </div>
                    </a>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                            <i className="ci-minus fs-sm"></i>
                          </button>
                          <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                          <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                            <span data-count-input-value></span>
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
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <span className="badge text-bg-danger position-absolute top-0 start-0 z-2 mt-1 mt-sm-2 ms-1 ms-sm-2">-30%</span>
                    <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                      <i className="ci-heart animate-target"></i>
                    </button>
                    <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                      <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                        <img src="assets/img/shop/grocery/02.png" alt="Image" />
                      </div>
                    </a>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                            <i className="ci-minus fs-sm"></i>
                          </button>
                          <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                          <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                            <span data-count-input-value></span>
                            <i className="ci-plus fs-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$3.12 <del className="fs-sm fw-normal text-body-tertiary ms-1">$4.05</del></div>
                    <h3 className="fs-sm lh-base mb-0">
                      <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Fresh orange Klementina, Spain</a>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">1kg</div>
                </div>
              </div>

              
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                      <i className="ci-heart animate-target"></i>
                    </button>
                    <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                      <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                        <img src="assets/img/shop/grocery/03.png" alt="Image" />
                      </div>
                    </a>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                            <i className="ci-minus fs-sm"></i>
                          </button>
                          <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                          <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                            <span data-count-input-value></span>
                            <i className="ci-plus fs-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$0.80</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Pepsi soda classNameic, can</a>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">330ml</div>
                </div>
              </div>

              
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                      <i className="ci-heart animate-target"></i>
                    </button>
                    <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                      <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                        <img src="assets/img/shop/grocery/04.png" alt="Image" />
                      </div>
                    </a>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                            <i className="ci-minus fs-sm"></i>
                          </button>
                          <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                          <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                            <span data-count-input-value></span>
                            <i className="ci-plus fs-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$2.99</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Mozzarella mini cheese Granaloro</a>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">250g</div>
                </div>
              </div>

              
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                      <i className="ci-heart animate-target"></i>
                    </button>
                    <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                      <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                        <img src="assets/img/shop/grocery/05.png" alt="Image" />
                      </div>
                    </a>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                            <i className="ci-minus fs-sm"></i>
                          </button>
                          <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                          <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                            <span data-count-input-value></span>
                            <i className="ci-plus fs-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$1.24</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Coconut, Indonesia</a>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">1 coconut</div>
                </div>
              </div>

              
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                      <i className="ci-heart animate-target"></i>
                    </button>
                    <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                      <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                        <img src="assets/img/shop/grocery/06.png" alt="Image" />
                      </div>
                    </a>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                            <i className="ci-minus fs-sm"></i>
                          </button>
                          <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                          <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                            <span data-count-input-value></span>
                            <i className="ci-plus fs-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$3.95</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Pesto sauce Barilla with parmesan and basil</a>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">200g</div>
                </div>
              </div>

              
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                      <i className="ci-heart animate-target"></i>
                    </button>
                    <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                      <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                        <img src="assets/img/shop/grocery/07.png" alt="Image" />
                      </div>
                    </a>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                            <i className="ci-minus fs-sm"></i>
                          </button>
                          <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                          <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                            <span data-count-input-value></span>
                            <i className="ci-plus fs-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$1.99</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Fresh mango, Spain</a>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">1 mango</div>
                </div>
              </div>

              
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                      <i className="ci-heart animate-target"></i>
                    </button>
                    <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                      <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                        <img src="assets/img/shop/grocery/08.png" alt="Image" />
                      </div>
                    </a>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                            <i className="ci-minus fs-sm"></i>
                          </button>
                          <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                          <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                            <span data-count-input-value></span>
                            <i className="ci-plus fs-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$2.40</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Fresh green asparagus, bunch</a>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">300g</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <h2 className="h3 text-center pb-1 pb-sm-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5">Shop by lifestyle</h2>
        <div className="swiper pb-lg-2" data-swiper='{
          "slidesPerView": 1,
          "spaceBetween": 24,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 2
            },
            "768": {
              "slidesPerView": 3
            },
            "992": {
              "slidesPerView": 4
            }
          }
        }'>
          <div className="swiper-wrapper">

            
            <div className="swiper-slide text-center">
              <div className="position-relative d-inline-block text-dark-emphasis bg-warning-subtle rounded-circle p-5 mb-4">
                <svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none"><path d="M62.631 13.369l-7.214 7.214M20.583 55.417l-7.214 7.214M38 51.037c0-11.315-13.926-11.315-13.926-11.315s0 13.926 11.315 13.926H38m0-2.611v2.611m0-2.611c0-11.315 13.926-11.315 13.926-11.315s0 13.926-11.315 13.926H38m0-14.222c0-11.315-13.926-11.315-13.926-11.315s0 13.926 11.315 13.926H38m0-2.611v2.611m0-2.611c0-11.315 13.926-11.315 13.926-11.315s0 13.926-11.315 13.926H38m0 18.585v-6.967M72.833 38c0 19.238-15.595 34.833-34.833 34.833S3.167 57.238 3.167 38 18.762 3.167 38 3.167 72.833 18.762 72.833 38zM38 15.378s9.847 9.849 1.846 17.849L38 35.074l-1.846-1.847C28.153 25.227 38 15.378 38 15.378z" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <h3 className="h5 mb-2">
                <a className="animate-underline stretched-link" href="shop-catalog-grocery.html">
                 <span className="animate-target">Gluten-Free</span>
                </a>
              </h3>
              <p className="fs-sm mb-0">Foods that don't contain gluten</p>
            </div>

            
            <div className="swiper-slide text-center">
              <div className="position-relative d-inline-block text-dark-emphasis bg-success-subtle rounded-circle p-5 mb-4">
                <svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none"><g stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10"><g stroke-linecap="round" stroke-linejoin="round"><path d="M16.842 37.347c5.205 6.789 12.251 18.802 12.251 36.436h17.812c0-17.634 7.066-29.648 12.251-36.436m-7.599-3.958c-3.048 4.71-6.452 10.984-9.084 18.565V32.142"/><path d="M33.547 32.162v19.811c-2.632-7.56-6.036-13.834-9.104-18.584"/></g><path d="M62.502 15.577c-.079 0-.139.02-.218.02-1.029-5.086-5.522-8.926-10.905-8.926-1.405 0-2.731.297-3.958.752-1.979-3.127-5.423-5.205-9.401-5.205-3.958 0-7.422 2.098-9.401 5.205-1.227-.475-2.553-.752-3.958-.752-5.403 0-9.896 3.84-10.905 8.926-.079 0-.139-.02-.218-.02-6.155 0-11.281 4.988-11.281 11.143s5.126 11.143 11.281 11.143c3.76 0 7.046-1.88 9.045-4.73.673.158 1.366.277 2.078.277 2.692 0 5.067-1.207 6.709-3.107 1.623 1.88 3.978 3.107 6.65 3.107s5.027-1.227 6.65-3.107c1.643 1.88 4.018 3.107 6.709 3.107.712 0 1.405-.099 2.078-.277 2.019 2.85 5.304 4.73 9.045 4.73 6.155 0 11.281-4.987 11.281-11.143s-5.126-11.143-11.281-11.143z" stroke-linejoin="round"/></g></svg>
              </div>
              <h3 className="h5 mb-2">
                <a className="animate-underline stretched-link" href="shop-catalog-grocery.html">
                 <span className="animate-target">Vegan</span>
                </a>
              </h3>
              <p className="fs-sm mb-0">Vegetable based goodness</p>
            </div>

            
            <div className="swiper-slide text-center">
              <div className="position-relative d-inline-block text-dark-emphasis bg-info-subtle rounded-circle p-5 mb-4">
                <svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none"><path d="M9.5 72.8336C9.5 72.8336 9.875 42.7074 38 34.8336" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"/><path d="M11.1264 58.4427C7.13273 49.8272 -11.3834 1.3653 66.3117 6.74996C67.4008 6.74996 68.49 7.82689 68.8531 8.90382C70.6684 18.9552 74.6621 64.1863 13.6678 59.8786C12.2156 59.8786 11.4895 59.5196 11.1264 58.4427Z" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10"/></svg>
              </div>
              <h3 className="h5 mb-2">
                <a className="animate-underline stretched-link" href="shop-catalog-grocery.html">
                 <span className="animate-target">Plant based</span>
                </a>
              </h3>
              <p className="fs-sm mb-0">Based on herbal ingredients</p>
            </div>

            
            <div className="swiper-slide text-center">
              <div className="position-relative d-inline-block text-dark-emphasis bg-danger-subtle rounded-circle p-5 mb-4">
                <svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"><path d="M58.59 33.535c-2.219-3.028-3.595-6.515-4.043-10.133-1.227-9.91-7.437-16.42-6.862-15.718-4.878-5.956-14.1-6.035-19.083-.163-4.128 4.863-6.442 10.345-7.191 16.12-.454 3.502-1.759 6.871-3.919 9.785-3.034 4.093-4.824 9.13-4.824 14.577 0 13.7 11.607 24.962 25.584 24.829 13.876-.132 25.083-11.198 25.083-24.829 0-5.399-1.758-10.395-4.744-14.469z"/><path d="M48.871 48.815c0 5.885-4.867 10.655-10.871 10.655S27.129 54.7 27.129 48.815 31.996 34.495 38 34.495s10.871 8.435 10.871 14.32z"/></svg>
              </div>
              <h3 className="h5 mb-2">
                <a className="animate-underline stretched-link" href="shop-catalog-grocery.html">
                 <span className="animate-target">Keto</span>
                </a>
              </h3>
              <p className="fs-sm mb-0">Good fats served in food</p>
            </div>
          </div>

          
          <div className="swiper-pagination position-static mt-3 mt-sm-4"></div>
        </div>
      </section>


      
      <section className="container pt-xl-2 pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <div className="row">

          
          <div className="col-sm-5 col-md-4 col-lg-3 mb-5 mb-sm-0">
            <div className="pe-lg-2 pe-xl-4">
              <div className="rounded-4 overflow-hidden" style={{
        backgroundColor: '#a6cddc', // Background color as a string
      }} data-bs-theme="light">
                <div className="pt-3 px-3 mt-3 mx-3">
                  <h4 className="mb-2 mb-xl-3">Make breakfast healthy and easy</h4>
                  <div className="nav">
                    <a className="nav-link animate-underline stretched-link px-0" href="#!">
                      <span className="animate-target">Shop now</span>
                      <i className="ci-chevron-right fs-base mt-1 ms-1"></i>
                    </a>
                  </div>
                </div>
                <div className="ratio mt-n2" style={{
        '--cz-aspect-ratio': 'calc(240 / 282 * 100%)', // Custom CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                  <img src="assets/img/shop/grocery/banner.jpg" alt="Banner" />
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-sm-7 col-md-8 col-lg-9">
            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4 mb-3 mb-lg-4">
              <h2 className="h3 mb-0">Special products</h2>
              <div className="nav ms-3">
                <a className="nav-link animate-underline px-0 py-2" href="shop-catalog-grocery.html">
                  <span className="animate-target text-nowrap">View all</span>
                  <i className="ci-chevron-right fs-base ms-1"></i>
                </a>
              </div>
            </div>
            <div className="swiper" data-swiper='{
              "slidesPerView": 2,
              "spaceBetween": 24,
              "pagination": {
                "el": ".swiper-pagination",
                "clickable": true
              },
              "breakpoints": {
                "840": {
                  "slidesPerView": 3
                },
                "992": {
                  "slidesPerView": 4
                }
              }
            }'>
              <div className="swiper-wrapper">

                
                <div className="swiper-slide h-auto">
                  <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                    <div className="position-relative z-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                        <i className="ci-heart animate-target"></i>
                      </button>
                      <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                        <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)'
      } as React.CSSProperties & { [key: string]: string | number }}>
                          <img src="assets/img/shop/grocery/09.png" alt="Image" />
                        </div>
                      </a>
                      <div className="position-absolute w-100 start-0 bottom-0">
                        <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                          <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                            <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                              <i className="ci-minus fs-sm"></i>
                            </button>
                            <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                            <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                              <span data-count-input-value></span>
                              <i className="ci-plus fs-sm"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                      <div className="h6 mb-2">$18.60</div>
                      <h3 className="fs-sm lh-base mb-0">
                        <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Pure virgin olive oil Basso</a>
                      </h3>
                    </div>
                    <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">1000ml</div>
                  </div>
                </div>

                
                <div className="swiper-slide h-auto">
                  <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                    <div className="position-relative z-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                        <i className="ci-heart animate-target"></i>
                      </button>
                      <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                        <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)'
      } as React.CSSProperties & { [key: string]: string | number }}>
                          <img src="assets/img/shop/grocery/10.png" alt="Image" />
                        </div>
                      </a>
                      <div className="position-absolute w-100 start-0 bottom-0">
                        <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                          <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                            <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                              <i className="ci-minus fs-sm"></i>
                            </button>
                            <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                            <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                              <span data-count-input-value></span>
                              <i className="ci-plus fs-sm"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                      <div className="h6 mb-2">$9.15</div>
                      <h3 className="fs-sm lh-base mb-0">
                        <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Fresh pork butt steaks with rosemary</a>
                      </h3>
                    </div>
                    <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">500g</div>
                  </div>
                </div>

                
                <div className="swiper-slide h-auto">
                  <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                    <div className="position-relative z-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                        <i className="ci-heart animate-target"></i>
                      </button>
                      <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                        <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)'
      } as React.CSSProperties & { [key: string]: string | number }}>
                          <img src="assets/img/shop/grocery/11.png" alt="Image" />
                        </div>
                      </a>
                      <div className="position-absolute w-100 start-0 bottom-0">
                        <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                          <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                            <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                              <i className="ci-minus fs-sm"></i>
                            </button>
                            <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                            <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                              <span data-count-input-value></span>
                              <i className="ci-plus fs-sm"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                      <div className="h6 mb-2">$3.40</div>
                      <h3 className="fs-sm lh-base mb-0">
                        <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Fresh red grapefruit</a>
                      </h3>
                    </div>
                    <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">1kg</div>
                  </div>
                </div>

                
                <div className="swiper-slide h-auto">
                  <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                    <div className="position-relative z-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2" aria-label="Add to Wishlist">
                        <i className="ci-heart animate-target"></i>
                      </button>
                      <a className="d-block p-2 p-lg-3" href="shop-product-grocery.html">
                        <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(160 / 191 * 100%)'
      } as React.CSSProperties & { [key: string]: string | number }}>
                          <img src="assets/img/shop/grocery/12.png" alt="Image" />
                        </div>
                      </a>
                      <div className="position-absolute w-100 start-0 bottom-0">
                        <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                          <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                            <button type="button" className="btn btn-icon btn-sm btn-primary" data-decrement aria-label="Decrement quantity">
                              <i className="ci-minus fs-sm"></i>
                            </button>
                            <input type="number" className="form-control form-control-sm bg-primary text-white w-100" value="0" min="0" readOnly />
                            <button type="button" className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto" data-increment aria-label="Increment quantity">
                              <span data-count-input-value></span>
                              <i className="ci-plus fs-sm"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                      <div className="h6 mb-2">$2.59</div>
                      <h3 className="fs-sm lh-base mb-0">
                        <a className="hover-effect-underline fw-normal" href="shop-product-grocery.html">Soft creme cheese with greens Exquisa</a>
                      </h3>
                    </div>
                    <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">150g</div>
                  </div>
                </div>
              </div>

              
              <div className="swiper-pagination position-static mt-3 mt-sm-4"></div>
            </div>
          </div>
        </div>
      </section>


      
      <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4">
        <h2 className="h3 mb-4">Recipes</h2>
        <div className="row">

          
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="d-flex flex-column gap-1 gap-md-2">

              
              <div className="position-relative d-flex align-items-start align-items-sm-center mb-4">
                <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(140 / 196 * 100%)', // Custom CSS property
        maxWidth: '196px'
      } as React.CSSProperties & { [key: string]: string | number }}>
                  <img src="assets/img/home/grocery/recipes/01.jpg" className="rounded" alt="Image" />
                </div>
                <div className="ps-3 ps-xl-4">
                  <h3 className="fs-base fw-medium lh-base mb-2 mb-xl-3">
                    <a className="hover-effect-underline stretched-link" href="#!">Garden salad with a mix of lettuce, cucumber and tomato</a>
                  </h3>
                  <div className="d-flex gap-3 gap-xl-4 fs-sm text-body-secondary">
                    <div className="d-flex align-items-center text-nowrap">
                      <i className="ci-clock fs-base me-2"></i>
                      30 min
                    </div>
                    <div className="d-flex align-items-center text-nowrap">
                      <i className="ci-zap fs-base me-2"></i>
                      Easy
                    </div>
                    <div className="d-flex align-items-center text-nowrap">
                      <i className="ci-food fs-base me-2"></i>
                      4 por
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-relative d-flex align-items-start align-items-sm-center mb-4">
                <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(140 / 196 * 100%)', // Custom CSS property
        maxWidth: '196px'
      } as React.CSSProperties & { [key: string]: string | number }}>
                  <img src="assets/img/home/grocery/recipes/02.jpg" className="rounded" alt="Image" />
                </div>
                <div className="ps-3 ps-xl-4">
                  <h3 className="fs-base fw-medium lh-base mb-2 mb-xl-3">
                    <a className="hover-effect-underline stretched-link" href="#!">Raspberry fresh lemonade with lemon, strawberry syrup and mint</a>
                  </h3>
                  <div className="d-flex gap-3 gap-xl-4 fs-sm text-body-secondary">
                    <div className="d-flex align-items-center text-nowrap">
                      <i className="ci-clock fs-base me-2"></i>
                      50 min
                    </div>
                    <div className="d-flex align-items-center text-nowrap">
                      <i className="ci-zap fs-base me-2"></i>
                      Hard
                    </div>
                    <div className="d-flex align-items-center text-nowrap">
                      <i className="ci-food fs-base me-2"></i>
                      8 por
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-relative d-flex align-items-start align-items-sm-center mb-4">
                <div className="ratio" style={{
        '--cz-aspect-ratio': 'calc(140 / 196 * 100%)', // Custom CSS property
        maxWidth: '196px'
      } as React.CSSProperties & { [key: string]: string | number }}>
                  <img src="assets/img/home/grocery/recipes/03.jpg" className="rounded" alt="Image" />
                </div>
                <div className="ps-3 ps-xl-4">
                  <h3 className="fs-base fw-medium lh-base mb-2 mb-xl-3">
                    <a className="hover-effect-underline stretched-link" href="#!">Penne pasta with spinach and zucchini in a creamy sauce</a>
                  </h3>
                  <div className="d-flex gap-3 gap-xl-4 fs-sm text-body-secondary">
                    <div className="d-flex align-items-center text-nowrap">
                      <i className="ci-clock fs-base me-2"></i>
                      25 min
                    </div>
                    <div className="d-flex align-items-center text-nowrap">
                      <i className="ci-zap fs-base me-2"></i>
                      Easy
                    </div>
                    <div className="d-flex align-items-center text-nowrap">
                      <i className="ci-food fs-base me-2"></i>
                      2 por
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav mt-n2 mt-lg-n1 mt-xxl-0">
              <a className="nav-link animate-underline px-0 py-2" href="#!">
                <span className="animate-target text-nowrap">View all</span>
                <i className="ci-chevron-right fs-base ms-1"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="border rounded-5 p-4">
              <div className="d-sm-flex align-items-start align-items-md-center align-items-lg-start align-items-xl-center p-md-2 p-lg-0 p-xl-2 p-xxl-3">
                <a className="ratio d-block w-100 mb-4 mb-sm-0" href="#!" style={{
        '--cz-aspect-ratio': 'calc(404 / 286 * 100%)', // Custom CSS property
        maxWidth: '286px'
      } as React.CSSProperties & { [key: string]: string | number }}>
                  <img src="assets/img/home/grocery/recipes/book-cover.jpg" className="rounded-4" alt="Book cover" />
                </a>
                <div className="w-100 ps-sm-4 ms-md-2 ms-lg-0 ms-xl-2 ms-xxl-3">
                  <span className="badge bg-body-secondary text-body-emphasis rounded-pill mb-3">Cookbook</span>
                  <h3 className="h4 mb-2">The Best in Gastronomy</h3>
                  <div className="fs-sm mb-3">Author: <span className="text-dark-emphasis fw-medium">Dana Chambers</span></div>
                  <p className="fs-sm pb-1 pb-xl-3">An exquisite cookbook that takes readers on a culinary journey around the world. With stunning photography and detailed instructions ...</p>
                  <div className="h4">$12.40</div>
                  <a className="btn btn-dark rounded-pill" href="#!">
                    Shop book
                    <i className="ci-chevron-right fs-base ms-1 me-n1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <div className="row">

          <div className="col-lg-7 mb-4 mb-lg-0">
            <div className="d-flex flex-column flex-sm-row align-items-center h-100 bg-body-tertiary rounded-5 overflow-hidden">
              <div className="order-sm-2 text-center text-sm-start pt-4 px-4 pb-2 pb-sm-4 mt-3 mt-sm-0">
                <h2 className="h4 mb-4">Make online shop easier with our Cartzilla App</h2>
                <div className="d-flex flex-sm-wrap justify-content-center justify-content-sm-start gap-2 gap-sm-3">
                  <a className="btn btn-market btn-lg btn-light rounded-pill flex-shrink-0" href="#!" aria-label="Download on Google Play">
                    <svg className="flex-shrink-0 ms-n1 me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.665 10.561l-3.251-1.878-3.329 3.329 3.328 3.329 3.263-1.884c.509-.309.812-.849.812-1.444s-.304-1.135-.823-1.451z" fill="#ffce00"/><path d="M13.085 12.011L4.018 2.879a1.71 1.71 0 0 0-.507 1.216v15.804a1.71 1.71 0 0 0 .507 1.217l9.067-9.105z" fill="#01daff"/><path d="M13.086 12.011l3.329-3.329.005-.005-4.46-2.568L6.08 2.654c-.529-.327-1.171-.338-1.712-.034a2.54 2.54 0 0 0-.349.259l9.067 9.132z" fill="#00f076"/><path d="M4.019 21.116c.113.101.225.18.349.259.27.146.552.225.834.225.304 0 .597-.09.867-.248l5.891-3.439 4.46-2.568-.005-.005-3.329-3.329-9.067 9.104z" fill="#f63448"/></svg>
                    <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="77" height="24" viewBox="0 0 77 24" fill="currentColor"><path d="M24.575 9.45c-2.184 0-3.914 1.704-3.914 4.071 0 2.272 1.729 4.071 3.914 4.071s3.914-1.704 3.914-4.071c0-2.461-1.729-4.071-3.914-4.071zm0 6.438c-1.183 0-2.184-1.041-2.184-2.462s1.001-2.462 2.184-2.462 2.184.947 2.184 2.462c0 1.42-1.001 2.462-2.184 2.462zM16.11 9.45c-2.184 0-3.914 1.704-3.914 4.071 0 2.272 1.729 4.071 3.914 4.071s3.914-1.704 3.914-4.071c0-2.461-1.729-4.071-3.914-4.071zm0 6.438c-1.183 0-2.184-1.041-2.184-2.462s1.001-2.462 2.184-2.462 2.184.947 2.184 2.462c0 1.42-1.001 2.462-2.184 2.462zM6.007 10.681v1.704h3.914c-.091.947-.455 1.704-.91 2.177-.546.568-1.456 1.231-3.004 1.231-2.457 0-4.278-1.988-4.278-4.544s1.911-4.544 4.278-4.544c1.274 0 2.275.568 3.004 1.231l1.183-1.231C9.193 5.757 7.918 5 6.098 5 2.822 5 0 7.84 0 11.249s2.822 6.249 6.098 6.249c1.82 0 3.095-.568 4.187-1.799 1.092-1.136 1.456-2.745 1.456-3.976 0-.379 0-.757-.091-1.041H6.007zm41.322 1.325c-.364-.947-1.274-2.556-3.277-2.556s-3.641 1.61-3.641 4.071c0 2.272 1.638 4.071 3.823 4.071 1.729 0 2.822-1.136 3.186-1.799l-1.274-.947c-.455.663-1.001 1.136-1.911 1.136s-1.456-.379-1.911-1.231l5.188-2.272-.182-.473zm-5.279 1.326c0-1.515 1.183-2.367 2.002-2.367.637 0 1.274.379 1.456.852l-3.459 1.515zm-4.278 3.882h1.729V5.379h-1.729v11.834zm-2.73-6.911c-.455-.473-1.183-.947-2.093-.947-1.911 0-3.732 1.799-3.732 4.071s1.729 3.976 3.732 3.976c.91 0 1.638-.473 2.002-.947h.091v.568c0 1.515-.819 2.367-2.093 2.367-1.001 0-1.729-.757-1.911-1.42l-1.456.663C30.036 19.675 31.128 21 33.039 21c2.002 0 3.641-1.231 3.641-4.166V9.639h-1.638v.663zm-2.002 5.586c-1.183 0-2.184-1.041-2.184-2.462s1.001-2.462 2.184-2.462 2.093 1.041 2.093 2.462-.91 2.462-2.093 2.462zM55.247 5.379h-4.096v11.834h1.729v-4.45h2.367c1.911 0 3.732-1.42 3.732-3.692s-1.82-3.692-3.732-3.692zm.091 5.681h-2.457V6.988h2.457c1.274 0 2.002 1.136 2.002 1.988-.091 1.041-.819 2.083-2.002 2.083zm10.467-1.704c-1.274 0-2.549.568-3.004 1.799l1.547.663c.364-.663.91-.852 1.547-.852.91 0 1.729.568 1.82 1.515v.095c-.273-.189-1.001-.473-1.729-.473-1.638 0-3.277.947-3.277 2.651 0 1.609 1.365 2.651 2.821 2.651 1.183 0 1.729-.568 2.184-1.136h.091v.947h1.638v-4.544c-.182-2.083-1.729-3.314-3.641-3.314zm-.182 6.533c-.546 0-1.365-.284-1.365-1.041 0-.947 1.001-1.231 1.82-1.231.728 0 1.092.189 1.547.379-.182 1.136-1.092 1.894-2.002 1.894zm9.557-6.249l-1.911 5.112h-.091l-2.002-5.112h-1.82l3.004 7.195-1.729 3.976h1.729L77 9.639h-1.82zm-15.291 7.574h1.729V5.379h-1.729v11.834z"/></svg>
                  </a>
                  <a className="btn btn-market btn-lg btn-light rounded-pill flex-shrink-0" href="#!" aria-label="Download on App Store">
                    <i className="ci-apple lead ms-n1 me-2"></i>
                    <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="77" height="24" viewBox="0 0 77 24" fill="currentColor"><path d="M40.713 15.797c.701-.624 1.055-1.431 1.055-2.427 0-.806-.242-1.486-.733-2.032-.483-.546-1.232-1.02-2.255-1.423-.838-.324-1.418-.625-1.732-.901a1.41 1.41 0 0 1-.548-1.138 1.39 1.39 0 0 1 .475-1.059c.379-.316.91-.482 1.579-.482.854 0 1.611.182 2.288.538l.483-1.518c-.717-.372-1.619-.553-2.699-.553-1.216 0-2.191.308-2.924.917a2.94 2.94 0 0 0-1.103 2.356c0 1.463 1.039 2.577 3.142 3.344.765.277 1.313.577 1.643.901a1.63 1.63 0 0 1 .491 1.194c0 .53-.201.957-.604 1.273-.395.316-.959.474-1.675.474-.999 0-1.917-.245-2.755-.727l-.443 1.557c.773.482 1.796.727 3.077.727 1.386 0 2.465-.34 3.238-1.02zm-31.706.846h2.03L7.195 4.966H4.826L1 16.644h1.974l1.055-3.431h3.867l1.112 3.431zM6.558 8.729l1.007 3.044H4.367l.991-3.044.564-2.198h.04l.596 2.198zm13.122 6.997c.797-.83 1.192-1.961 1.192-3.392 0-1.289-.338-2.316-1.031-3.107-.677-.783-1.514-1.178-2.529-1.178-1.289 0-2.255.506-2.892 1.51h-.032l-.105-1.336h-1.675l.072 2.767v9.068h1.909v-4.42c.499.798 1.313 1.194 2.449 1.194 1.047 0 1.933-.364 2.642-1.107zm-1.313-5.353c.379.53.564 1.202.564 2.024 0 .893-.201 1.605-.604 2.15-.403.538-.959.814-1.675.814-.612 0-1.112-.213-1.49-.633s-.572-.941-.572-1.55v-1.407c0-.15.032-.34.089-.569a2.11 2.11 0 0 1 .749-1.202c.387-.3.814-.459 1.281-.459a1.96 1.96 0 0 1 1.659.83zm12.366 1.961c0 1.431-.395 2.562-1.192 3.392-.709.743-1.595 1.107-2.642 1.107-1.136 0-1.949-.395-2.449-1.194v4.42H22.54v-9.068l-.072-2.767h1.675l.105 1.336h.032c.636-1.004 1.603-1.51 2.892-1.51 1.015 0 1.853.395 2.529 1.178.693.791 1.031 1.818 1.031 3.107zm-1.941.063c0-.822-.185-1.494-.564-2.024a1.96 1.96 0 0 0-1.659-.83c-.467 0-.894.158-1.281.459-.379.308-.628.704-.749 1.202-.056.229-.089.419-.089.569v1.407c0 .609.193 1.131.572 1.55s.878.633 1.49.633c.717 0 1.281-.277 1.676-.814.411-.546.604-1.257.604-2.15zM48.083 9.63h-2.102v4.087c0 1.036.37 1.557 1.112 1.557.338 0 .62-.032.846-.087l.056 1.423c-.379.134-.87.206-1.482.206-.757 0-1.337-.229-1.764-.68s-.636-1.21-.636-2.269V9.623h-1.248V8.223h1.249V6.681l1.869-.553v2.095h2.102V9.63zm8.329 5.922c.749-.83 1.128-1.89 1.128-3.186 0-1.257-.362-2.285-1.096-3.075-.765-.822-1.78-1.233-3.037-1.233-1.305 0-2.344.419-3.117 1.249-.765.83-1.152 1.897-1.152 3.202 0 1.249.37 2.285 1.12 3.099s1.756 1.225 3.013 1.225c1.305 0 2.352-.427 3.142-1.281zm-1.353-5.131c.338.553.508 1.21.508 1.984s-.177 1.439-.524 2.008c-.419.68-.991 1.02-1.716 1.02-.741 0-1.321-.332-1.732-1.004-.338-.546-.508-1.21-.508-1.984 0-.799.161-1.471.508-2.024.395-.672.983-1.004 1.748-1.004.741 0 1.313.332 1.716 1.004zm8.683-.553c-.185-.032-.387-.047-.604-.047-.669 0-1.192.245-1.555.743-.314.435-.475.996-.475 1.66v4.419h-1.909v-5.771l-.056-2.649h1.659l.072 1.613h.056c.201-.553.516-1.004.951-1.336.427-.3.886-.451 1.377-.451a4.09 4.09 0 0 1 .475.032l.008 1.787zm8.451 3.012c.048-.229.072-.514.072-.846 0-1.051-.258-1.929-.765-2.656-.628-.901-1.571-1.352-2.803-1.352-1.257 0-2.255.451-2.997 1.352-.709.846-1.063 1.905-1.063 3.17 0 1.289.379 2.324 1.136 3.091s1.804 1.154 3.133 1.154c1.104 0 2.062-.174 2.876-.522l-.298-1.297c-.693.261-1.466.395-2.312.395-.765 0-1.386-.198-1.869-.585-.532-.435-.806-1.075-.83-1.905h5.719zm-2.119-2.767c.258.403.387.886.371 1.439l-3.963-.008c.056-.561.25-1.051.564-1.455a1.82 1.82 0 0 1 1.514-.759c.677 0 1.184.261 1.514.783z"/></svg>
                  </a>
                </div>
              </div>
              <div className="ratio align-self-sm-end order-sm-1 rtl-flip" style={{
        '--cz-aspect-ratio': 'calc(284 / 330 * 100%)', // Custom CSS property
        maxWidth: '330px'
      } as React.CSSProperties & { [key: string]: string | number }}>
                <img src="assets/img/home/grocery/banner01.png" alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex align-items-center h-100 bg-body-tertiary rounded-5 overflow-hidden">
              <div className="ratio align-self-end rtl-flip" style={{
        '--cz-aspect-ratio': 'calc(284 / 244 * 100%)', // Custom CSS property
        maxWidth: '244px', // Standard CSS property
      } as React.CSSProperties & { [key: string]: string | number }}>
                <img src="assets/img/home/grocery/banner02.png" alt="Image" />
              </div>
              <div className="p-4">
                <h2 className="h4 mb-sm-4">We'd love to hear what you think!</h2>
                <div className="nav mt-n2 mt-sm-n1 mt-lg-0">
                  <a className="nav-link animate-underline px-0 py-2" href="#!">
                    <span className="animate-target text-nowrap">Give a feedback</span>
                    <i className="ci-chevron-right fs-base ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer bg-dark pb-4" data-bs-theme="dark">

      
      <div className="border-bottom py-5">
        <div className="container py-sm-1 py-md-2 py-lg-3">
          <div className="text-center mx-auto" style={{
        maxWidth: '580px'
      }}>
            <h3 className="pb-1 mb-2">Stay in touch with us</h3>
            <p className="fs-sm text-body">Receive the latest updates about our products &amp; promotions</p>
            <form className="needs-validation position-relative d-flex flex-column flex-sm-row gap-2 pt-3" noValidate>
              <input type="email" className="form-control form-control-lg rounded-pill text-start" placeholder="You email" aria-label="Your email address" required />
              <div className="invalid-tooltip bg-transparent p-0">Please enter you email address!</div>
              <button type="submit" className="btn btn-lg btn-primary rounded-pill">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container py-4 py-md-5">
        <div className="row pt-3 pb-4 py-md-1 py-lg-3">

          
          <div className="col-lg-3 text-center text-lg-start pb-sm-2 pb-md-0 mb-4 mb-md-5 mb-lg-0">
            <h4 className="pb-2 mb-1">
              <a className="text-dark-emphasis text-decoration-none" href="index.html">Cartzilla</a>
            </h4>
            <p className="fs-sm text-body mx-auto" style={{
        maxWidth: '480px'
      }}>With a wide selection of fresh produce, pantry staples, and household essentials, we've got everything you need just a click away.</p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-2 pt-2 pt-md-3">
              <a className="btn btn-icon fs-base btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip" data-bs-template='<div className="tooltip fs-xs mb-n2" role="tooltip"><div className="tooltip-inner bg-transparent text-white p-0"></div></div>' title="Instagram" aria-label="Follow us on Instagram">
                <i className="ci-instagram"></i>
              </a>
              <a className="btn btn-icon fs-base btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip" data-bs-template='<div className="tooltip fs-xs mb-n2" role="tooltip"><div className="tooltip-inner bg-transparent text-white p-0"></div></div>' title="Facebook" aria-label="Follow us on Facebook">
                <i className="ci-facebook"></i>
              </a>
              <a className="btn btn-icon fs-base btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip" data-bs-template='<div className="tooltip fs-xs mb-n2" role="tooltip"><div className="tooltip-inner bg-transparent text-white p-0"></div></div>' title="Telegram" aria-label="Follow us on Telegram">
                <i className="ci-telegram"></i>
              </a>
              <a className="btn btn-icon fs-base btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip" data-bs-template='<div className="tooltip fs-xs mb-n2" role="tooltip"><div className="tooltip-inner bg-transparent text-white p-0"></div></div>' title="WhatsApp" aria-label="Follow us on WhatsApp">
                <i className="ci-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-8 offset-lg-1">
            <div className="accordion" id="footerLinks">
              <div className="row">
                <div className="accordion-item col-sm-3 border-0">
                  <h6 className="accordion-header" id="categoriesHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Categories</span>
                    <button type="button" className="accordion-button collapsed py-3 d-sm-none" data-bs-toggle="collapse" data-bs-target="#categoriesLinks" aria-expanded="false" aria-controls="categoriesLinks">Categories</button>
                  </h6>
                  <div className="accordion-collapse collapse d-sm-block" id="categoriesLinks" aria-labelledby="categoriesHeading" data-bs-parent="#footerLinks">
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Weekly sale</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Special price</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Easter is coming</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Italian dinner</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Fresh fruits</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Exotic fruits</a>
                      </li>
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0" />
                </div>
                <div className="accordion-item col-sm-3 border-0">
                  <h6 className="accordion-header" id="companyHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Company</span>
                    <button type="button" className="accordion-button collapsed py-3 d-sm-none" data-bs-toggle="collapse" data-bs-target="#companyLinks" aria-expanded="false" aria-controls="companyLinks">Company</button>
                  </h6>
                  <div className="accordion-collapse collapse d-sm-block" id="companyLinks" aria-labelledby="companyHeading" data-bs-parent="#footerLinks">
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Blog and news</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">About us</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">FAQ page</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Contact us</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Careers</a>
                      </li>
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0" />
                </div>
                <div className="accordion-item col-sm-3 border-0">
                  <h6 className="accordion-header" id="accountHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Account</span>
                    <button type="button" className="accordion-button collapsed py-3 d-sm-none" data-bs-toggle="collapse" data-bs-target="#accountLinks" aria-expanded="false" aria-controls="accountLinks">Account</button>
                  </h6>
                  <div className="accordion-collapse collapse d-sm-block" id="accountLinks" aria-labelledby="accountHeading" data-bs-parent="#footerLinks">
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Your account</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Shipping &amp; policies</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Refunds &amp; replacements</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Order tracking</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Delivery info</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Taxes &amp; fees</a>
                      </li>
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0" />
                </div>
                <div className="accordion-item col-sm-3 border-0">
                  <h6 className="accordion-header" id="customerHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Customer service</span>
                    <button type="button" className="accordion-button collapsed py-3 d-sm-none" data-bs-toggle="collapse" data-bs-target="#customerLinks" aria-expanded="false" aria-controls="customerLinks">Customer service</button>
                  </h6>
                  <div className="accordion-collapse collapse d-sm-block" id="customerLinks" aria-labelledby="customerHeading" data-bs-parent="#footerLinks">
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Payment methods</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Money back guarantee</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Refunds &amp; replacements</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Order tracking</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Delivery info</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Shipping</a>
                      </li>
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <p className="container fs-xs text-body text-center text-lg-start pb-md-3 mb-0">
        &copy; All rights reserved. Made with <i className="ci-heart-filled align-middle"></i> by <span className="animate-underline"><a className="animate-target text-white text-decoration-none" href="https://createx.studio/" target="_blank" rel="noreferrer">Createx Studio</a></span>
      </p>
    </footer>
    </div>
  );
};

export default Login;