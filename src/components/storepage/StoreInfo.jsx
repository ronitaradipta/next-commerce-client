import React from "react";
import { BsShare } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import storeStatus from "../../assets/store/store-status-gold.png";
import storeLogo from "../../assets/store/store-logo.png";

const StoreInfo = ({ setModalBox }) => {
  return (
    <div className="px-0 md:px-5 py-5 w-full flex flex-wrap justify-between items-center mt-5 border rounded-xl">
      <div className="leftside flex justify-center md:justify-start w-full md:w-1/2">
        <div className="store_display flex items-center mr-5">
          <div className="image_border border-2 rounded-full w-[80px] h-[80px] overflow-hidden ">
            <img className="object-cover" src={storeLogo} alt="store-diplay-picture" />
          </div>
        </div>
        <div className="store_info">
          <div className="store_name flex items-center gap-2">
            <span className="store-status w-[20px] h-[20px] overflow-hidden">
              <img className="object-cover" src={storeStatus} alt="storesLogoStatus" />
            </span>
            <h2 className="text-[20px] font-bold">Toko Serba Ada semua</h2>
          </div>
          <div className="store_status flex gap-2 mb-2">
            <div className="online_status text-[15px] font-semibold text-green-500">
              <b> • </b>Online
            </div>
            <div className="location text-[15px]">
              <b> • </b>Jakarta
            </div>
          </div>
          <div className="store_support flex items-center flex-wrap gap-2">
            <div className="share flex flex-col md:flex-row gap-2">
              <button className="py-1 px-2 w-[135px] text-white bg-green-600 border-green-600 border-[thin] rounded-md font-semibold">Follow</button>
              <button className="py-1 px-2 w-[135px] text-green-600 bg-white border-green-600 border-[thin] rounded-md font-semibold">Chat Seller</button>
            </div>
            <div className="share flex flex-col md:flex-row gap-2">
              <button className="py-2 px-2 bg-white border-[thin]  rounded-md " onClick={setModalBox}>
                <BsShop />
              </button>
              <button className="py-2 px-2  bg-white border-[thin]  rounded-md">
                <BsShare />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="rightside flex justify-center md:justify-end w-full md:w-1/2 gap-2 py-5 ">
        <div className="rightside flex">
          <div className="review flex flex-col items-center px-5 border-r-2">
            <div className="star flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <h2 className="text-[15px] font-bold">4.8</h2>
            </div>
            <div className="title text-[13px] lg:text-[15px] text-center">Rating & Ulasan</div>
          </div>
          <div className="review flex flex-col items-center px-5 border-r-2">
            <div className="star flex items-center gap-2">
              <h2 className="text-[15px] font-bold">± 2 jam</h2>
            </div>
            <div className="title text-[13px] lg:text-[15px] text-center">Pesanan diproses</div>
          </div>
          <div className="review flex flex-col items-center px-5 ">
            <div className="star flex items-center gap-2">
              <h2 className="text-[15px] font-bold">Buka 24 Jam</h2>
            </div>
            <div className="title text-[13px] lg:text-[15px] text-center">Jam Operasi Toko</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
