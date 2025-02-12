import PhotoAlbum from "react-photo-album";
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
import SectionWrapper from "../../Components/Common/SectionWrapper";

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
    <SectionWrapper subHeaderTitle={"Selective"} HeaderTitle={"Image Gallery"}>
      <div className="px-3">
        <PhotoAlbum layout="columns" photos={photos} />
      </div>
    </SectionWrapper>
  );
};

export default ImageGallery;
