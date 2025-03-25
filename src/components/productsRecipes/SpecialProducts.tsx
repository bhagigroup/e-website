// import React from "react";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";  // Updated import

// import "swiper/css/pagination";

// const SpecialProducts: React.FC = () => {
//   return (
//     <section className="container pt-xl-2 pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
//       <div className="row">
//         {/* Banner */}
//         <div className="col-sm-5 col-md-4 col-lg-3 mb-5 mb-sm-0">
//           <div className="pe-lg-2 pe-xl-4">
//             <div
//               className="rounded-4 overflow-hidden"
//               style={{ backgroundColor: "#a6cddc" }}
//               data-bs-theme="light"
//             >
//               <div className="pt-3 px-3 mt-3 mx-3">
//                 <h4 className="mb-2 mb-xl-3">
//                   Make breakfast healthy and easy
//                 </h4>
//                 <div className="nav">
//                   <a
//                     className="nav-link animate-underline stretched-link px-0"
//                     href="#!"
//                   >
//                     <span className="animate-target">Shop now</span>
//                     <i className="ci-chevron-right fs-base mt-1 ms-1"></i>
//                   </a>
//                 </div>
//               </div>
//               <div
//                 className="ratio mt-n2"
//                 style={{ paddingBottom: "calc(240 / 282 * 100%)" }}
//               >
//                 <img
//                   src="assets/img/shop/grocery/banner.jpg"
//                   alt="Banner"
//                   className="w-100"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Special products carousel */}
//         <div className="col-sm-7 col-md-8 col-lg-9">
//           <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4 mb-3 mb-lg-4">
//             <h2 className="h3 mb-0">Special products</h2>
//             <div className="nav ms-3">
//               <a
//                 className="nav-link animate-underline px-0 py-2"
//                 href="shop-catalog-grocery.html"
//               >
//                 <span className="animate-target text-nowrap">View all</span>
//                 <i className="ci-chevron-right fs-base ms-1"></i>
//               </a>
//             </div>
//           </div>
//           <Swiper
//             slidesPerView={2}
//             spaceBetween={24}
//             pagination={{ clickable: true }}
//             breakpoints={{
//               840: {
//                 slidesPerView: 3,
//               },
//               992: {
//                 slidesPerView: 4,
//               },
//             }}
//             modules={[Pagination]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="card product-card h-100 bg-transparent border-0 shadow-none">
//                 <div className="position-relative z-2">
//                   <button
//                     type="button"
//                     className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
//                     aria-label="Add to Wishlist"
//                   >
//                     <i className="ci-heart animate-target"></i>
//                   </button>
//                   <a
//                     className="d-block p-2 p-lg-3"
//                     href="shop-product-grocery.html"
//                   >
//                     <div
//                       className="ratio"
//                       style={
//                         {
//                           "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
//                         } as React.CSSProperties
//                       }
//                     >
//                       <img
//                         src="assets/img/shop/grocery/09.png"
//                         alt="Pure virgin olive oil Basso"
//                       />
//                     </div>
//                   </a>
//                   <div className="position-absolute w-100 start-0 bottom-0">
//                     <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
//                       <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
//                         <button
//                           type="button"
//                           className="btn btn-icon btn-sm btn-primary"
//                           data-decrement
//                           aria-label="Decrement quantity"
//                         >
//                           <i className="ci-minus fs-sm"></i>
//                         </button>
//                         <input
//                           type="number"
//                           className="form-control form-control-sm bg-primary text-white w-100"
//                           value="0"
//                           min="0"
//                           readOnly
//                         />
//                         <button
//                           type="button"
//                           className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
//                           data-increment
//                           aria-label="Increment quantity"
//                         >
//                           <span data-count-input-value></span>
//                           <i className="ci-plus fs-sm"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
//                   <div className="h6 mb-2">$18.60</div>
//                   <h3 className="fs-sm lh-base mb-0">
//                     <a
//                       className="hover-effect-underline fw-normal"
//                       href="shop-product-grocery.html"
//                     >
//                       Pure virgin olive oil Basso
//                     </a>
//                   </h3>
//                 </div>
//                 <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
//                   1000ml
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="card product-card h-100 bg-transparent border-0 shadow-none">
//                 <div className="position-relative z-2">
//                   <button
//                     type="button"
//                     className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
//                     aria-label="Add to Wishlist"
//                   >
//                     <i className="ci-heart animate-target"></i>
//                   </button>
//                   <a
//                     className="d-block p-2 p-lg-3"
//                     href="shop-product-grocery.html"
//                   >
//                     <div
//                       className="ratio"
//                       style={
//                         {
//                           "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
//                         } as React.CSSProperties
//                       }
//                     >
//                       <img
//                         src="assets/img/shop/grocery/10.png"
//                         alt="Fresh pork butt steaks with rosemary"
//                       />
//                     </div>
//                   </a>
//                   <div className="position-absolute w-100 start-0 bottom-0">
//                     <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
//                       <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
//                         <button
//                           type="button"
//                           className="btn btn-icon btn-sm btn-primary"
//                           data-decrement
//                           aria-label="Decrement quantity"
//                         >
//                           <i className="ci-minus fs-sm"></i>
//                         </button>
//                         <input
//                           type="number"
//                           className="form-control form-control-sm bg-primary text-white w-100"
//                           value="0"
//                           min="0"
//                           readOnly
//                         />
//                         <button
//                           type="button"
//                           className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
//                           data-increment
//                           aria-label="Increment quantity"
//                         >
//                           <span data-count-input-value></span>
//                           <i className="ci-plus fs-sm"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
//                   <div className="h6 mb-2">$9.15</div>
//                   <h3 className="fs-sm lh-base mb-0">
//                     <a
//                       className="hover-effect-underline fw-normal"
//                       href="shop-product-grocery.html"
//                     >
//                       Fresh pork butt steaks with rosemary
//                     </a>
//                   </h3>
//                 </div>
//                 <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
//                   500g
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="card product-card h-100 bg-transparent border-0 shadow-none">
//                 <div className="position-relative z-2">
//                   <button
//                     type="button"
//                     className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
//                     aria-label="Add to Wishlist"
//                   >
//                     <i className="ci-heart animate-target"></i>
//                   </button>
//                   <a
//                     className="d-block p-2 p-lg-3"
//                     href="shop-product-grocery.html"
//                   >
//                     <div
//                       className="ratio"
//                       style={
//                         {
//                           "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
//                         } as React.CSSProperties
//                       }
//                     >
//                       <img
//                         src="assets/img/shop/grocery/11.png"
//                         alt="Fresh red grapefruit"
//                       />
//                     </div>
//                   </a>
//                   <div className="position-absolute w-100 start-0 bottom-0">
//                     <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
//                       <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
//                         <button
//                           type="button"
//                           className="btn btn-icon btn-sm btn-primary"
//                           data-decrement
//                           aria-label="Decrement quantity"
//                         >
//                           <i className="ci-minus fs-sm"></i>
//                         </button>
//                         <input
//                           type="number"
//                           className="form-control form-control-sm bg-primary text-white w-100"
//                           value="0"
//                           min="0"
//                           readOnly
//                         />
//                         <button
//                           type="button"
//                           className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
//                           data-increment
//                           aria-label="Increment quantity"
//                         >
//                           <span data-count-input-value></span>
//                           <i className="ci-plus fs-sm"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
//                   <div className="h6 mb-2">$3.40</div>
//                   <h3 className="fs-sm lh-base mb-0">
//                     <a
//                       className="hover-effect-underline fw-normal"
//                       href="shop-product-grocery.html"
//                     >
//                       Fresh red grapefruit
//                     </a>
//                   </h3>
//                 </div>
//                 <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
//                   1kg
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="card product-card h-100 bg-transparent border-0 shadow-none">
//                 <div className="position-relative z-2">
//                   <button
//                     type="button"
//                     className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
//                     aria-label="Add to Wishlist"
//                   >
//                     <i className="ci-heart animate-target"></i>
//                   </button>
//                   <a
//                     className="d-block p-2 p-lg-3"
//                     href="shop-product-grocery.html"
//                   >
//                     <div
//                       className="ratio"
//                       style={
//                         {
//                           "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
//                         } as React.CSSProperties
//                       }
//                     >
//                       <img
//                         src="assets/img/shop/grocery/12.png"
//                         alt="Soft creme cheese with greens Exquisa"
//                       />
//                     </div>
//                   </a>
//                   <div className="position-absolute w-100 start-0 bottom-0">
//                     <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
//                       <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
//                         <button
//                           type="button"
//                           className="btn btn-icon btn-sm btn-primary"
//                           data-decrement
//                           aria-label="Decrement quantity"
//                         >
//                           <i className="ci-minus fs-sm"></i>
//                         </button>
//                         <input
//                           type="number"
//                           className="form-control form-control-sm bg-primary text-white w-100"
//                           value="0"
//                           min="0"
//                           readOnly
//                         />
//                         <button
//                           type="button"
//                           className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
//                           data-increment
//                           aria-label="Increment quantity"
//                         >
//                           <span data-count-input-value></span>
//                           <i className="ci-plus fs-sm"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
//                   <div className="h6 mb-2">$2.59</div>
//                   <h3 className="fs-sm lh-base mb-0">
//                     <a
//                       className="hover-effect-underline fw-normal"
//                       href="shop-product-grocery.html"
//                     >
//                       Soft creme cheese with greens Exquisa
//                     </a>
//                   </h3>
//                 </div>
//                 <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
//                   150g
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecialProducts;
