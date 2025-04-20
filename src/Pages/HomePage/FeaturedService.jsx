import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../../Components/Common/ServiceCard";
import SectionWrapper from "../../Components/Common/SectionWrapper";

const FeaturedService = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [featuredService, setFeaturedService] = useState([]);
  const getAllServiceData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/service/service"
      );

      if (response.status === 200) {
        const filterService = response.data?.filter(
          (e) => e?.status[0] == "Featured"
        );
        setFeaturedService(filterService);
      } else {
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllServiceData();
  }, []);
  return (
    <SectionWrapper
      subHeaderTitle={"Elite & Glam"}
      HeaderTitle={"Featured Services"}>
      <div className="">
        {/* <div className="flex flex-col justify-center items-center">
          <SubHeader title={"Elite & Glam"} fsize={16} color={"#100C08"} />
          <p className="tracking-[0.1rem] text-2xl border-b w-72 lg:w-80 text-center font-bold text-black">
            Featured Services
          </p>
        </div> */}
        {/* <Link to="/services">
        <p className="text-center text-[#C2A74E] hover:underline hover:text-blue-500 font-medium cursor-pointer text-[16px] mt-2 w-52 mx-auto">
          See All Services
        </p>
      </Link> */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 px-0">
          {featuredService?.map((e, i) => (
            <ServiceCard item={e} key={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturedService;
