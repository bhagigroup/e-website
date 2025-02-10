import React, { useState, useEffect } from "react";
import { categoryServices } from "../services/categoryServices";

interface Category {
  id: string;
  name: string;
  subcategories: { id: string; name: string }[];
}

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
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (isCategoriesDropdownOpen) {
      const fetchCategories = async () => {
        const data = await categoryServices.fetchAllCategories();
        if (Array.isArray(data)) {
          setCategories(data);
        }
      };

      fetchCategories();
    }
  }, [isCategoriesDropdownOpen]);

  // Split categories into rows of 4
  const chunkedCategories = [];
  for (let i = 0; i < categories.length; i += 4) {
    chunkedCategories.push(categories.slice(i, i + 4));
  }

  return (
    <>
      <div
        className="dropdown d-none d-lg-block w-100 me-4"
        style={{ maxWidth: "200px" }}
      >
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
          <ul
            className="dropdown-menu rounded-4 p-4"
            style={{ display: "block" }}
          >
            {chunkedCategories.map((row, rowIndex) => (
              <div key={rowIndex} className="d-flex gap-4 mb-3">
                {row.map((category) => (
                  <div key={category.id} style={{ minWidth: "170px" }}>
                    <div className="h6">{category.name}</div>

                    <ul className="nav flex-column gap-2 mt-n2">
                      {category.subcategories.length > 0 ? (
                        category.subcategories.map((sub) => (
                          <li key={sub.id} className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0">
                              {sub.name}
                            </a>
                          </li>
                        ))
                      ) : (
                        <li className="text-muted">No subcategories</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavbarCategoryDropdown;
