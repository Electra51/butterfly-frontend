import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "./Common/Data";
const Sidebar = () => {
  return (
    <div className="w-[270px] bg-[#fffbefd9] h-[100vh] relative">
      <div className="mt-2">
        {sidebarData
          .filter((item) => !item.role || item.role === 1)
          .map((item, index) => (
            <div key={index}>
              <NavLink
                to={item?.link}
                className={({ isActive }) =>
                  `flex items-center pl-7 py-2 text-[14px] hover:bg-[#C2A74E] hover:border-0 hover:border-r-[6px] hover:border-[#f5d986d9] hover:text-white ${
                    isActive
                      ? "bg-[#C2A74E] border-0 border-r-[6px] border-[#f5d986d9] text-white"
                      : "text-[#5F5F5F] border-0 border-r-[6px] border-[#fffbefd9]"
                  }`
                }>
                {item?.icon && <span className="mr-2">{item.icon}</span>}
                <p>{item?.label}</p>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
