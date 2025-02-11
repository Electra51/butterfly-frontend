import React from "react";
import Banner from "./Banner";
import ExtraFeature from "./ExtraFeature";
import AboutHome from "./AboutHome";
import Philosophy from "./Philosophy";
import FeaturedService from "./FeaturedService";
import FeaturedProduct from "./FeaturedProduct";
import Testimonials from "./Testimonials";
import ImageGallery from "./ImageGallery";
import CompanyLogo from "./CompanyLogo";
import WhyChoose from "./WhyChoose";
import PricingPlan from "./PricingPlan";
import ContactUs from "./ ContactUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <ExtraFeature />
      <AboutHome />
      <FeaturedService />
      <Philosophy />
      <FeaturedProduct />
      <Testimonials />
      <ImageGallery />
      <CompanyLogo />
      <WhyChoose />
      <PricingPlan />
      <ContactUs />
    </div>
  );
};

export default Home;
