import React from "react";
import BreadCrumb from "./BreadCrumb";
import butterfly from "../../assets/Logo/butterfly.png";

const AuthHeader = ({ title, link, bread, right }) => {
  console.log("title, link, bread, right", title, link, bread, right);
  return (
    <div>
      <div className="pb-8 text-center">
        <h3 className="text-5xl font-bold text-black">{title}</h3>
        <BreadCrumb link={link} bread={bread} />
      </div>
      <img
        src={butterfly}
        alt="butterfly"
        className={`absolute right-${right} top-5 w-32`}
      />
    </div>
  );
};

export default AuthHeader;
