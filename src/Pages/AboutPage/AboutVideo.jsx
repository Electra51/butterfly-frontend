import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
const AboutVideo = () => {
  return (
    <div className="about-cover flex justify-center items-center h-[600px] mt-32 py-8 text-white">
      <div className="max-w-xl mx-auto">
        <p className="font-bold text-2xl lg:text-3xl text-center tracking-[0.1rem] px-3 lg:px-0">
          BOOK & FEEL OUR INCREDIBLE MAKEUP & SPA.
        </p>

        <Link to="/services" className="flex justify-center mt-3">
          {" "}
          <button className="button7 b7 mt-4 lg:mt-10 text-white">
            Discover More <BsArrowRightShort className="arrow1 text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutVideo;
