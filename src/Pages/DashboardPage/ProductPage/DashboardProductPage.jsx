import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Loader from "../../../Components/Common/Loader";
import Pagination from "../../../Components/Common/Pagination";
import CommonDashboardHeader from "../../../Components/Common/CommonDashboardHeader";

const DashboardProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [allProduct, setAllProduct] = useState([]);
  const [page, setPage] = useState(0);
  const getAllProductData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/product/product-all`
      );

      if (response.status === 200) {
        setAllProduct(response.data);
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
    getAllProductData();
  }, []);

  console.log("allproduct", allProduct);
  return (
    <div className="w-[1440px] mt-4">
      <div>
        <CommonDashboardHeader title={"All Product"} />
        {allProduct.length > 1 && (
          <Pagination
            length={allProduct.length}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
      {loading ? (
        <div className="col-span-2 bg-white mx-3 my-1  rounded-md">
          <Loader />
        </div>
      ) : (
        <div className="rounded px-4 pt-6 pb-8 mb-2 mt-1">
          {allProduct?.slice(page * 9, (page + 1) * 9).map((e, i) => {
            console.log(e);
            return (
              <div key={i} className="border px-3 py-2 mt-2">
                <div className="grid grid-cols-4">
                  <div className="flex justify-normal items-start gap-2">
                    <div className="text-[14px] font-normal">{i + 1}. </div>
                    <div key={i} className="w-[70px] h-[45px]">
                      <img
                        src={e?.img[0]?.img1st}
                        alt=""
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold">
                        {e?.product_name}
                      </p>
                      {/* <p className="text-[14px] font-normal flex justify-normal items-start gap-1">
                        {e?.average_rating}
                        <FaStar className="text-orange-500 mt-0.5" />
                      </p> */}
                    </div>
                  </div>
                  <div className="text-[14px] font-normal">
                    <span className="font-medium text-[14px]">Price: </span>${" "}
                    {e?.price}
                  </div>
                  {/* <div className="text-[14px] font-normal">
                    <span className="font-medium text-[14px]">Discount: </span>
                    {e.discount} %
                  </div> */}
                  <div className="text-[14px] font-normal">
                    <span className="font-medium text-[14px]">Category: </span>
                    {e.product_category?.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DashboardProductPage;
