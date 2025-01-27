import React from "react";

const BookingHeader = ({ step }) => {
  return (
    <div>
      {" "}
      {step == 2 ? (
        <p className="text-[18px] font-semibold text-black  tracking-[0.02rem] border-0 border-b w-[190px]">
          Appointment Date
        </p>
      ) : step == 3 ? (
        <p className="text-[18px] font-semibold text-black  tracking-[0.02rem] border-0 border-b w-[190px]">
          Payment Method
        </p>
      ) : (
        <p className="text-[18px] font-semibold text-black  tracking-[0.02rem] border-0 border-b w-[300px]">
          Service's & Client Information
        </p>
      )}
    </div>
  );
};

export default BookingHeader;
