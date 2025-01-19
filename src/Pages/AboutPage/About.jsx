import React from "react";
import AboutHero from "./AboutHero";
import CommonHero from "../../Components/Common/CommonHero";
import OurProduct from "./OurProduct";
import OurTeam from "./OurTeam";
import AboutVideo from "./AboutVideo";
import OurPhilosophy from "./OurPhilosophy";

const About = () => {
  return (
    <div>
      <CommonHero type={"about"} title={"About Us"} />
      <AboutHero />
      <OurTeam />
      <AboutVideo />
      <OurPhilosophy />
      <OurProduct />
    </div>
  );
};

export default About;
