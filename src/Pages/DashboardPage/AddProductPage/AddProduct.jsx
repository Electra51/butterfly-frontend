import React, { useState } from "react";
import CommonDashboardHeader from "../../../Components/Common/CommonDashboardHeader";
import Loader from "../../../Components/Common/Loader";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="m-2">
          <CommonDashboardHeader title={"Add Products"} />

          <div className="max-w-[1000px] my-6 px-1">Hello</div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
