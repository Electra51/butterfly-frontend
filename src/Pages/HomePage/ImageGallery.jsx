import PhotoAlbum from "react-photo-album";
import { SlideshowLightbox } from "lightbox.js-react";
import { initLightboxJS } from "lightbox.js-react";
import gallaryImage1 from "../../assets/GallaryImage/images0.jpg";
import gallaryImage2 from "../../assets/GallaryImage/images1.jpg";
import gallaryImage3 from "../../assets/GallaryImage/images2.jpg";
import gallaryImage4 from "../../assets/GallaryImage/images3.jpg";
import gallaryImage5 from "../../assets/GallaryImage/images4.jpg";
import gallaryImage6 from "../../assets/GallaryImage/images5.jpg";
import gallaryImage7 from "../../assets/GallaryImage/images6.jpg";
import gallaryImage8 from "../../assets/GallaryImage/images7.jpg";
import gallaryImage9 from "../../assets/GallaryImage/images8.webp";
import gallaryImage10 from "../../assets/GallaryImage/images9.jpg";
import gallaryImage11 from "../../assets/GallaryImage/images10.jpg";
import gallaryImage12 from "../../assets/GallaryImage/images11.jpg";
import gallaryImage13 from "../../assets/GallaryImage/images12.jpg";
import CommonDashboardHeader from "../../Components/Common/CommonDashboardHeader";

const ImageGallery = () => {
  const photos = [
    { src: gallaryImage1, width: 1080, height: 1000 },
    { src: gallaryImage2, width: 1080, height: 1220 },
    { src: gallaryImage3, width: 1080, height: 720 },
    { src: gallaryImage4, width: 1080, height: 721 },
    { src: gallaryImage5, width: 1080, height: 1120 },
    { src: gallaryImage6, width: 1080, height: 607 },
    { src: gallaryImage7, width: 1080, height: 608 },
    { src: gallaryImage8, width: 1080, height: 720 },
    { src: gallaryImage9, width: 1080, height: 1149 },
    { src: gallaryImage10, width: 1080, height: 920 },
    { src: gallaryImage11, width: 1080, height: 720 },
    { src: gallaryImage12, width: 1080, height: 1549 },
    { src: gallaryImage13, width: 1080, height: 1020 },
  ];
  return (
    <div className="mt-32 max-w-[20rem] lg:max-w-6xl mx-auto">
      <div className="flex justify-center items-center">
        <p className="tracking-[0.1rem] text-2xl border-b w-72 lg:w-80 text-center font-bold text-black">
          Image Gallery
        </p>
      </div>
      <div className="mt-12">
        <PhotoAlbum layout="columns" photos={photos} />
      </div>
    </div>
  );
};

export default ImageGallery;
