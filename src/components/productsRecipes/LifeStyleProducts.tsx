import React from "react";

type Category = {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactElement;
};

const categories: Category[] = [
  {
    title: "Gluten-Free",
    description: "Foods that don't contain gluten",

    bgColor: "bg-warning-subtle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
      >
        <path
          d="M62.631 13.369l-7.214 7.214M20.583 55.417l-7.214 7.214M38 51.037c0-11.315-13.926-11.315-13.926-11.315s0 13.926 11.315 13.926H38"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Vegan",
    description: "Vegetable based goodness",

    bgColor: "bg-success-subtle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10">
          <path
            d="M16.842 37.347c5.205 6.789 12.251 18.802 12.251 36.436h17.812c0-17.634 7.066-29.648 12.251-36.436"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Plant based",
    description: "Based on herbal ingredients",

    bgColor: "bg-info-subtle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10">
          <path
            d="M11.1264 58.4427C7.13273 49.8272 -11.3834 1.3653 66.3117 6.74996C67.4008 6.74996 68.49 7.82689 68.8531 8.90382C70.6684 18.9552 74.6621 64.1863 13.6678 59.8786C12.2156 59.8786 11.4895 59.5196 11.1264 58.4427Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Keto",
    description: "Good fats served in food",

    bgColor: "bg-danger-subtle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10">
          <path
            d="M58.59 33.535c-2.219-3.028-3.595-6.515-4.043-10.133-1.227-9.91-7.437-16.42-6.862-15.718-4.878-5.956-14.1-6.035-19.083-.163-4.128 4.863-6.442 10.345-7.191 16.12-.454 3.502-1.759 6.871-3.919 9.785-3.034 4.093-4.824 9.13-4.824 14.577 0 13.7 11.607 24.962 25.584 24.829 13.876-.132 25.083-11.198 25.083-24.829 0-5.399-1.758-10.395-4.744-14.469z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
];

const LifeStyleProducts: React.FC = () => {
  return (
    <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
      <h2 className="h3 text-center pb-1 pb-sm-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5">
        Shop by lifestyle
      </h2>
      <div className="row justify-content-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex flex-column align-items-center text-center"
          >
            <div
              className={`d-flex justify-content-center align-items-center ${category.bgColor} rounded-circle mb-3`}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
              }}
            >
              {category.icon}
            </div>
            <h3 className="h5 mb-2">
              <a className="animate-underline stretched-link">
                <span className="animate-target">{category.title}</span>
              </a>
            </h3>
            <p className="fs-sm mb-0">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeStyleProducts;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const LifeStyleProducts: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [rememberMe, setRememberMe] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");

//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://49.207.5.51:7001/cms/api/v1/order/login",
//         {
//           username: email,
//           password: password,
//         },
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       console.log("Login Response:", response.data);

//       if (response.data.success) {
//         console.log("Login Success:", response.data);
//         // Handle successful login (e.g., store token, redirect)
//       } else {
//         setError(response.data.message || "Invalid email or password");
//       }
//     } catch (err: any) {
//       console.error(
//         "Login Failed:",
//         err.response ? err.response.data : err.message
//       );
//       setError(err.response?.data?.message || "Invalid email or password");
//     }
//   };

//   return (
//     <main
//       className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto"
//       style={{ maxWidth: "1920px" }}
//     >
//       <div className="d-lg-flex">
//         {/* Login form */}
//         <div
//           className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5"
//           style={{ maxWidth: "416px" }}
//         >
//           <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
//             <Link to="/" className="navbar-brand pt-0">
//               <span className="d-flex flex-shrink-0 text-primary me-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36">
//                   <path
//                     d="M36 18.01c0 8.097-5.355 14.949-12.705 17.2a18.12 18.12 0 0 1-5.315.79C9.622 36 2.608 30.313.573 22.611.257 21.407.059 20.162 0 18.879v-1.758c.02-.395.059-.79.099-1.185.099-.908.277-1.817.514-2.686C2.687 5.628 9.682 0 18 0c5.572 0 10.551 2.528 13.871 6.517 1.502 1.797 2.648 3.91 3.359 6.201.494 1.659.771 3.436.771 5.292z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </span>
//               Cartzilla
//             </Link>
//           </header>

//           <h1 className="h2 mt-auto">Welcome back</h1>
//           <div className="nav fs-sm mb-4">
//             Don't have an account?
//             <Link
//               to="/signup"
//               className="nav-link text-decoration-underline p-0 ms-2"
//             >
//               Create an account
//             </Link>
//           </div>

//           {error && <p className="text-danger">{error}</p>}

//           <form className="needs-validation" onSubmit={handleSubmit} noValidate>
//             <div className="position-relative mb-4">
//               <input
//                 type="email"
//                 className="form-control form-control-lg"
//                 placeholder="Email"
//                 required
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 className="form-control form-control-lg"
//                 placeholder="Password"
//                 required
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//             </div>
//             <div className="d-flex align-items-center justify-content-between mb-4">
//               <div className="form-check me-2">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="remember"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//                 <label htmlFor="remember" className="form-check-label">
//                   Remember for 30 days
//                 </label>
//               </div>
//               <Link to="/password-recovery" className="nav-link p-0">
//                 Forgot password?
//               </Link>
//             </div>
//             <button type="submit" className="btn btn-lg btn-primary w-100">
//               Sign In
//             </button>
//           </form>

//           <footer className="mt-auto">
//             <p className="fs-xs mb-0">
//               &copy; All rights reserved. Made by{" "}
//               <a
//                 href="https://createx.studio/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Createx Studio
//               </a>
//             </p>
//           </footer>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default LifeStyleProducts;
