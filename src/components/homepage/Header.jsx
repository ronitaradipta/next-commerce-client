import React from "react";
import logo from "../../assets/images/logo.png";
import { IconContext } from "react-icons";
import { MdShoppingCart, MdOutlineSearch } from "react-icons/md";

const Header = () => {
  return (
    <header className="shadow-sm sticky top-0 bg-white">
      <div className="container py-6 px-5 mx-auto">
        <nav className="flex justify-between items-center gap-2">
          <img
            src={logo}
            alt="nextcommerce"
            className="w-2/12 hidden md:block"
          />
          <form className="w-full md:w-8/12">
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Cari Produk/Nama toko"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-1 bottom-0.5 bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-6 py-2"
              >
                <IconContext.Provider
                  value={{ className: "text-white w-6 h-6" }}
                >
                  <MdOutlineSearch />
                </IconContext.Provider>
              </button>
            </div>
          </form>
          <div className="flex items-center justify-end">
            <div className="w-8 h-8 md:mr-4">
              <IconContext.Provider
                value={{ className: "text-gray-600 w-8 h-8" }}
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
