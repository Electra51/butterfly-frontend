import React from "react";

const SubHeader = ({ title, fsize, color }) => {
  return (
    <p
      className={`text-[${color}] tracking-[0.15rem] lg:tracking-[0.3rem] text-[14px] lg:text-[${fsize}px]`}>
      {title}
    </p>
  );
};

export default SubHeader;
