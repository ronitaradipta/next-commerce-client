import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import ClickOutsideHide from "../../utils/ClickOutsideHide";
import UserMenu from "./element/UserMenu";

const HeaderDashboard = () => {
  const [user, setUser] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const dataUser = Cookies.get("user");

  const userButton = useRef(null);

  useEffect(() => {
    if (dataUser) {
      setUser(JSON.parse(dataUser));
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
              src={user.image}
              alt="profile"
              className="w-11 rounded-full border border-gray-400"
            />
            <div className="flex gap-2 items-center">
              <p className="text-sm">Hi, {user.firstName}</p>
              {showMenu && <UserMenu />}
            </div>
          </div>
        )}
      </div>
    </ClickOutsideHide>
  );
};

export default HeaderDashboard;
