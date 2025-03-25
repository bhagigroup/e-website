import React from "react";

const RecipesSection: React.FC = () => {
  return (
    <main>
      <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4">
        <h2 className="h3 mb-4">Recipes</h2>
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="d-flex flex-column gap-1 gap-md-2">
              <div className="position-relative d-flex align-items-start align-items-sm-center mb-4">
                <div
                  className="ratio"
                  // style="--cz-aspect-ratio: calc(140 / 196 * 100%); max-width: 196px"
                  style={
                    {
                      "--cz-aspect-ratio": "calc(140 / 196 * 100%)",
                      maxwidth: "196px",
                    } as React.CSSProperties
                  }
                >
                  <img
                    src="assets/img/home/grocery/recipes/01.jpg"
                    className="rounded"
                    alt="Image"
                  />
                </div>
                <div className="ps-3 ps-xl-4">
                  <h3 className="fs-base fw-medium lh-base mb-2 mb-xl-3">
                    <a
                      className="hover-effect-underline stretched-link"
                      href="#!"
                    >
                      Garden salad with a mix of lettuce, cucumber and tomato
                    </a>
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
                      <i className="ci-food fs-base me-2"></i>4 por
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-relative d-flex align-items-start align-items-sm-center mb-4">
                <div
                  className="ratio"
                  // style="--cz-aspect-ratio: calc(140 / 196 * 100%); max-width: 196px"
                  style={
                    {
                      "--cz-aspect-ratio": "calc(140 / 196 * 100%)",
                      maxwidth: "196px",
                    } as React.CSSProperties
                  }
                >
                  <img
                    src="assets/img/home/grocery/recipes/02.jpg"
                    className="rounded"
                    alt="Image"
                  />
                </div>
                <div className="ps-3 ps-xl-4">
                  <h3 className="fs-base fw-medium lh-base mb-2 mb-xl-3">
                    <a
                      className="hover-effect-underline stretched-link"
                      href="#!"
                    >
                      Raspberry fresh lemonade with lemon, strawberry syrup and
                      mint
                    </a>
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
                      <i className="ci-food fs-base me-2"></i>8 por
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-relative d-flex align-items-start align-items-sm-center mb-4">
                <div
                  className="ratio"
                  // style="--cz-aspect-ratio: calc(140 / 196 * 100%); max-width: 196px"
                  style={
                    {
                      "--cz-aspect-ratio": "calc(140 / 196 * 100%)",
                      maxwidth: "196px",
                    } as React.CSSProperties
                  }
                >
                  <img
                    src="assets/img/home/grocery/recipes/03.jpg"
                    className="rounded"
                    alt="Image"
                  />
                </div>
                <div className="ps-3 ps-xl-4">
                  <h3 className="fs-base fw-medium lh-base mb-2 mb-xl-3">
                    <a
                      className="hover-effect-underline stretched-link"
                      href="#!"
                    >
                      Penne pasta with spinach and zucchini in a creamy sauce
                    </a>
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
                      <i className="ci-food fs-base me-2"></i>2 por
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
                <a
                  className="ratio d-block w-100 mb-4 mb-sm-0"
                  href="#!"
                  // style="--cz-aspect-ratio: calc(404 / 286 * 100%); max-width: 286px"
                  style={
                    {
                      "--cz-aspect-ratio": "calc(140 / 196 * 100%)",
                      maxwidth: "196px",
                    } as React.CSSProperties
                  }
                >
                  <img
                    src="assets/img/home/grocery/recipes/book-cover.jpg"
                    className="rounded-4"
                    alt="Book cover"
                  />
                </a>
                <div className="w-100 ps-sm-4 ms-md-2 ms-lg-0 ms-xl-2 ms-xxl-3">
                  <span className="badge bg-body-secondary text-body-emphasis rounded-pill mb-3">
                    Cookbook
                  </span>
                  <h3 className="h4 mb-2">The Best in Gastronomy</h3>
                  <div className="fs-sm mb-3">
                    Author:{" "}
                    <span className="text-dark-emphasis fw-medium">
                      Dana Chambers
                    </span>
                  </div>
                  <p className="fs-sm pb-1 pb-xl-3">
                    An exquisite cookbook that takes readers on a culinary
                    journey around the world. With stunning photography and
                    detailed instructions ...
                  </p>
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
                <h2 className="h4 mb-4">
                  Make online shop easier with our Cartzilla App
                </h2>
                <div className="d-flex flex-sm-wrap justify-content-center justify-content-sm-start gap-2 gap-sm-3">
                  <a
                    className="btn btn-market btn-lg btn-light rounded-pill flex-shrink-0"
                    href="#!"
                    aria-label="Download on Google Play"
                  >
                    <svg
                      className="flex-shrink-0 ms-n1 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.665 10.561l-3.251-1.878-3.329 3.329 3.328 3.329 3.263-1.884c.509-.309.812-.849.812-1.444s-.304-1.135-.823-1.451z"
                        fill="#ffce00"
                      />
                      <path
                        d="M13.085 12.011L4.018 2.879a1.71 1.71 0 0 0-.507 1.216v15.804a1.71 1.71 0 0 0 .507 1.217l9.067-9.105z"
                        fill="#01daff"
                      />
                      <path
                        d="M13.086 12.011l3.329-3.329.005-.005-4.46-2.568L6.08 2.654c-.529-.327-1.171-.338-1.712-.034a2.54 2.54 0 0 0-.349.259l9.067 9.132z"
                        fill="#00f076"
                      />
                      <path
                        d="M4.019 21.116c.113.101.225.18.349.259.27.146.552.225.834.225.304 0 .597-.09.867-.248l5.891-3.439 4.46-2.568-.005-.005-3.329-3.329-9.067 9.104z"
                        fill="#f63448"
                      />
                    </svg>
                    <svg
                      className="flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="77"
                      height="24"
                      viewBox="0 0 77 24"
                      fill="currentColor"
                    >
                      <path d="M24.575 9.45c-2.184 0-3.914 1.704-3.914 4.071 0 2.272 1.729 4.071 3.914 4.071s3.914-1.704 3.914-4.071c0-2.461-1.729-4.071-3.914-4.071zm0 6.438c-1.183 0-2.184-1.041-2.184-2.462s1.001-2.462 2.184-2.462 2.184.947 2.184 2.462c0 1.42-1.001 2.462-2.184 2.462zM16.11 9.45c-2.184 0-3.914 1.704-3.914 4.071 0 2.272 1.729 4.071 3.914 4.071s3.914-1.704 3.914-4.071c0-2.461-1.729-4.071-3.914-4.071zm0 6.438c-1.183 0-2.184-1.041-2.184-2.462s1.001-2.462 2.184-2.462 2.184.947 2.184 2.462c0 1.42-1.001 2.462-2.184 2.462zM6.007 10.681v1.704h3.914c-.091.947-.455 1.704-.91 2.177-.546.568-1.456 1.231-3.004 1.231-2.457 0-4.278-1.988-4.278-4.544s1.911-4.544 4.278-4.544c1.274 0 2.275.568 3.004 1.231l1.183-1.231C9.193 5.757 7.918 5 6.098 5 2.822 5 0 7.84 0 11.249s2.822 6.249 6.098 6.249c1.82 0 3.095-.568 4.187-1.799 1.092-1.136 1.456-2.745 1.456-3.976 0-.379 0-.757-.091-1.041H6.007zm41.322 1.325c-.364-.947-1.274-2.556-3.277-2.556s-3.641 1.61-3.641 4.071c0 2.272 1.638 4.071 3.823 4.071 1.729 0 2.822-1.136 3.186-1.799l-1.274-.947c-.455.663-1.001 1.136-1.911 1.136s-1.456-.379-1.911-1.231l5.188-2.272-.182-.473zm-5.279 1.326c0-1.515 1.183-2.367 2.002-2.367.637 0 1.274.379 1.456.852l-3.459 1.515zm-4.278 3.882h1.729V5.379h-1.729v11.834zm-2.73-6.911c-.455-.473-1.183-.947-2.093-.947-1.911 0-3.732 1.799-3.732 4.071s1.729 3.976 3.732 3.976c.91 0 1.638-.473 2.002-.947h.091v.568c0 1.515-.819 2.367-2.093 2.367-1.001 0-1.729-.757-1.911-1.42l-1.456.663C30.036 19.675 31.128 21 33.039 21c2.002 0 3.641-1.231 3.641-4.166V9.639h-1.638v.663zm-2.002 5.586c-1.183 0-2.184-1.041-2.184-2.462s1.001-2.462 2.184-2.462 2.093 1.041 2.093 2.462-.91 2.462-2.093 2.462zM55.247 5.379h-4.096v11.834h1.729v-4.45h2.367c1.911 0 3.732-1.42 3.732-3.692s-1.82-3.692-3.732-3.692zm.091 5.681h-2.457V6.988h2.457c1.274 0 2.002 1.136 2.002 1.988-.091 1.041-.819 2.083-2.002 2.083zm10.467-1.704c-1.274 0-2.549.568-3.004 1.799l1.547.663c.364-.663.91-.852 1.547-.852.91 0 1.729.568 1.82 1.515v.095c-.273-.189-1.001-.473-1.729-.473-1.638 0-3.277.947-3.277 2.651 0 1.609 1.365 2.651 2.821 2.651 1.183 0 1.729-.568 2.184-1.136h.091v.947h1.638v-4.544c-.182-2.083-1.729-3.314-3.641-3.314zm-.182 6.533c-.546 0-1.365-.284-1.365-1.041 0-.947 1.001-1.231 1.82-1.231.728 0 1.092.189 1.547.379-.182 1.136-1.092 1.894-2.002 1.894zm9.557-6.249l-1.911 5.112h-.091l-2.002-5.112h-1.82l3.004 7.195-1.729 3.976h1.729L77 9.639h-1.82zm-15.291 7.574h1.729V5.379h-1.729v11.834z" />
                    </svg>
                  </a>
                  <a
                    className="btn btn-market btn-lg btn-light rounded-pill flex-shrink-0"
                    href="#!"
                    aria-label="Download on App Store"
                  >
                    <i className="ci-apple lead ms-n1 me-2"></i>
                    <svg
                      className="flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="77"
                      height="24"
                      viewBox="0 0 77 24"
                      fill="currentColor"
                    >
                      <path d="M40.713 15.797c.701-.624 1.055-1.431 1.055-2.427 0-.806-.242-1.486-.733-2.032-.483-.546-1.232-1.02-2.255-1.423-.838-.324-1.418-.625-1.732-.901a1.41 1.41 0 0 1-.548-1.138 1.39 1.39 0 0 1 .475-1.059c.379-.316.91-.482 1.579-.482.854 0 1.611.182 2.288.538l.483-1.518c-.717-.372-1.619-.553-2.699-.553-1.216 0-2.191.308-2.924.917a2.94 2.94 0 0 0-1.103 2.356c0 1.463 1.039 2.577 3.142 3.344.765.277 1.313.577 1.643.901a1.63 1.63 0 0 1 .491 1.194c0 .53-.201.957-.604 1.273-.395.316-.959.474-1.675.474-.999 0-1.917-.245-2.755-.727l-.443 1.557c.773.482 1.796.727 3.077.727 1.386 0 2.465-.34 3.238-1.02zm-31.706.846h2.03L7.195 4.966H4.826L1 16.644h1.974l1.055-3.431h3.867l1.112 3.431zM6.558 8.729l1.007 3.044H4.367l.991-3.044.564-2.198h.04l.596 2.198zm13.122 6.997c.797-.83 1.192-1.961 1.192-3.392 0-1.289-.338-2.316-1.031-3.107-.677-.783-1.514-1.178-2.529-1.178-1.289 0-2.255.506-2.892 1.51h-.032l-.105-1.336h-1.675l.072 2.767v9.068h1.909v-4.42c.499.798 1.313 1.194 2.449 1.194 1.047 0 1.933-.364 2.642-1.107zm-1.313-5.353c.379.53.564 1.202.564 2.024 0 .893-.201 1.605-.604 2.15-.403.538-.959.814-1.675.814-.612 0-1.112-.213-1.49-.633s-.572-.941-.572-1.55v-1.407c0-.15.032-.34.089-.569a2.11 2.11 0 0 1 .749-1.202c.387-.3.814-.459 1.281-.459a1.96 1.96 0 0 1 1.659.83zm12.366 1.961c0 1.431-.395 2.562-1.192 3.392-.709.743-1.595 1.107-2.642 1.107-1.136 0-1.949-.395-2.449-1.194v4.42H22.54v-9.068l-.072-2.767h1.675l.105 1.336h.032c.636-1.004 1.603-1.51 2.892-1.51 1.015 0 1.853.395 2.529 1.178.693.791 1.031 1.818 1.031 3.107zm-1.941.063c0-.822-.185-1.494-.564-2.024a1.96 1.96 0 0 0-1.659-.83c-.467 0-.894.158-1.281.459-.379.308-.628.704-.749 1.202-.056.229-.089.419-.089.569v1.407c0 .609.193 1.131.572 1.55s.878.633 1.49.633c.717 0 1.281-.277 1.676-.814.411-.546.604-1.257.604-2.15zM48.083 9.63h-2.102v4.087c0 1.036.37 1.557 1.112 1.557.338 0 .62-.032.846-.087l.056 1.423c-.379.134-.87.206-1.482.206-.757 0-1.337-.229-1.764-.68s-.636-1.21-.636-2.269V9.623h-1.248V8.223h1.249V6.681l1.869-.553v2.095h2.102V9.63zm8.329 5.922c.749-.83 1.128-1.89 1.128-3.186 0-1.257-.362-2.285-1.096-3.075-.765-.822-1.78-1.233-3.037-1.233-1.305 0-2.344.419-3.117 1.249-.765.83-1.152 1.897-1.152 3.202 0 1.249.37 2.285 1.12 3.099s1.756 1.225 3.013 1.225c1.305 0 2.352-.427 3.142-1.281zm-1.353-5.131c.338.553.508 1.21.508 1.984s-.177 1.439-.524 2.008c-.419.68-.991 1.02-1.716 1.02-.741 0-1.321-.332-1.732-1.004-.338-.546-.508-1.21-.508-1.984 0-.799.161-1.471.508-2.024.395-.672.983-1.004 1.748-1.004.741 0 1.313.332 1.716 1.004zm8.683-.553c-.185-.032-.387-.047-.604-.047-.669 0-1.192.245-1.555.743-.314.435-.475.996-.475 1.66v4.419h-1.909v-5.771l-.056-2.649h1.659l.072 1.613h.056c.201-.553.516-1.004.951-1.336.427-.3.886-.451 1.377-.451a4.09 4.09 0 0 1 .475.032l.008 1.787zm8.451 3.012c.048-.229.072-.514.072-.846 0-1.051-.258-1.929-.765-2.656-.628-.901-1.571-1.352-2.803-1.352-1.257 0-2.255.451-2.997 1.352-.709.846-1.063 1.905-1.063 3.17 0 1.289.379 2.324 1.136 3.091s1.804 1.154 3.133 1.154c1.104 0 2.062-.174 2.876-.522l-.298-1.297c-.693.261-1.466.395-2.312.395-.765 0-1.386-.198-1.869-.585-.532-.435-.806-1.075-.83-1.905h5.719zm-2.119-2.767c.258.403.387.886.371 1.439l-3.963-.008c.056-.561.25-1.051.564-1.455a1.82 1.82 0 0 1 1.514-.759c.677 0 1.184.261 1.514.783z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className="ratio align-self-sm-end order-sm-1 rtl-flip"
                style={
                  {
                    "--cz-aspect-ratio": "calc(284 / 330 * 100%)",
                    maxwidth: "196px",
                  } as React.CSSProperties
                }
              >
                <img src="assets/img/home/grocery/banner01.png" alt="Image" />
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="d-flex align-items-center h-100 bg-body-tertiary rounded-5 overflow-hidden">
              <div
                className="ratio align-self-end rtl-flip"
                style={
                  {
                    "--cz-aspect-ratio": "calc(284 / 330 * 100%)",
                    maxwidth: "196px",
                  } as React.CSSProperties
                }
              >
                <img src="assets/img/home/grocery/banner02.png" alt="Image" />
              </div>
              <div className="p-4">
                <h2 className="h4 mb-sm-4">
                  We'd love to hear what you think!
                </h2>
                <div className="nav mt-n2 mt-sm-n1 mt-lg-0">
                  <a className="nav-link animate-underline px-0 py-2" href="#!">
                    <span className="animate-target text-nowrap">
                      Give a feedback
                    </span>
                    <i className="ci-chevron-right fs-base ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecipesSection;
