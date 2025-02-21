// import React from "react";

// const RecipesSection: React.FC = () => {
//   return (
//     <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4">
//       <h2 className="h3 mb-4">Recipes</h2>
//       <div className="row">
//         {/* Recipes list */}
//         <div className="col-lg-5 mb-4 mb-lg-0">
//           <div className="d-flex flex-column gap-1 gap-md-2">
//             {/* Recipe Items */}
//             {recipes.map((recipe, index) => (
//               <div
//                 key={index}
//                 className="position-relative d-flex align-items-start align-items-sm-center mb-4"
//               >
//                 <div
//                   className="ratio"
//                   style={{ maxWidth: "196px", aspectRatio: "140/196" }}
//                 >
//                   <img src={recipe.image} className="rounded" alt="Recipe" />
//                 </div>
//                 <div className="ps-3 ps-xl-4">
//                   <h3 className="fs-base fw-medium lh-base mb-2 mb-xl-3">
//                     <a
//                       className="hover-effect-underline stretched-link"
//                       href="#"
//                     >
//                       {recipe.title}
//                     </a>
//                   </h3>
//                   <div className="d-flex gap-3 gap-xl-4 fs-sm text-body-secondary">
//                     <div className="d-flex align-items-center text-nowrap">
//                       <i className="ci-clock fs-base me-2"></i>
//                       {recipe.time}
//                     </div>
//                     <div className="d-flex align-items-center text-nowrap">
//                       <i className="ci-zap fs-base me-2"></i>
//                       {recipe.difficulty}
//                     </div>
//                     <div className="d-flex align-items-center text-nowrap">
//                       <i className="ci-food fs-base me-2"></i>
//                       {recipe.servings} por
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="nav mt-n2 mt-lg-n1 mt-xxl-0">
//             <a className="nav-link animate-underline px-0 py-2" href="#">
//               <span className="animate-target text-nowrap">View all</span>
//               <i className="ci-chevron-right fs-base ms-1"></i>
//             </a>
//           </div>
//         </div>
//         {/* Book */}
//         <div className="col-lg-7">
//           <div className="border rounded-5 p-4">
//             <div className="d-sm-flex align-items-start align-items-md-center align-items-lg-start align-items-xl-center p-md-2 p-lg-0 p-xl-2 p-xxl-3">
//               <a
//                 className="ratio d-block w-100 mb-4 mb-sm-0"
//                 href="#"
//                 style={{ maxWidth: "286px", aspectRatio: "404/286" }}
//               >
//                 <img
//                   src="assets/img/home/grocery/recipes/book-cover.jpg"
//                   className="rounded-4"
//                   alt="Book cover"
//                 />
//               </a>
//               <div className="w-100 ps-sm-4 ms-md-2 ms-lg-0 ms-xl-2 ms-xxl-3">
//                 <span className="badge bg-body-secondary text-body-emphasis rounded-pill mb-3">
//                   Cookbook
//                 </span>
//                 <h3 className="h4 mb-2">The Best in Gastronomy</h3>
//                 <div className="fs-sm mb-3">
//                   Author:{" "}
//                   <span className="text-dark-emphasis fw-medium">
//                     Dana Chambers
//                   </span>
//                 </div>
//                 <p className="fs-sm pb-1 pb-xl-3">
//                   An exquisite cookbook that takes readers on a culinary journey
//                   around the world. With stunning photography and detailed
//                   instructions ...
//                 </p>
//                 <div className="h4">$12.40</div>
//                 <a className="btn btn-dark rounded-pill" href="#">
//                   Shop book
//                   <i className="ci-chevron-right fs-base ms-1 me-n1"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const recipes = [
//   {
//     image: "assets/img/home/grocery/recipes/01.jpg",
//     title: "Garden salad with a mix of lettuce, cucumber and tomato",
//     time: "30 min",
//     difficulty: "Easy",
//     servings: 4,
//   },
//   {
//     image: "assets/img/home/grocery/recipes/02.jpg",
//     title: "Raspberry fresh lemonade with lemon, strawberry syrup and mint",
//     time: "50 min",
//     difficulty: "Hard",
//     servings: 8,
//   },
//   {
//     image: "assets/img/home/grocery/recipes/03.jpg",
//     title: "Penne pasta with spinach and zucchini in a creamy sauce",
//     time: "25 min",
//     difficulty: "Easy",
//     servings: 2,
//   },
// ];

// export default RecipesSection;
