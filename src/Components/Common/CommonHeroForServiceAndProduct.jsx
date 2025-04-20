/* eslint-disable react/prop-types */
import BreadCrumb2 from "./BreadCrumb2";

const CommonHeroForServiceAndProduct = ({ type, title, backgroundImage }) => {
  console.log("type, title, backgroundImage", type, title, backgroundImage);
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
        <div className="max-w-lg backdrop-blur-sm bg-white bg-opacity-30 px-24 py-5 mt-10 border">
          <h1 className="mb-5 text-2xl lg:text-4xl text-[#242424] tracking-[0.1rem] font-bold">
            {title}
          </h1>
          <BreadCrumb2
            bread={type === "serviceDetail" ? "Service Details" : ""}
            bread1={type === "serviceDetail" ? "Service" : ""}
            link={
              type === "serviceDetail"
                ? "/services"
                : type === "contact"
                ? "/contact"
                : type === "contact"
                ? "/services"
                : type === "booking"
                ? "/booking"
                : type === "cart"
                ? "/cart"
                : "/"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CommonHeroForServiceAndProduct;
