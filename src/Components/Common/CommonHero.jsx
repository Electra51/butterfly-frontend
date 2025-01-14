import React from "react";
import BreadCrumb from "./BreadCrumb";

const CommonHero = () => {
  return (
    <div
      className="hero h-[430px] lg:h-[460px] bg-fixed"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/CQj0JQq/istockphoto-952772504-612x612.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg backdrop-blur-sm bg-white bg-opacity-30 px-24 py-5">
          <h1 className="mb-5 text-2xl lg:text-5xl text-[#242424] tracking-[0.1rem] font-bold">
            About Us
          </h1>
          <BreadCrumb bread={"about"} link={"/about"} />
        </div>
      </div>
    </div>
  );
};

export default CommonHero;
