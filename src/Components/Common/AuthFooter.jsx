import React from "react";
import { Link } from "react-router-dom";

const AuthFooter = ({ title, link, head }) => {
  return (
    <p className="text-left mt-3 text-[14px]">
      {title}
      <Link to={link}>
        <span className="text-blue-500 font-semibold cursor-pointer underline hover:font-bold">
          {head}
        </span>
      </Link>
    </p>
  );
};

export default AuthFooter;
