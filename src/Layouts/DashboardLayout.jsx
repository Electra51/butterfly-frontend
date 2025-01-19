import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full pl-5 pt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
