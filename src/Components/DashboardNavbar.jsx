import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo/new.png";
import { TbLogout } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";

const DashboardNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user-token");
    toast.success("logout successfully");
    navigate("/login");
  };
  return (
    <div className="h-[80px] w-full bg-[#fffbefd9] flex justify-between items-center pr-10 shadow-[#f5e6b7d9]">
      <div className="w-[62px] lg:w-[140px] flex items-start justify-start pl-7 gap-2 pt-2 pb-2">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={100}
            height={40}
            className="w-full h-full object-fill"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-7">
        {/* <input
          type="text"
          placeholder="search"
          className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
        /> */}
        {location?.pathname == "/dashboard/author-list" ||
        location?.pathname == "/dashboard/category-list" ||
        location?.pathname == "/dashboard/all-service" ||
        location?.pathname == "/dashboard/reservations" ||
        location?.pathname == "/dashboard/orders" ? (
          <div className="h-8 w-8 rounded-full border border-[#C2A74E] flex justify-center items-center group hover:bg-[#C2A74E]">
            <IoSearch className="text-[#C2A74E] group-hover:text-white" />
          </div>
        ) : (
          ""
        )}

        <button
          className="bg-[#C2A74E] border border-[#C2A74E] px-4 py-1 "
          onClick={handleLogout}>
          <Link
            to="/"
            className="justify-normal gap-2 items-center flex text-white text-[14px] font-semibold">
            <TbLogout />
            Logout
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
