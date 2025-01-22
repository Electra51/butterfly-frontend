import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { sidebarData } from "./Common/Data";
import toast from "react-hot-toast";
import logo from "../assets/Logo/new.png";
const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user-token");
    toast.success("logout successfully");
    navigate(location.state?.from || "/");
  };

  return (
    <div className="w-[270px] bg-[#fffbefd9] h-[100vh] relative">
      <div className="w-[62px] lg:w-[140px] flex items-start justify-start pl-7 gap-2 pt-2 pb-2">
        <Link href="/">
          <img
            src={logo}
            alt="logo"
            width={100}
            height={40}
            className="w-full h-full object-fill"
          />
        </Link>
      </div>
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
      {/* <div className="absolute bottom-8 left-4">
        <div className="flex justify-between items-center gap-4">
          {userDetails ? (
            <div className="flex justify-normal gap-2 items-center">
              {" "}
              <div className="h-[36px] w-[36px] rounded-full bg-[#FFF6D8] border border-[#e8cd75] flex justify-center items-center shadow-md">
                {userDetails?.profileImage ? (
                  <img
                    src={userDetails?.profileImage}
                    alt=""
                    className="h-full w-full object-fill rounded-full"
                  />
                ) : (
                  <p>{userDetails?.nickname?.substring(0, 1)}</p>
                )}
              </div>
              <p className="text-[#11233A] text-[14px] font-medium text-nowrap">
                {userDetails?.nickname}
              </p>
            </div>
          ) : auth?.user ? (
            <div className="flex justify-normal gap-2 items-center">
              {" "}
              <div className="h-[36px] w-[36px] rounded-full bg-[#FFF6D8] border border-[#e8cd75] flex justify-center items-center">
                {auth?.user?.name?.substring(0, 1)}
              </div>
              <p className="text-[#11233A] text-[14px] font-medium text-nowrap">
                {auth?.user?.name}
              </p>
            </div>
          ) : (
            ""
          )}

          <IoLogOutOutline
            className="text-xl cursor-pointer"
            // onClick={handleLogout}
            onClick={() => setVisible(true)}
          />
        </div>
      </div>
      <ConfirmationModal
        setVisible={setVisible}
        visible={visible}
        handleLogout={handleLogout}
      /> */}
    </div>
  );
};

export default Sidebar;
