import React, { useEffect, useState } from "react";
import Loader from "../../../Components/Common/Loader";
import AddCategory from "./AddCategory";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategoryData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/category/categories"
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
            <div className="col-span-2 bg-white m-3 rounded-md">
              <p>All Categories</p>
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

        <AddCategory getCategoryData={getCategoryData} />
      </div>
    </div>
  );
};

export default Category;
