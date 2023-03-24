import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import { IconContext } from "react-icons";
import { MdArrowDropDown, MdShoppingCart } from "react-icons/md";
import SearchProduct from "./element/SearchProduct";
import { Link } from "react-router-dom";
import CartList from "./element/CartList";
import callApi from "../../services/callApi";
import Cookies from "js-cookie";
import UserMenuCard from "../auth/elements/UserMenuCard";
import ClickOutsideHide from "../../utils/ClickOutsideHide";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ DataChange }) => {
  const dataUser = Cookies.get("user");
  const [user, setUser] = useState("");
  const [cartDatas, setcartDatas] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCartContainer, setShowCartContainer] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fetchCartData = async () => {
    try {
      const product = await callApi.get(`/carts/product`);
      const data = product.data.data.products;
      setcartDatas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await callApi.get("/users/profile");
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const userButton = useRef(null);
  const cartButton = useRef(null);

  useEffect(() => {
    if (dataUser) {
      getUserDetails();
    }
  }, [DataChange]); // this will render the header everytime DataChange when user profile updated

  return (
    <header className="shadow-sm sticky top-0 bg-white z-10">
      <div className="container py-6 px-5 mx-auto">
        <div className=" flex justify-center items-center md:hidden py-2">
          <Link to="/">
            <img src={logo} className="w-[250px]" alt="nextcommerce" />
          </Link>
        </div>
        <nav className="flex justify-between items-center gap-4">
          <div className="w-2/12 hidden md:block">
            <Link to="/">
              <img src={logo} alt="nextcommerce" />
            </Link>
          </div>
          <SearchProduct />
          <div className="flex items-center justify-end relative">
            <ClickOutsideHide reff={cartButton} state={setShowCartContainer} className="flex items-center">
              <a className="w-8 h-8 md:mr-4 cursor-pointer relative" onClick={() => setShowCartContainer((prev) => !prev)}>
                <IconContext.Provider
                  value={{
                    className: "text-gray-600 w-8 h-8 hover:text-gray-500",
                  }}
                >
                  <MdShoppingCart />
                </IconContext.Provider>
                {user && cartDatas?.length ? (
                  <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-5 h-5 animate-bounce text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">{cartDatas.length}</div>
                ) : (
                  ""
                )}
              </a>
            </ClickOutsideHide>
            {showCartContainer && <CartList data={cartDatas} user={user} />}

            {user && (
              <ClickOutsideHide reff={userButton} state={setShowMenu}>
                <div className="flex items-center gap-3 cursor-pointer relative" onClick={() => setShowMenu((prev) => !prev)}>
                  <img src={user.user_profile.avatar} alt="profile" className="w-11 rounded-full border border-gray-400 ml-3" />
                  <div className="flex gap-2 items-center">
                    <p className="text-sm">Hi, {user.name}</p>
                    <IconContext.Provider
                      value={{
                        className: "text-gray-600 w-8 h-8 hover:text-gray-500",
                      }}
                    >
                      <MdArrowDropDown />
                    </IconContext.Provider>
                  </div>
                </div>
                {showMenu && <UserMenuCard user={user} />}
              </ClickOutsideHide>
            )}

            {!user && (
              <button className="bg-emerald-500 text-white px-2 md:px-5 py-3 rounded-lg hover:bg-emerald-600   md:text-sm text-[10px] md:block ml-4">
                <Link to="/login">Daftar/Login</Link>
              </button>
            )}
            {!user && (
              <div className="md:hidden">
                <button onClick={toggleMenu} className="outline-none focus:outline-none" type="button">
                  {isMenuOpen ? <FaTimes className="text-gray-500 text-2xl" /> : <FaBars className="text-gray-500 text-2xl" />}
                </button>
              </div>
            )}
            <div className={`${isMenuOpen ? "" : "hidden"} md:hidden fixed w-full h-full top-16 left-0 flex justify-center items-center`}>
              <div className="w-full bg-white md:w-1/2 min-h-[24rem] rounded-lg p-7 flex flex-col gap-3">
                {!user && (
                  <button className="bg-emerald-500 text-white px-5 py-3 rounded-lg hover:bg-emerald-600 text-sm">
                    <Link to="/login">Daftar/login</Link>
                  </button>
                )}
                <Link to="/" className="text-gray-500 text-lg font-semibold mb-5 hover:text-emerald-500" onClick={toggleMenu}>
                  Home
                </Link>
                <Link to="/about" className="text-gray-500 text-lg font-semibold mb-5 hover:text-emerald-500" onClick={toggleMenu}>
                  About Us
                </Link>
                <Link to="/contact" className="text-gray-500 text-lg font-semibold mb-5 hover:text-emerald-500" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
