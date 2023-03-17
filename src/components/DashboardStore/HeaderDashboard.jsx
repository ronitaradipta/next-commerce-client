import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import ClickOutsideHide from "../../utils/ClickOutsideHide";
import UserMenu from "./element/UserMenu";
import callApi from "../../services/callApi";

const HeaderDashboard = () => {
  const [user, setUser] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const dataUser = Cookies.get("user");

  const userButton = useRef(null);

  const getUserDetails = async () => {
    try {
      const response = await callApi.get("/users/profile");
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dataUser) {
      getUserDetails();
    }
  }, []);

  return (
    <ClickOutsideHide reff={userButton} state={setShowMenu}>
      <div className="w-full h-16 shadow-lg bg-white flex items-center justify-end px-4 sticky top-0">
        {user && (
          <div
            className="flex items-center gap-3 cursor-pointer relative"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <img
              src={user.user_profile.avatar}
              alt="profile"
              className="w-11 rounded-full border border-gray-400"
            />
            <div className="flex gap-2 items-center">
              <p className="text-sm">Hi, {user.name}</p>
              {showMenu && <UserMenu />}
            </div>
          </div>
        )}
      </div>
    </ClickOutsideHide>
  );
};

export default HeaderDashboard;
