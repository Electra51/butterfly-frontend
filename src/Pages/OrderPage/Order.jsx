import axios from "axios";
import React, { useEffect, useState } from "react";

const Order = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const getOrderData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        // `${import.meta.env.VITE_API_URL}/product-category/categories`
        `http://localhost:8080/api/v1/order/order-get`
      );
      if (response.status === 200) {
        setAllOrder(response.data?.orders);
      } else {
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);
  console.log("allOrder", allOrder);
  return <div>Order</div>;
};

export default Order;
