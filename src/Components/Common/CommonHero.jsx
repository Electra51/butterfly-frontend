/* eslint-disable react/prop-types */
import BreadCrumb from "./BreadCrumb";
import imgforAbout from "../../assets/bannerLogo/contact-banner.jpg";
import imgforContact from "../../assets/bannerLogo/contacts-page.jpg";
import imgforService from "../../assets/bannerLogo/serviceBanner.jpg";
import imgforBooking from "../../assets/bannerLogo/BookingBanner.jpg";
import imgforCart from "../../assets/bannerLogo/CartBanner.jpeg";
import imgforShop from "../../assets/bannerLogo/image00.png";

const CommonHero = ({ type, title }) => {
  const backgroundImage =
    type === "about"
      ? imgforAbout
      : type === "contact"
      ? imgforContact
      : type === "services"
      ? imgforService
      : type === "booking"
      ? imgforBooking
      : type === "cart"
      ? imgforCart
      : type === "shop"
      ? imgforShop
      : null;

  return (
    <div
      className="hero h-[430px] lg:h-[460px] bg-fixed"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : // : newImg
            // ? `url(${newImg})`
            "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg backdrop-blur-sm bg-white bg-opacity-30 px-24 py-5 mt-10 border">
          <h1 className="mb-5 text-2xl lg:text-4xl text-[#242424] tracking-[0.1rem] font-bold">
            {title}
          </h1>
          <BreadCrumb
            bread={
              type === "about"
                ? "About"
                : type === "contact"
                ? "Contact"
                : type === "services"
                ? "Services"
                : type === "shop"
                ? "Shop"
                : type === "booking"
                ? "Booking Appointment"
                : type === "cart"
                ? "Cart"
                : ""
            }
            link={
              type === "about"
                ? "/about"
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

export default CommonHero;
