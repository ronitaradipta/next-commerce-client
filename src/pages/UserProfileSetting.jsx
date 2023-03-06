import React from "react";
import UserProfileDetails from "../components/DashboardUser/UserProfileDetails";
import Header from "../components/homepage/Header";

const UserProfileSetting = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <Header />
      <UserProfileDetails />
    </div>
  );
};

export default UserProfileSetting;
