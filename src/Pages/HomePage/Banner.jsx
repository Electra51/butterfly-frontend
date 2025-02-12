import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/bannerLogo/image02.png";
import img2 from "../../assets/bannerLogo/image01.png";
import img3 from "../../assets/bannerLogo/image03.png";
import img4 from "../../assets/bannerLogo/image04.png";
import img5 from "../../assets/bannerLogo/image05.png";
import img6 from "../../assets/bannerLogo/image06.png";
import img7 from "../../assets/bannerLogo/image08.png";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import SubHeader from "../../Components/Common/SubHeader";

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop showIndicators={false}>
      <div className="relative mt-10">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img
          src={img3}
          alt="banner"
          priority
          className="w-full lg:h-full h-[420px]"
        />
        <div className="absolute top-[27%] lg:top-[35%] right-[10%] lg:right-[17%]">
          <div className="flex flex-col justify-center items-center my-auto mt-20">
            <SubHeader
              title={"Make Nail Gorgeous"}
              fsize={16}
              color={"#100C08"}
            />
            <p className="font-bold text-[18px] lg:text-4xl mt-3 tracking-[0.1rem] text-[#100C08]">
              NAIL SHINE MADE SMILE
            </p>

            <button className="button b1 mt-4 lg:mt-7 text-[#100C08]">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative mt-10">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img
          src={img1}
          alt="banner"
          priority
          className="w-full lg:h-full h-[420px]"
        />
        <div className="backdrop-blur-sm absolute top-[40%] lg:top-[37%] right-[17%] lg:right-[17%] bg-white bg-opacity-30 h-[160px] lg:h-72 w-[280px] lg:w-[510px]">
          <div className="flex flex-col justify-center items-center my-auto mt-6 lg:mt-20">
            <SubHeader title={"You Look Good"} fsize={16} color={"#100C08"} />
            <p className="font-bold text-[18px] lg:text-4xl mt-3 tracking-[0.1rem] text-[#100C08]">
              THEN YOU FEEL GOOD
            </p>

            <button className="button b1 mt-4 lg:mt-7 text-[#100C08]">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative mt-10">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img
          src={img2}
          alt="banner"
          priority
          className="w-full lg:h-full h-[420px]"
        />
        <div className="backdrop-blur-sm absolute top-[27%] lg:top-[35%] left-[22%] lg:left-[18%]">
          <div className="flex flex-col justify-start items-center lg:items-start my-auto mt-20 text-white">
            <SubHeader
              title={"We Make Best Spa"}
              fsize={16}
              color={"#E5E7EB"}
            />
            <p className="font-bold text-[18px] lg:text-4xl mt-3 tracking-[0.1rem]">
              BEAUTY SPA & SALON
            </p>

            <button className="button b2 mt-4 lg:mt-7">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img
          src={img4}
          alt="banner"
          priority
          className="w-full lg:h-full h-[420px]"
        />
        <div className="absolute top-[26%] lg:top-[35%] left-[12%] lg:left-[18%]">
          <div className="flex flex-col justify-start items-center lg:items-start my-auto mt-20">
            <SubHeader
              title={"We Make Best Makeup"}
              fsize={16}
              color={"#100C08"}
            />
            <p className="font-bold text-[18px] lg:text-4xl mt-3 tracking-[0.1rem] text-[#100C08]">
              BEAUTY MAKEUP & SALON
            </p>

            <button className="button6 b1 mt-4 lg:mt-7 text-[#100C08]">
              Booking <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative mt-10">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img
          src={img5}
          alt="banner"
          priority
          className="w-full lg:h-full h-[420px]"
        />
        <div className="absolute top-[27%] lg:top-[35%] left-[25%] lg:left-[18%]">
          <div className="flex flex-col justify-start items-center lg:items-start my-auto mt-20">
            <SubHeader title={"Silky Hair"} fsize={16} color={"#100C08"} />
            <p className="font-bold text-[18px] lg:text-4xl mt-3 tracking-[0.1rem] text-[#100C08]">
              HAIR SHINNING
            </p>

            <button className="button6 b1 mt-4 lg:mt-7 text-[#100C08]">
              Booking <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative mt-10">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img
          src={img6}
          alt="banner"
          priority
          className="w-full lg:h-full h-[420px]"
        />
        <div className="absolute top-[35%] right-[26%] lg:right-[17%]">
          <div className="flex flex-col justify-start items-center lg:items-start my-auto mt-6 lg:mt-20">
            <SubHeader title={"Products For"} fsize={16} color={"#100C08"} />
            <p className="font-bold text-[18px] lg:text-4xl mt-3 tracking-[0.1rem] text-[#100C08]">
              SPA TREATMENT
            </p>
            <Link href="/shop">
              {" "}
              <button className="button6 b1 mt-4 lg:mt-7 text-[#100C08]">
                Shop Now <BsArrowRightShort className="arrow1 text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative mt-10">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img
          src={img7}
          alt="banner"
          priority
          className="w-full lg:h-full h-[420px]"
        />
        <div className="backdrop-blur-sm absolute top-[40%] lg:top-[35%] left-[10%] lg:left-[38%] bg-white bg-opacity-30 h-[160px] lg:h-72 w-[340px] lg:w-[530px]">
          <div className="flex flex-col justify-center items-center my-auto mt-[6%] lg:mt-20">
            <SubHeader
              title={"Make Hair shining"}
              fsize={16}
              color={"#100C08"}
            />
            <p className="font-bold text-[18px] lg:text-4xl mt-3 tracking-[0.1rem] text-[#100C08]">
              BEAUTIFUL & HEALTHY HAIR
            </p>

            <button className="button b1 mt-4 lg:mt-7 text-[#100C08]">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
