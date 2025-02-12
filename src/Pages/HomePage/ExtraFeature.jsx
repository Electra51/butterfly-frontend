import { extraFeatureData } from "../../Components/Common/Data";
import SectionWrapper from "../../Components/Common/SectionWrapper";

const ExtraFeature = () => {
  return (
    <SectionWrapper
      subHeaderTitle={"Charm & Glow"}
      HeaderTitle={" Making You More Stylish"}>
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-10 px-0">
        {extraFeatureData?.map((e, i) => {
          return (
            <div className="group bg-base-100 rounded-sm transform group-hover:-translate-y-1 duration-300 relative">
              <div
                className="w-full h-full absolute top-0 left-0 bg-[#c2a74e] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ zIndex: -2 }}></div>

              <div className="relative ">
                <div className="flex flex-col justify-center items-center  py-10">
                  <img src={e?.image} alt="" width={300} height={300} />
                  <p className="mt-4 text-center font-semibold text-[16px] lg:text-[18px] tracking-[1px]">
                    {e?.title}
                  </p>
                  <p className="mt-3 text-gray-800 text-[14px] font-normal text-center px-3 w-[350px] tracking-[1px]">
                    {e?.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ExtraFeature;
