import React, { useEffect, useState } from "react";
import Loader from "../../../Components/Common/Loader";
import axios from "axios";
import CommonDashboardHeader from "../../../Components/Common/CommonDashboardHeader";
import AddProductCategory from "./AddProductCategory";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategoryData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/product-category/categories`
      );

      if (response.status === 200) {
        setCategories(response.data);
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
    getCategoryData();
  }, []);
  console.log("categories", categories);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 w-[1440px]">
        <>
          {loading ? (
            <div className="col-span-2 bg-white m-3 rounded-md">
              {" "}
              <Loader />
            </div>
          ) : (
            <div className="col-span-2 bg-white m-2 rounded-md">
              <CommonDashboardHeader title="Product Category" />
              <div className="mt-8 rounded-sm  grid grid-cols-2 gap-4">
                {categories?.map((e, i) => {
                  return (
                    <div className="py-1.5 border border-dashed mt-3 px-2">
                      {i + 1}. {e?.name}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>

        <AddProductCategory getCategoryData={getCategoryData} />
      </div>
    </div>
  );
};

export default ProductCategory;
