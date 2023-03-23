import React, { useState } from "react";
import { MdChevronLeft, MdDashboard, MdReceipt, MdSettings, MdShoppingBag } from "react-icons/md";
import store from "../../assets/images/store-logo.png";
import DropdownMenu from "./DropdownMenu";
import DropdownContainer from "./element/DropdownContainer";
import ListMenu from "./ListMenu";

const SideBarDashboard = ({ data }) => {
  const [menuToggle, setMenuToggle] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);

  // icon style
  const iconStyle = `${!menuToggle ? "w-7 h-7" : "w-6 h-6"} transition-all duration-300`;

  const menuStyle = `w-full px-3 text-sm md:text-base font-medium flex items-center gap-2 ${!menuToggle && "justify-center"}`;

  return (
    <div className={`${menuToggle ? "md:w-4/12 lg:w-2/12" : "w-20"} min-h-[150vh] bg-white border-r border-gray-300 py-4 sticky top-0 left-0 transition-all duration-300`}>
      <button className="flex items-center justify-center text-gray-500 font-medium cursor-pointer w-full text-sm" onClick={() => setMenuToggle((prev) => !prev)}>
        <MdChevronLeft className={`${menuToggle ? "" : "rotate-180 transform"} h-6 w-6 transition-transform duration-300`} />
        {menuToggle && "Sembunyikan Menu"}
      </button>
      <div className="py-3 border-t border-b border-gray-300 mt-4 md:mt-6 lg:mt:8 flex gap-3 items-center justify-center px-4">
        <img src={data.image} alt="store" className="w-9 rounded-full" />
        {menuToggle && (
          <div>
            <h3 className="text-sm md:text-base font-semibold">{data.name}</h3>
            <p className="text-gray-500 text-sm">{data.city}</p>
          </div>
        )}
      </div>
      <div className="mt-4 md:mt-10 lg:mt-16">
        <ul>
          <ListMenu icon={<MdDashboard className={iconStyle} />} title={`${menuToggle ? "Dashboard" : ""}`} link="/store-dashboard" className={menuStyle} />
          {menuToggle ? (
            <DropdownMenu icon={<MdShoppingBag className={iconStyle} />} />
          ) : (
            <button className="w-full relative" onMouseEnter={() => setShowSubmenu(true)} onMouseLeave={() => setShowSubmenu(false)}>
              <ListMenu icon={<MdShoppingBag className={iconStyle} />} className={menuStyle} />
              {showSubmenu && <DropdownContainer />}
            </button>
          )}

          <ListMenu icon={<MdReceipt className={iconStyle} />} title={`${menuToggle ? "Pesanan" : ""}`} link="/store-transaction" className={menuStyle} />
          <ListMenu icon={<MdSettings className={iconStyle} />} title={`${menuToggle ? "Pengaturan Toko" : ""}`} link="/store-settings" className={menuStyle} />
        </ul>
      </div>
    </div>
  );
};

export default SideBarDashboard;
