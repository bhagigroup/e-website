import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark pb-4" data-bs-theme="dark">
      <div className="border-bottom py-5">
        <div className="container py-sm-1 py-md-2 py-lg-3">
          <div className="text-center mx-auto" style={{ maxWidth: "580px" }}>
            <h3 className="pb-1 mb-2">Stay in touch with us</h3>
            <p className="fs-sm text-body">
              Receive the latest updates about our products &amp; promotions
            </p>
            <form className="needs-validation position-relative d-flex flex-column flex-sm-row gap-2 pt-3">
              <input
                type="email"
                className="form-control form-control-lg rounded-pill text-start"
                placeholder="Your email"
                aria-label="Your email address"
                required
              />
              <div className="invalid-tooltip bg-transparent p-0">
                Please enter your email address!
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary rounded-pill"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container py-4 py-md-5">
        <div className="row pt-3 pb-4 py-md-1 py-lg-3 align-items-start ">
          {/* Left Side: Logo & Social Media */}
          <div className="col-lg-3 text-center text-lg-start pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <h4 className="pb-2 mb-1">
              <a
                className="text-dark-emphasis text-decoration-none"
                href="index.html"
              >
                Cartzilla
              </a>
            </h4>
            <p
              className="fs-sm text-body mx-auto"
              style={{ maxWidth: "480px" }}
            >
              With a wide selection of fresh produce, pantry staples, and
              household essentials, we've got everything you need just a click
              away.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-2 pt-2 pt-md-3">
              <a
                className="btn btn-icon fs-base btn-outline-secondary border-0"
                href="#!"
                title="Instagram"
              >
                <i className="ci-instagram"></i>
              </a>
              <a
                className="btn btn-icon fs-base btn-outline-secondary border-0"
                href="#!"
                title="Facebook"
              >
                <i className="ci-facebook"></i>
              </a>
              <a
                className="btn btn-icon fs-base btn-outline-secondary border-0"
                href="#!"
                title="Telegram"
              >
                <i className="ci-telegram"></i>
              </a>
              <a
                className="btn btn-icon fs-base btn-outline-secondary border-0"
                href="#!"
                title="WhatsApp"
              >
                <i className="ci-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Right Side: Footer Links */}
          <div className="col-lg-8 ">
            <div className="accordion" id="footerLinks">
              <div className="row">
                {/* Categories */}
                <div className="accordion-item col-sm-3 border-0">
                  <h6 className="accordion-header">
                    <span className="text-dark-emphasis d-none d-sm-block">
                      Categories
                    </span>
                    <button
                      className="accordion-button collapsed py-3 d-sm-none"
                      data-bs-toggle="collapse"
                      data-bs-target="#categoriesLinks"
                    >
                      Categories
                    </button>
                  </h6>
                  <div
                    className="accordion-collapse collapse d-sm-block"
                    id="categoriesLinks"
                  >
                    <ul className="nav flex-column gap-2 pt-sm-3">
                      <li>
                        <a className="nav-link text-truncate p-0" href="#!">
                          Weekly sale
                        </a>
                      </li>
                      <li>
                        <a className="nav-link text-truncate p-0" href="#!">
                          Special price
                        </a>
                      </li>
                      <li>
                        <a className="nav-link text-truncate p-0" href="#!">
                          Easter is coming
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Company */}
                <div className="accordion-item col-sm-3 border-0">
                  <h6 className="accordion-header">
                    <span className="text-dark-emphasis d-none d-sm-block">
                      Company
                    </span>
                    <button
                      className="accordion-button collapsed py-3 d-sm-none"
                      data-bs-toggle="collapse"
                      data-bs-target="#companyLinks"
                    >
                      Company
                    </button>
                  </h6>
                  <div
                    className="accordion-collapse collapse d-sm-block"
                    id="companyLinks"
                  >
                    <ul className="nav flex-column gap-2 pt-sm-3">
                      <li>
                        <a className="nav-link text-truncate p-0" href="#!">
                          Blog and news
                        </a>
                      </li>
                      <li>
                        <a className="nav-link text-truncate p-0" href="#!">
                          About us
                        </a>
                      </li>
                      <li>
                        <a className="nav-link text-truncate p-0" href="#!">
                          FAQ page
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Account */}
                <div className="accordion-item col-sm-3 border-0">
                  <h6 className="accordion-header">
                    <span className="text-dark-emphasis d-none d-sm-block">
                      Account
                    </span>
                    <button
                      className="accordion-button collapsed py-3 d-sm-none"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountLinks"
                    >
                      Account
                    </button>
                  </h6>
                  <div
                    className="accordion-collapse collapse d-sm-block"
                    id="accountLinks"
                  >
                    <ul className="nav flex-column gap-2 pt-sm-3">
                      <li>
                        <a className="nav-link text-truncate p-0" href="#!">
                          Your account
                        </a>
                      </li>
                      <li>
                        <a className="nav-link text-truncate p-0" href="#!">
                          Order tracking
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Customer Service */}
                <div className="accordion-item col-sm-3 border-0">
                  <h6 className="accordion-header">
                    <span className="text-dark-emphasis d-none d-sm-block">
                      Customer Service
                    </span>
                    <button
                      className="accordion-button collapsed py-3 d-sm-none"
                      data-bs-toggle="collapse"
                      data-bs-target="#customerLinks"
                    >
                      Customer Service
                    </button>
                  </h6>
                  <div
                    className="accordion-collapse collapse d-sm-block"
                    id="customerLinks"
                  >
                    <ul className="nav flex-column gap-2 pt-sm-3">
                      <li>
                        <a className="nav-link text-truncate p-0" href="#!">
                          Payment methods
                        </a>
                      </li>
                      <li>
                        <a className="nav-link text-truncate p-0" href="#!">
                          Money-back guarantee
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="container fs-xs text-body text-center text-lg-start pb-md-3 mb-0">
        &copy; All rights reserved. Made with{" "}
        <i className="ci-heart-filled align-middle"></i> by{" "}
        <a
          className="text-white text-decoration-none"
          href="https://createx.studio/"
          target="_blank"
          rel="noreferrer"
        >
          Createx Studio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
