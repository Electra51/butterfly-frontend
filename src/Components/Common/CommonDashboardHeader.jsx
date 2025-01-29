import React from "react";

const CommonDashboardHeader = ({ title }) => {
  return (
    <span className="text-[17px] font-medium border-0 border-b border-[#5F5F5F] text-[#5F5F5F] pb-1">
      {title}
    </span>
  );
};

export default CommonDashboardHeader;
