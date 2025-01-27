import imgAbout from "../../assets/bannerLogo/aboutBanner.jpg";

const AboutHero = () => {
  return (
    <div className="pt-[120px] lg:pt-[150px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center sm:container-div-sm lg:container-div container-div px-10">
      <div>
        <img src={imgAbout} alt="about Image" priority />
      </div>
      <div>
        <p className="tracking-[0.2rem] text-xl border-b font-bold">About us</p>
        <p className="text-justify tracking-[1px] mt-5 text-gray-800">
          The top three occupations in the Beauty salons Industry Group are
          Hairdressers, hairstylists, & cosmetologists, Manicurists and
          pedicurists,and Skincare specialists.Dear friends, I would certainly
          love to meet you all in persone, so come and just say hi. If it’s not
          possible at the moment, I would loke to introduce myself‚ I’m Vicky,
          the founder of Cherie Beauty Studio. I’m certain that new haircut,
          professional makup or just getting your easy way to make your day or
          week better. I guarantee that you will appreciate the atmosphere of
          our place. Looking forward to meeting you!
        </p>
        <p className="mt-3 font-medium text-gray-800 tracking-[0.2rem] text-[14px]">
          – Emma Underwood
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
