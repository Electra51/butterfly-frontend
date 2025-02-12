import React from "react";
import SubHeader from "./SubHeader";

const SectionWrapper = ({ children, subHeaderTitle, HeaderTitle }) => {
  return (
    <div className="sm-container lg:w-[1220px] mx-auto mt-[125px] lg:mt-[190px] mb-[120px] lg:mb-[140px]">
      <div className="flex flex-col justify-center items-center">
        <SubHeader title={subHeaderTitle} fsize={16} color={"#100C08"} />
        <p className="tracking-[0.1rem] text-xl lg:text-2xl border-b w-72 lg:w-[360px] text-center font-bold text-black ">
          {HeaderTitle}
        </p>
      </div>
      <div className="mt-[7rem]">{children}</div>
    </div>
  );
};

export default SectionWrapper;
