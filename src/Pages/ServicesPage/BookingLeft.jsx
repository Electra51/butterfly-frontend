import React from "react";
import { contactInfo } from "../../Components/Common/Data";
const BookingLeft = () => {
  return (
    <div className="pl-8">
      {contactInfo?.map((info, i) => {
        return (
          <div className="mt-8" key={i}>
            <h2 className="text-gray-700 text-base font-semibold">
              {info.title}
            </h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#f1f1f1cf] border h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <info.icon className="text-[#C2A74E]" />
                </div>
                <a
                  href={
                    info.type === "email"
                      ? `mailto:${info.value}`
                      : info.type === "phone"
                      ? `tel:${info.value}`
                      : "javascript:void(0)"
                  }
                  className="text-[#C2A74E] text-sm ml-4">
                  <p className="text-[14px] block text-gray-700">
                    {info.title}
                  </p>
                  <span className="font-medium">{info.value}</span>
                </a>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default BookingLeft;
