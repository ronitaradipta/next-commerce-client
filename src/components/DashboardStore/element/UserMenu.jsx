import React from "react";
import { IconContext } from "react-icons";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

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

  const handleLogOut = () => {
    Cookies.remove("user");
  };

  return (
    <div className="absolute top-14 right-0 bg-white px-6 py-3 w-[300px] shadow-lg rounded-md">
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
