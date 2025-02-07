import React from 'react';

interface NavbarCategoryDropdownProps {
  closeDropdown: () => void;
  isCategoriesDropdownOpen: boolean;
  handleCategoriesDropdownToggle: () => void;
}

const NavbarCategoryDropdown: React.FC<NavbarCategoryDropdownProps> = ({
  closeDropdown,
  isCategoriesDropdownOpen,
  handleCategoriesDropdownToggle,
}) => {
  return (
    <div className="dropdown d-none d-lg-block w-100 me-4" style={{ maxWidth: '200px' }}>
      <button
        type="button"
        className="btn btn-lg btn-secondary w-100 border-0 rounded-pill"
        onClick={handleCategoriesDropdownToggle}
      >
        <i className="ci-grid fs-lg me-2 ms-n1"></i>
        Categories
        <i className="ci-chevron-down fs-lg me-2 ms-auto me-n1"></i>
      </button>

      {isCategoriesDropdownOpen && (
        <ul className="dropdown-menu rounded-4 p-4" style={{ display: 'block' }}>
          <div className="d-flex gap-4">
            <div style={{ minWidth: '170px' }}>
              <div className="h6">Bakery &amp; bread</div>
              <ul className="nav flex-column gap-2 mt-n2">
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Shop all
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Bread
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Pastries
                  </a>
                </li>
              </ul>
              <div className="h6 pt-4">Meat products</div>
              <ul className="nav flex-column gap-2 mt-n2">
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Poultry products
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Prepared meat
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ minWidth: '170px' }}>
              <div className="h6">Vegetables</div>
              <ul className="nav flex-column gap-2 mt-n2">
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Seasonal squashes
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Beans, peas &amp; lentils
                  </a>
                </li>
              </ul>
              <div className="h6 pt-4">Sauces and ketchup</div>
              <ul className="nav flex-column gap-2 mt-n2">
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Shop all
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Tomato-based sauces
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ minWidth: '170px' }}>
              <div className="h6">Fresh fruits</div>
              <ul className="nav flex-column gap-2 mt-n2">
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Stone fruits
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Exotic fruits
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Melons
                  </a>
                </li>
              </ul>
              <div className="h6 pt-4">Italian dinner</div>
              <ul className="nav flex-column gap-2 mt-n2">
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Italian meats
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Desserts &amp; beverages
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ minWidth: '170px' }}>
              <div className="h6">Beverages</div>
              <ul className="nav flex-column gap-2 mt-n2">
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Sports &amp; energy drinks
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Tea and coffee
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Alcoholic beverages
                  </a>
                </li>
              </ul>
              <div className="h6 pt-4">Dairy &amp; eggs</div>
              <ul className="nav flex-column gap-2 mt-n2">
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Shop all
                  </a>
                </li>
                <li className="d-flex w-100 pt-1">
                  <a
                    className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                    href="shop-catalog-grocery.html"
                  >
                    Cheese
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavbarCategoryDropdown;
