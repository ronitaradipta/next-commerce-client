import React from "react";
import logo from "../../assets/images/logo.png";
import { IconContext } from "react-icons";
import { MdShoppingCart } from "react-icons/md";
import SearchProduct from "./element/SearchProduct";

const Header = () => {
  return (
    <header className="shadow-sm sticky top-0 bg-white">
      <div className="container py-6 px-5 mx-auto">
        <nav className="flex justify-between items-center gap-2">
          <a href="/" className="w-2/12 hidden md:block">
            <img src={logo} alt="nextcommerce" />
          </a>
          <SearchProduct />
          <div className="flex items-center justify-end">
            <div className="w-8 h-8 md:mr-4 cursor-pointer">
              <IconContext.Provider
                value={{
                  className: "text-gray-600 w-8 h-8 hover:text-gray-500",
                }}
              >
                <MdShoppingCart />
              </IconContext.Provider>
            </div>
            <button className="bg-emerald-500 text-white px-5 py-3 rounded-lg hover:bg-emerald-600 text-sm hidden md:block">
              Daftar/Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
