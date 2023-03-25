import React from "react";
import { IconContext } from "react-icons";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import callApi from "../../../services/callApi";

const UserMenu = () => {
  const listMenu = [
    {
      title: "Kembali Ke Beranda",
      icon: <FaStore />,
      link: "/",
    },
    {
      title: "Profile Saya",
      icon: <RiUserSettingsFill />,
      link: "/profile",
    },
  ];

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const response = await callApi.get("/auth/logout");
      console.log(response);
      Cookies.remove("token");
      Cookies.remove("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-14 right-0 bg-white px-6 py-3 w-[300px] shadow-lg rounded-md z-[999]">
      {listMenu.map((item, index) => {
        return (
          <Link to={item.link} key={index}>
            <div className="flex gap-3 items-center group py-3">
              <IconContext.Provider
                value={{
                  className:
                    "text-gray-600 w-6 h-6 group-hover:text-emerald-500",
                }}
              >
                {item.icon}
              </IconContext.Provider>
              <p className="group-hover:text-emerald-500">{item.title}</p>
            </div>
          </Link>
        );
      })}
      <hr className="border border-t-gray-200 mt-2" />
      <Link to="/login" onClick={handleLogOut}>
        <button className="p-2 bg-emerald-500 text-white font-medium w-full rounded-md mt-4">
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default UserMenu;
