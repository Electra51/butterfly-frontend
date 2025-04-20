/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageCarousel = ({ eachService }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  console.log("eachService", eachService);
  return (
    <div className="mt-8 h-[250px]">
      <Slider {...settings}>
        {eachService?.map((e, i) => {
          return (
            <div key={i} className="h-[250px]">
              <img
                src={e?.img}
                alt=""
                width={500}
                className="h-full object-cover"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
