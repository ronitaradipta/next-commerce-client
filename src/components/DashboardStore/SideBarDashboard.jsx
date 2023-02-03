import React, { useState } from "react";
import {
  MdChevronLeft,
  MdDashboard,
  MdReceipt,
  MdSettings,
  MdShoppingBag,
} from "react-icons/md";
import store from "../../assets/images/store-logo.png";
import DropdownMenu from "./DropdownMenu";
import DropdownContainer from "./element/DropdownContainer";
import ListMenu from "./ListMenu";

const SideBarDashboard = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);

  // icon style
  const iconStyle = `${
    !menuToggle ? "w-7 h-7" : "w-6 h-6"
  } transition-all duration-300`;

  const menuStyle = `w-full text px-3 text-base font-medium flex items-center gap-2 ${
    !menuToggle && "justify-center"
  }`;

  return (
    <div
      className={`${
        menuToggle ? "w-2/12" : "w-20"
      } min-h-[100vh] bg-white border-r border-gray-300 py-4 sticky top-0 left-0 transition-all duration-300`}
    >
      <button
        className="flex items-center justify-center text-gray-500 gap-2 font-medium cursor-pointer w-full"
        onClick={() => setMenuToggle((prev) => !prev)}
      >
        <MdChevronLeft
          className={`${
            menuToggle ? "" : "rotate-180 transform"
          } h-6 w-6 transition-transform duration-300`}
        />
        {menuToggle && "Sembunyikan Menu"}
      </button>
      <div className="py-3 border-t border-b border-gray-300 mt-8 flex gap-3 items-center justify-center px-4">
        <img src={store} alt="store" className="w-9" />
        {menuToggle && (
          <div>
            <h3 className="text-base font-semibold">Toko Sederhana</h3>
            <p className="text-gray-500 text-sm">Surabaya</p>
          </div>
        )}
      </div>
      <div className="mt-16">
        <ul>
          <ListMenu
            icon={<MdDashboard className={iconStyle} />}
            title={`${menuToggle ? "Dashboard" : ""}`}
            link="/store-dashboard"
            className={menuStyle}
          />
          {menuToggle ? (
            <DropdownMenu icon={<MdShoppingBag className={iconStyle} />} />
          ) : (
            <button
              className="w-full relative"
              onMouseEnter={() => setShowSubmenu(true)}
              onMouseLeave={() => setShowSubmenu(false)}
            >
              <ListMenu
                icon={<MdShoppingBag className={iconStyle} />}
                className={menuStyle}
              />
              {showSubmenu && <DropdownContainer />}
            </button>
          )}

          <ListMenu
            icon={<MdReceipt className={iconStyle} />}
            title={`${menuToggle ? "Pesanan" : ""}`}
            link="/store-transaction"
            className={menuStyle}
          />
          <ListMenu
            icon={<MdSettings className={iconStyle} />}
            title={`${menuToggle ? "Pengaturan Toko" : ""}`}
            link="/store-settings"
            className={menuStyle}
          />
        </ul>
      </div>
    </div>
  );
};

export default SideBarDashboard;
