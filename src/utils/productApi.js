import axios from "axios";

export const getAllProductData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/product/product-all`
    );

    if (response.status === 200) {
      return response.data; // Return the fetched data
    } else {
      console.error("Failed to fetch products");
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }
};
