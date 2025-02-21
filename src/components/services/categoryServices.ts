import axios from "axios";

export const categoryServices: { [key: string]: any } = {};

categoryServices.fetchAllCategories = async () => {
  try {
    const response = await axios.get("http://49.207.5.51:7000/cms/api/v1/product/all-categories");
    return response.data || [];
  } catch (err: any) {
    console.error("Error fetching products:", err);

    //   err.response
    //  exists before accessing err.response.data
    return err?.response?.data ?? {};
  }
};
 
