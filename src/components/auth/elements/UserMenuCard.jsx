import React from "react";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import callApi from "../../../services/callApi";
const UserMenuCard = ({ user }) => {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    Cookies.remove("user");
    try {
      const response = await callApi.get("/auth/logout");
      if (response) navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-14 right-0 bg-white px-6 py-3 w-[300px] shadow-lg rounded-md">
      <div>
        <Link to="/profile" className="flex items-center gap-5 mb-2 ">
          <div className="h-10 w-10 rounded-full border flex justify-center items-center">
            <RiUserSettingsFill className="text-[25px]" />
          </div>
          <p>Profile Saya</p>
        </Link>
        {/*ternary option for user-as cumtomer only or as a Seller having store*/}
        {user.Store === null ? (
          <Link to="/register-store" className="flex items-center gap-5 mb-2 ">
            <div className="h-10 w-10 rounded-full border flex justify-center items-center">
              <FaStore className="text-[20px]" />
            </div>
            <p>Buat Toko</p>
          </Link>
        ) : (
          <Link to="/store-dashboard" className="flex items-center gap-5 mb-2 ">
            <div className="h-10 w-10 overflow-hidden rounded-full border">
              <img className="object-contain w-full" src={user.Store?.image} alt="store_avatar" />
            </div>
            <p>Menu Seller</p>
          </Link>
        )}
      </div>
      <hr className="border border-t-gray-200 mt-2" />
      <button className="p-2 bg-emerald-500 text-white font-medium w-full rounded-md mt-4" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenuCard;
