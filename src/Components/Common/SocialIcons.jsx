import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex justify-start items-center gap-[15px] mt-4">
      <div className="h-[35px] w-[35px] border border-[#86371C] border-spacing-1.5 rounded-full flex justify-center items-center">
        <FaLinkedinIn className="text-[13px] text-[#86371C]" />
      </div>
      <div className="h-[35px] w-[35px] border border-[#86371C] border-spacing-1.5 rounded-full flex justify-center items-center">
        <FaFacebookF className="text-[13px] text-[#86371C]" />
      </div>
      <div className="h-[35px] w-[35px] border border-[#86371C] border-spacing-1.5 rounded-full flex justify-center items-center">
        <FaTwitter className="text-[13px] text-[#86371C]" />
      </div>
    </div>
  );
};

export default SocialIcons;
