import React from "react";
import HeaderDashboard from "../DashboardStore/HeaderDashboard";
import SideBarDashboard from "../DashboardStore/SideBarDashboard";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="flex bg-gray-100 min-h-[100vh]">
      <SideBarDashboard />
      <div className="w-full min-h-[100vh]">
        <HeaderDashboard />
        <div className="min-h-[100vh] py-10 px-6">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
