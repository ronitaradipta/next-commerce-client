import React from "react";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import LayoutDashboard from "../components/layout/LayoutDashboard";
import store from "../assets/images/store-logo.png";

const StoreSetting = () => {
  return (
    <LayoutDashboard>
      <TitlePage title="Toko Sederhana" />
      <div className=" bg-white px-8 py-8 lg:px-20 w-full rounded-lg shadow-lg mt-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
        <img src={store} alt="image" className="w-40 h-40" />
        <div className="md:w-4/12 px-12 md:px-1">
          <p className="text-sm mb-4 ">
            Ukuran optimal 300 x 300 piksel dengan Besar file: Maksimum
            10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan:
            JPG, JPEG, PNG
          </p>
          <button className="border-2 p-2 w-56 rounded font-medium text-gray-500 border-gray-300">
            Edit Foto Toko
          </button>
        </div>
        <div className=" md:w-4/12 px-12 md:px-1">
          <h3 className="text-base font-semibold mb-3">Nama Toko</h3>
          <p className="text-sm mb-3">Toko Sederhana</p>
          <h3 className="text-base font-semibold mb-3">Deskripsi Toko</h3>
          <textarea
            rows="4"
            className="w-full border border-gray-300 mb-3"
          ></textarea>
          <button className="bg-emerald-500 rounded-md text-white font-medium p-3 w-56">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default StoreSetting;
