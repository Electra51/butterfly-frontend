/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommonHeroForServiceAndProduct from "../../Components/Common/CommonHeroForServiceAndProduct";
import ImageCarousel from "../../Components/Common/ImageCarousel";

const getDuration = (time) => {
  if (!time || typeof time !== "string" || !time.includes("-")) {
    return { hours: 0, minutes: 0 };
  }

  const [startTime, endTime] = time.split("-");
  const start = new Date(`01/01/2000 ${startTime.trim()}`);
  const end = new Date(`01/01/2000 ${endTime.trim()}`);
  const durationInMinutes = (end - start) / 1000 / 60;

  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  return { hours, minutes };
};

const TimeDuration = ({ time }) => {
  const { hours, minutes } = getDuration(time);

  return (
    <>
      {hours > 0 && (
        <span>
          {hours} hour{hours !== 1 ? "s" : ""}{" "}
        </span>
      )}
      <span>
        {minutes} min{minutes !== 1 ? "" : ""}
      </span>
    </>
  );
};

const EachServiceDetail = () => {
  const { id } = useParams();
  const [eachService, setEachService] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEachServiceById = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/service/service/${id}`
      );

      if (response.status === 200) {
        setEachService(response.data);
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
    getEachServiceById();
  }, [id]);

  console.log("eachService", eachService?.material);
  return (
    <div className="">
      <CommonHeroForServiceAndProduct
        type={"serviceDetail"}
        title={eachService?.name}
        backgroundImage={eachService?.detail?.[0]?.img}
      />
      {loading ? (
        "Loading..."
      ) : (
        <div className="w-[1200px]  grid grid-cols-3 gap-14 mx-auto mt-20">
          <div className="col-span-2">
            {eachService?.detail?.map((e, i) => {
              return (
                <div key={i}>
                  <h3 className="text-xl font-bold tracking-[0.02rem]">
                    {e?.question1}
                  </h3>
                  <p className="text-black font-medium mt-3 text-justify tracking-[0.02rem] mb-8">
                    {e?.ans1}
                  </p>
                  <img src={e?.img} alt="" className="mb-6 w-full" />
                </div>
              );
            })}
            <div className="text-black">
              <h3 className="mt-8 text-xl font-bold tracking-[0.02rem]">
                How it Works?
              </h3>
              <div
                className={`grid justify-normal items-center gap-6 my-6 ${
                  eachService?.works_how?.length == 4
                    ? "grid-cols-2"
                    : "grid-cols-3"
                }`}>
                {eachService?.works_how?.map((e, i) => {
                  console.log("e", e);
                  return (
                    <div key={i}>
                      <div className="flex items-center justify-start gap-2">
                        <div className="h-9 w-9 bg-[#c2a74e] flex justify-center items-center p-2 rounded-full">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 32 32"
                            className="text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M 28.28125 6.28125 L 11 23.5625 L 3.71875 16.28125 L 2.28125 17.71875 L 10.28125 25.71875 L 11 26.40625 L 11.71875 25.71875 L 29.71875 7.71875 Z"></path>
                          </svg>
                        </div>
                        <div>
                          {" "}
                          <p className="font-semibold">{e?.headline}</p>
                        </div>
                      </div>
                      <p className="font-medium text-[15px] pl-11 text-justify">
                        {e?.details}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold tracking-[0.02rem] mb-2">
              {eachService?.name}
            </p>
            <div className="flex items-center justify-start gap-4 text-black font-medium">
              {/* <Star ratingPoint={singleService?.rating} /> (
              {singleService?.review} reviews) */}
            </div>
            <div className="flex justify-start gap-14 items-center">
              <p className="text-black font-medium mt-1">
                Price: $ {eachService?.price}
              </p>
            </div>
            <hr className="my-5" />
            <div className="bg-[#C2A74E] p-5 flex flex-col justify-center items-center">
              <h3 className="text-center font-bold tracking-[0.02rem] mb-2">
                Price Per Time
              </h3>
              <p className="text-center text-[14px] font-medium">
                {eachService?.detail[1].ans1.slice(0, 70)}
              </p>
              <div className="text-center text-[14px] font-medium mt-4">
                {eachService?.price_per_time?.map((e, i) => {
                  return (
                    //  <TimeDuration time="10:00 - 11:45" />
                    <p key={i}>
                      <TimeDuration time={e?.time} /> ~~ $ {e?.budget}
                    </p>
                  );
                })}
              </div>

              <button className="bg-black px-4 py-1 my-3 text-[14px] text-white">
                Book an Appointment
              </button>
            </div>
            <p className="text-black font-medium mt-6">
              <span className="font-semibold">Material: </span>
              {eachService?.material
                ?.map(
                  (item) => item.charAt(0).toUpperCase() + item.slice(1) // Capitalize first letter
                )
                .join(", ")}
            </p>
            <p className="text-black font-semibold mt-6">Tags:</p>{" "}
            <hr className="mb-5" />
            <div className="flex flex-wrap justify-normal gap-2 items-center max-w-md my-2 text-white">
              {eachService?.tag?.map((e, i) => (
                <div
                  className="bg-[#c2a74e] px-3 py-0 rounded-full text-[14px]"
                  key={i}>
                  {e}
                </div>
              ))}
            </div>
            <div>
              <p className="text-black font-semibold mt-8">Working Time:</p>{" "}
              <hr className="mb-3" />
              <p className="text-black font-medium text-[15px] text-justify">
                Butterfly is guarantee that you will appreciate the atmosphere
                of our place. Sapien gravida donec pretium ipsum porta justo
                integer.
              </p>
              <div className="flex justify-between items-center mt-4 text-black font-medium text-[15px] mr-8">
                <p>Mon - Fri</p> - <p>9.00 AM - 7.00 PM</p>
              </div>
              <div className="flex justify-between items-center mt-2 text-black font-medium text-[15px] mr-8">
                <p>Saturday</p> - <p>9.00 AM - 5.00 PM</p>
              </div>
              <div className="flex justify-between items-center mt-2 text-black font-medium text-[15px] mr-8 mb-6">
                <p>Sundays</p> - <p>9.30 AM - 3.00 PM</p>
              </div>
            </div>
            <ImageCarousel eachService={eachService?.detail} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EachServiceDetail;
