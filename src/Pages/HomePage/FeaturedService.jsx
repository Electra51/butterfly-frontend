import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Components/Common/ServiceCard";

const FeaturedService = () => {
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
          (e, i) => e?.status[0] == "Featured"
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
    <div className="mt-32 flex flex-col justify-center max-w-[18rem] lg:max-w-6xl mx-auto">
      <div className="flex justify-center items-center">
        <p className="tracking-[0.1rem] text-2xl border-b w-72 lg:w-80 text-center font-bold text-black">
          Featured Services
        </p>
      </div>
      <Link to="/services">
        <p className="text-center text-[#C2A74E] hover:underline hover:text-blue-500 font-medium cursor-pointer text-[16px] mt-2 w-52 mx-auto">
          See All Services
        </p>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
        {featuredService?.map((e, i) => (
          <ServiceCard item={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedService;
