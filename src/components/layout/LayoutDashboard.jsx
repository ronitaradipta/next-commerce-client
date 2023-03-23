import React, { useEffect, useState } from "react";
import HeaderDashboard from "../DashboardStore/HeaderDashboard";
import SideBarDashboard from "../DashboardStore/SideBarDashboard";
import callApi from "../../services/callApi";

const LayoutDashboard = ({ children }) => {
  const [dataStore, setDataStore] = useState("");

  const fetchDataStore = async () => {
    try {
      const response = await callApi.get("/stores/user");
      setDataStore(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataStore();
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-[100vh]">
      <SideBarDashboard data={dataStore} />
      <div className="w-full min-h-[100vh]">
        <HeaderDashboard />
        <div className="min-h-[100vh] py-10 px-6">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
