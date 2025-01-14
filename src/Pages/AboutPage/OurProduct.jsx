import { Link } from "react-router-dom";
import productLogo from "../../assets/bannerLogo/productsLogo.jpg";
import { BsArrowRightShort } from "react-icons/bs";

const OurProduct = () => {
  return (
    <div className="pt-[150px] grid grid-cols-1 lg:grid-cols-2 gap-32 items-center sm-container lg:container px-14 pb-[120px]">
      <div>
        <p className="tracking-[0.2rem] text-xl border-b font-bold">
          Our Products
        </p>
        <p className="text-justify tracking-[1px] mt-5 text-gray-800">
          All our products are cruelty-free, it’s a category containing all
          cosmetics that have not been tested on animals. Each cosmetic is
          subject to strict control by independent inspection bodies chosen by
          the Coalition for Consumer Information in Cosmetics (CCIC), which is
          an NGO founded by 8 international animal protection groups such as:
          American Anti-Vivisection Society, Animal Alliance of Canada, Doris
          Day Animal League, etc.
        </p>
        <Link to="/shop">
          <button className="button b1 mt-10">
            Shop Now <BsArrowRightShort className="arrow1 text-2xl" />
          </button>
        </Link>
      </div>
      <div>
        {" "}
        <img src={productLogo} alt="about Image" priority className="w-full" />
      </div>
    </div>
  );
};

export default OurProduct;
