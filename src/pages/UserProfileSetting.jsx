import React, { useState, useEffect } from "react";
import UserProfileComponent from "../components/DashboardUser/UserProfileComponent";
import Header from "../components/homepage/Header";

const UserProfileSetting = () => {
  const [DataChange, setDataChange] = useState("");

  const handleDataChange = (newData) => {
    setDataChange(newData);
  };

  return (
    <div className="min-h-[100vh] bg-gray-200 ">
      <Header DataChange={DataChange} />
      <div className="relative py-10 px-5 ">
        <div className="bg-white rounded-lg shadow-lg">
          <UserProfileComponent onDataChange={handleDataChange} />
        </div>
      </div>
    </div>
  );
};

export default UserProfileSetting;
