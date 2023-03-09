import React from "react";
import UserProfileComponent from "../components/DashboardUser/UserProfileComponent";
import Header from "../components/homepage/Header";

const UserProfileSetting = () => {
  return (
    <div className="min-h-[100vh] bg-gray-200 ">
      <Header />
      <div className="relative py-10 px-5 ">
        <div className="bg-white rounded-lg shadow-lg">
          <UserProfileComponent />
        </div>
      </div>
    </div>
  );
};

export default UserProfileSetting;
