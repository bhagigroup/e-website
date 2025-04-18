import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarServices } from "../services/navbarServices";
import NavbarCategoryDropdown from "./navbarDropdown/NavbarCategoryDropdown";
import CategoriesList from "./CategoriesList";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const [isThemeDropdownOpen, setIsThemeDropdownOpen] =
    useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
    useState<boolean>(false);

  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const userId = "674b61875b09ec4b3c05bd68";

  // Handle cart click
  const handleCartClick = async () => {
    const cartData = await NavbarServices.getCartDetails(userId);
    navigate("/cart", { state: { cartData } });
  };

  // Handle cart click
  const handleProfileClick = async () => {
    navigate("/account-orders");
  };
  // Close theme dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsThemeDropdownOpen(false);
      }
    };

    if (isThemeDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isThemeDropdownOpen]);

  // Toggle theme dropdown visibility
  const handleThemeDropdownToggle = (): void => {
    setIsCategoriesDropdownOpen(false);
    setIsThemeDropdownOpen((prevState) => !prevState);
  };

  // Change theme and apply it to body
  const handleThemeChange = (newTheme: "light" | "dark"): void => {
    setTheme(newTheme);
    document.body.setAttribute("data-bs-theme", newTheme);
    setIsThemeDropdownOpen(false);
  };

  // Close categories dropdown
  const closeCategoriesDropdown = (): void => {
    setIsCategoriesDropdownOpen(false);
  };

  // Toggle categories dropdown visibility
  const handleCategoriesDropdownToggle = (): void => {
    setIsThemeDropdownOpen(false);
    setIsCategoriesDropdownOpen((prevState) => !prevState);
  };

  return (
    <>
      <header
        className="navbar navbar-expand navbar-sticky sticky-top 
      bg-body z-fixed   shadow"
        style={{ zIndex: 1050, top: 0 }}
      >
        <div className="container justify-content-start py-2">
          {/* Categories Dropdown */}
          <button
            type="button"
            className="navbar-toggler d-block flex-shrink-0 me-3 me-sm-4"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand fs-2 p-0 me-4" href="/">
            Cartzilla
          </a>
          <NavbarCategoryDropdown
            closeDropdown={closeCategoriesDropdown}
            isCategoriesDropdownOpen={isCategoriesDropdownOpen}
            handleCategoriesDropdownToggle={handleCategoriesDropdownToggle}
          />

          <div className="position-relative w-100 d-none d-md-block me-3 me-xl-4">
            <input
              type="search"
              className="form-control form-control-lg rounded-pill pe-5"
              placeholder="Search for products"
              aria-label="Search"
            />
            <button
              type="button"
              className="btn btn-icon btn-ghost fs-lg btn-secondary text-body border-0 position-absolute top-50 end-0 translate-middle-y me-2"
              aria-label="Search button"
            >
              <i className="ci-search"></i>
            </button>
          </div>
          {/* Delivery section */}
          <div className="nav me-4 me-xxl-5 d-none d-xl-block">
            <a
              className="nav-link flex-column align-items-start animate-underline p-0"
              href="#deliveryOptions"
              data-bs-toggle="offcanvas"
              aria-controls="deliveryOptions"
            >
              <div className="h6 fs-sm mb-0">Delivery</div>
              <div className="d-flex align-items-center fs-sm fw-normal text-body">
                <span className="animate-target text-nowrap">
                  Set your address
                </span>
                <i className="ci-chevron-down fs-base ms-1"></i>
              </div>
            </a>
          </div>

          {/* Theme switcher */}
          <div className="dropdown" ref={themeDropdownRef}>
            <button
              type="button"
              className="theme-switcher btn btn-icon btn-outline-secondary fs-lg border-0 rounded-circle animate-scale"
              onClick={handleThemeDropdownToggle}
            >
              <span className="theme-icon-active d-flex animate-target">
                <i className="ci-sun"></i>
              </span>
            </button>

            {/* Theme dropdown menu */}
            {isThemeDropdownOpen && (
              <ul
                className="dropdown-menu"
                style={
                  {
                    "--cz-dropdown-min-width": "9rem",
                    display: "block",
                  } as React.CSSProperties
                }
              >
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => handleThemeChange("light")}
                    aria-pressed={theme === "light"}
                  >
                    <span className="theme-icon d-flex fs-lg">
                      <i className="ci-sun"></i>
                    </span>
                    <span className="ms-3">Light</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => handleThemeChange("dark")}
                    aria-pressed={theme === "dark"}
                  >
                    <span className="theme-icon d-flex fs-lg">
                      <i className="ci-moon"></i>
                    </span>
                    <span className="ms-3">Dark</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    data-bs-theme-value="auto"
                    aria-pressed="false"
                  >
                    <span className="theme-icon d-flex fs-base me-2">
                      <i className="ci-auto"></i>
                    </span>
                    <span className="theme-label">Auto</span>
                    <i className="item-active-indicator ci-check ms-auto"></i>
                  </button>
                </li>
              </ul>
            )}
          </div>

          <div className="d-flex align-items-center gap-md-1 gap-lg-2 ms-auto">
            <a
              className="btn btn-icon fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
              onClick={handleProfileClick}
            >
              <i className="ci-user animate-target"></i>
              <span className="visually-hidden">Account</span>
            </a>

            <button
              type="button"
              className="btn btn-icon fs-xl
               btn-outline-secondary position-relative border-0 rounded-circle animate-scale"
              data-bs-toggle="offcanvas"
              data-bs-target="#shoppingCart"
              aria-controls="shoppingCart"
              aria-label="Shopping cart"
              onClick={handleCartClick}
            >
              <i className="ci-shopping-cart animate-target"></i>
            </button>
          </div>
        </div>
      </header>
      <CategoriesList />
    </>
  );
};

export default Navbar;
