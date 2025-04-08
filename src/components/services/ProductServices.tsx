import axios from "axios";

const BASE_URL = "http://49.207.5.51:7000/cms/api/v1";

export const ProductServices = {
  //get Categoty details home page

  getProductCategories: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/get-categories`);
      return response.data;
    } catch (error) {
      return null;
    }
  },

  //get products details home page
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/all-products`);
      return response.data;
    } catch (error) {
      return null;
    }
  },

  //get banner details home page
  getBanners: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/get-banners`);
      return response.data;
    } catch (error) {
      console.error("Error fetching banners:", error);

      return null;
    }
  },
};
