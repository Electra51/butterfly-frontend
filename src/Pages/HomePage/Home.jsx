import React from "react";
import Banner from "./Banner";
import ExtraFeature from "./ExtraFeature";
import AboutHome from "./AboutHome";
import Philosophy from "./Philosophy";
import FeaturedService from "./FeaturedService";
import FeaturedProduct from "./FeaturedProduct";
import Testimonials from "./Testimonials";

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
    </div>
  );
};

export default Home;
