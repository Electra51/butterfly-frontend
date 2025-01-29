import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/SideBar";
import DashboardNavbar from "../Components/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="">
      <DashboardNavbar />
      <div className="w-full flex">
        <Sidebar />{" "}
        <div className="pl-5 pt-5">
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
