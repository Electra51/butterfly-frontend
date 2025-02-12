import { FiCheck } from "react-icons/fi";
import SectionWrapper from "../../Components/Common/SectionWrapper";
import { pricingplanData } from "../../Components/Common/Data";

const PricingPlan = () => {
  return (
    <SectionWrapper subHeaderTitle={"Selective"} HeaderTitle={"Pricing Policy"}>
      <div className="px-3 pb-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 justify-center justify-items-center items-center">
          {pricingplanData.map((plan, index) => {
            return (
              <div
                className="group bg-base-100 shadow-xl transform
          group-hover:-translate-y-1 duration-300 relative px-5 py-8"
                style={{
                  boxShadow: "rgb(193 165 73 / 44%) 0px 7px 29px 0px",
                }}
                key={index}>
                <p className="text-xl font-semibold text-center">
                  {plan?.package_name}
                </p>
                <p className="mt-5 mb-3 text-center">
                  <span
                    className="text-2xl font-bold"
                    style={{
                      color: plan?.button_color,
                    }}>
                    {plan?.price}
                  </span>{" "}
                  / Monthly
                </p>
                <p className="text-center text-[14px]">{plan?.heading_text}</p>
                <div className="h-[1px] w-full px-3 bg-gray-100 my-5"></div>
                <div className="mx-6">
                  {plan?.services.map((service, index) => {
                    return (
                      <div
                        className="grid grid-cols-5 justify-start items-center gap-2 py-1.5"
                        key={index}>
                        <p className="col-span-4 text-[14px]">
                          {service?.name}
                        </p>
                        <FiCheck
                          className="mx-auto"
                          style={{
                            color: plan?.button_color,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center items-center mx-3">
                  <button
                    className="buttonNLog1 bNLog1 px-5 py-2 text-white mt-5"
                    style={{
                      backgroundColor: plan?.button_color,
                    }}>
                    Choose Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PricingPlan;
