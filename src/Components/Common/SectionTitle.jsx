import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div className="flex justify-center items-center">
      <p className="tracking-[0.1rem] text-2xl border-b w-72 lg:w-80 text-center font-bold text-black">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
