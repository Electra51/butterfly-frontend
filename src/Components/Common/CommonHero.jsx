import React from "react";
import BreadCrumb from "./BreadCrumb";
import imgforAbout from "../../assets/bannerLogo/contact-banner.jpg";
import imgforContact from "../../assets/bannerLogo/contacts-page.jpg";

const CommonHero = ({ type, title }) => {
  const backgroundImage =
    type === "about" ? imgforAbout : type === "contact" ? imgforContact : null;

  return (
    <div
      className="hero h-[430px] lg:h-[460px] bg-fixed"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg backdrop-blur-sm bg-white bg-opacity-30 px-24 py-5">
          <h1 className="mb-5 text-2xl lg:text-5xl text-[#242424] tracking-[0.1rem] font-bold">
            {title}
          </h1>
          <BreadCrumb
            bread={
              type === "about" ? "about" : type === "contact" ? "contact" : ""
            }
            link={
              type === "about"
                ? "/about"
                : type === "contact"
                ? "/contact"
                : "/"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CommonHero;
