import React from "react";
import { IconContext } from "react-icons";
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

  console.log(user.name);
  return (
    <div className="absolute top-14 right-0 bg-white px-6 py-3 w-[300px] shadow-lg rounded-md">
      <Link to="/profile" className="flex items-center gap-5 mb-2">
        <div className=" w-10 h-10 flex justify-center items-center">
          <RiUserSettingsFill className="text-[25px]" />
        </div>
        Profile Saya
      </Link>
      {user.Store === null ? (
        <Link to={{ pathname: "/register-store", state: { name: user.name } }} className="flex items-center gap-5 pointer ">
          <div className="w-10 h-10 flex justify-center items-center">
            <FaStore className="text-[25px]" />
          </div>
          <div className="hover:text-green-500"> Daftar Toko</div>
        </Link>
      ) : (
        <div className="flex items-center gap-5">
          <div className="w-10 h-10 flex justify-center items-center hover:text-green-500">
            <img className="object-contain w-full" src={user.Store?.image} alt="store-avatar" />
          </div>
          <div>{user.Store?.name}</div>
        </div>
      )}
      <hr className="border border-t-gray-200 mt-2" />
      <button className="p-2 bg-emerald-500 text-white font-medium w-full rounded-md mt-4" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenuCard;
