import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man1 from "../../assets/Logo/man1.jpg";
import man2 from "../../assets/Logo/man2.jpg";
import Slider from "react-slick";
import "./testimonial.css";
import { BsArrowRightShort } from "react-icons/bs";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="mt-[180px] bg-[#c2a74e]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-32">
        <div className="px-5 py-2 text-white">
          <h3 className="text-3xl font-bold tracking-[0.2rem]">
            Reviews From Our Customers
          </h3>
          <p className="mr-5 mt-6 text-justify">
            Book & Feel Our Incredible Spa Experience. True Wellness & Beauty.
            There are many variations of passages the majority have suffered
            alteration in some fo injected humour, or randomised words
            believable.
          </p>

          <button className="button7 b7 mt-10 text-white">
            Explore More <BsArrowRightShort className="arrow1 text-2xl" />
          </button>
        </div>
        <Slider {...settings} className="lg:flex hidden">
          <div
            style={{ border: "1px solid red" }}
            className="h-[208px] relative">
            <div
              className="w-[110px] lg:w-[145px] h-[110px] lg:h-[145px] hover:bg-white bg-[#c2a74e] border border-[#C2A74E] rounded-full relative"
              style={{ zIndex: 9 }}>
              <div
                className="w-[90px] lg:w-[130px] h-[90px] lg:h-[130px] rounded-full absolute left-0 right-0 bottom-0 top-0 m-auto"
                style={{ zIndex: 9 }}>
                <img
                  src={man2}
                  className="h-full w-full object-cover rounded-full border border-[#C2A74E]"
                />
              </div>
            </div>
            <div className="absolute top-12 !left-[3.25rem] w-[75%] lg:w-[85%] bg-white pl-32 h-[200px]">
              <p className="pt-10">Name Me</p>
              <p>Rating</p>
              <p>The value of the product. The same product</p>
            </div>
          </div>

          <div className="relative">
            <div
              className="w-[110px] lg:w-[145px] h-[110px] lg:h-[145px] hover:bg-white bg-[#c2a74e] border border-[#C2A74E] rounded-full relative"
              style={{ zIndex: 9 }}>
              <div
                className="w-[90px] lg:w-[130px] h-[90px] lg:h-[130px] rounded-full absolute left-0 right-0 bottom-0 top-0 m-auto"
                style={{ zIndex: 9 }}>
                <img
                  src={man1}
                  className="h-full w-full object-cover rounded-full border border-[#C2A74E]"
                />
              </div>
            </div>
            <div className="absolute top-12 !left-[3.25rem] w-[75%] lg:w-[85%] bg-white pl-32 h-[200px]">
              <p className="pt-10">Name Me</p>
              <p>Rating</p>
              <p>
                Comparisons to similar products; and the value of the product.
                The same product
              </p>{" "}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
