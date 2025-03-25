import axios from "axios";

const BASE_URL = "http://49.207.5.51:7000/cms/api/v1";

export const NavbarServices = {
  //Navbar cart details
  getCartDetails: async (userId: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/order/get-cart-details/${userId}`
      );
      return response.data;
    } catch (error) {
      return null;
    }
  },

  //Navbar dropdown categories
  fetchAllDropdownCategories: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/all-categories`);
      return response.data;
    } catch (error) {
      return null;
    }
  },

  //Products filter based navbar dropdown categories
  fetchProducts: async (categoryId: string, subCategoryId?: string) => {
    try {
      const requestBody: any = { name: "", categoryId };
      if (subCategoryId) {
        requestBody.subCategoryId = subCategoryId;
      }

      const response = await axios.post(
        `${BASE_URL}/product/products-by-filter`,
        requestBody
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch products. Please try again.");
    }
  },

  //below navbar categories

  fetchCategories: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/get-categories`);
      return response.data;
    } catch (error) {
      return null;
    }
  },

  //categories filter for below navbar categories
  getAllCategories: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/all-categories`);
      return response.data;
    } catch (error) {
      throw new Error("Error loading categories.");
    }
  },

  //products filter for below navbar categories
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/get-products`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch products.");
    }
  },

  getProductsByFilter: async (categoryId: string) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/product/products-by-filter`,
        {
          name: "",
          categoryId: categoryId,
          subCategoryId: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch filtered products.");
    }
  },
};
