import React from "react";
import { MdClose } from "react-icons/md";
import { MdShareLocation } from "react-icons/md";
import { siCepat } from "../../../assets/store/sicepat_logo.jpg";

const StoreDetails = ({ setModalBox }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] z-[99] fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center" onClick={setModalBox}>
      <div className="mx-auto max-w-screen-lg flex items-center justify-center absolute z-[999]  ">
        <div className="w-[95%] md:w-[85%] max-h-[90vh]  bg-white rounded-xl flex flex-col text-[35px] ">
          <div className="header relative h-[20%] py-5 flex justify-center items-center border-b-2 ">
            <h2 className="text-[20px] font-bold">TOKO SERBA ADA SEMUA</h2>
            <button className="rounded-full border-2 border-black text-[20px] absolute right-5 top-5" onClick={setModalBox}>
              <MdClose />
            </button>
          </div>
          <div className="details_info h-[80%] overflow-auto px-10">
            <div className="box min-h-[80vh] ">
              <div className="topside flex flex-wrap mb-5">
                <div className="store_info md:w-[30%] py-5  ">
                  <h2 className="text-[20px] font-semibold mb-2">Deskripsi Toko</h2>
                  <p className="text-[15px] mb-2 text-justify">Toko Kami Selalu menjunjung tinggi kualitas pada produk sehingga produk selalu baru dan keadaan baik.</p>
                  <div className="location flex gap-2 items-center">
                    <div className="logo text-[16px]">
                      <MdShareLocation />
                    </div>
                    <div className="title text-[16px]">Jakarta</div>
                  </div>
                  <div className="location flex gap-2 items-center">
                    <div className="logo text-[16px]">
                      <MdShareLocation />
                    </div>
                    <div className="title text-[16px]">
                      Buka Sejak : <span> Oktober 2022</span>
                    </div>
                  </div>
                </div>
                <div className="store_description w-full md:w-[70%] pl-10">
                  <div className="title text-[20px] font-semibold pb-5 border-b-2  py-5 ">Catatan Toko</div>
                  <div className="title text-[20px] font-semibold pb-5 border-b-2  py-5 ">Catatan Toko</div>
                </div>
              </div>

              <div className="bottomside">
                <div className="title text-[20px] font-semibold mb-2">Layanan Pengiriman</div>
                <div className="option flex flex-wrap">
                  <div className="py-2 px-2 w-1/2 md:w-1/4">
                    <div className="p-1 flex gap-2 border rounded">
                      <div className="logo w-[80px]">
                        <img src={siCepat} alt="sicepat" />
                      </div>
                      <div className="title">
                        <h2 className="text-[15px] font-semibold">SiCepat Express</h2>
                        <p className="text-[15px]">Reguler</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 px-2 w-1/2 md:w-1/4">
                    <div className="p-1 flex gap-2 border rounded">
                      <div className="logo w-[80px]">
                        <img src={siCepat} alt="sicepat" />
                      </div>
                      <div className="title">
                        <h2 className="text-[15px] font-semibold">SiCepat Express</h2>
                        <p className="text-[15px]">Reguler</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 px-2 w-1/2 md:w-1/4">
                    <div className="p-1 flex gap-2 border rounded">
                      <div className="logo w-[80px]">
                        <img src={siCepat} alt="sicepat" />
                      </div>
                      <div className="title">
                        <h2 className="text-[15px] font-semibold">SiCepat Express</h2>
                        <p className="text-[15px]">Reguler</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 px-2 w-1/2 md:w-1/4">
                    <div className="p-1 flex gap-2 border rounded">
                      <div className="logo w-[80px]">
                        <img src={siCepat} alt="siCepat" />
                      </div>
                      <div className="title">
                        <h2 className="text-[15px] font-semibold">SiCepat Express</h2>
                        <p className="text-[15px]">Reguler</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
