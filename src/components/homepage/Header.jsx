import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import { IconContext } from "react-icons";
import { MdArrowDropDown, MdShoppingCart } from "react-icons/md";
import SearchProduct from "./element/SearchProduct";
import { Link } from "react-router-dom";
import CartList from "./element/CartList";
import api from "../../services/api";
import Cookies from "js-cookie";
import UserMenuCard from "../auth/elements/UserMenuCard";
import ClickOutsideHide from "../../utils/ClickOutsideHide";

const Header = () => {
  const [cartDatas, setcartDatas] = useState([]);
  const [showCartContainer, setShowCartContainer] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState("");
  const dataUser = Cookies.get("user");

  const fetchCartData = async () => {
    try {
      const product = await api.get(`/users/5/carts`);
      const data = product.data.carts[0].products;
      setcartDatas(data);
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
      setUser(JSON.parse(dataUser));
    }
  }, []);

  return (
    <header className="shadow-sm sticky top-0 bg-white z-10">
      <div className="container py-6 px-5 mx-auto">
        <nav className="flex justify-between items-center gap-2">
          <div className="w-2/12 hidden md:block">
            <Link to="/">
              <img src={logo} alt="nextcommerce" />
            </Link>
          </div>
          <SearchProduct />
          <div className="flex items-center justify-end relative">
            <ClickOutsideHide
              reff={cartButton}
              state={setShowCartContainer}
              className="flex items-center"
            >
              <a
                className="w-8 h-8 md:mr-4 cursor-pointer relative"
                onClick={() => setShowCartContainer((prev) => !prev)}
              >
                <IconContext.Provider
                  value={{
                    className: "text-gray-600 w-8 h-8 hover:text-gray-500",
                  }}
                >
                  <MdShoppingCart />
                </IconContext.Provider>
                {user && cartDatas.length ? (
                  <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-5 h-5 animate-bounce text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">
                    {cartDatas.length}
                  </div>
                ) : (
                  ""
                )}
              </a>
            </ClickOutsideHide>
            {showCartContainer && <CartList data={cartDatas} user={user} />}

            {user && (
              <ClickOutsideHide reff={userButton} state={setShowMenu}>
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
                    <IconContext.Provider
                      value={{
                        className: "text-gray-600 w-8 h-8 hover:text-gray-500",
                      }}
                    >
                      <MdArrowDropDown />
                    </IconContext.Provider>
                  </div>
                </div>
                {showMenu && <UserMenuCard />}
              </ClickOutsideHide>
            )}

            {!user && (
              <button className="bg-emerald-500 text-white px-5 py-3 rounded-lg hover:bg-emerald-600 text-sm hidden md:block">
                <Link to="/login">Daftar/Login</Link>
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
