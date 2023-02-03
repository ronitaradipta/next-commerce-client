import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputAddProduct from "../components/DashboardStore/element/InputAddProduct";
import InputMedia from "../components/DashboardStore/element/InputMedia";
import InputSelect from "../components/DashboardStore/element/InputSelect";
import SwitchToggle from "../components/DashboardStore/element/SwitchToggle";
import TextArea from "../components/DashboardStore/element/TextArea";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import HeaderDashboard from "../components/DashboardStore/HeaderDashboard";
import api from "../services/api";

const AddProduct = () => {
  const [datas, setDatas] = useState([]);

  const fetchAllCategory = async () => {
    try {
      const category = await api.get("/products/categories");
      setDatas(category.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <HeaderDashboard />
      <div className="w-10/12 mx-auto pt-10 pb-20">
        <TitlePage title="Tambah Produk" />
        <div className="w-full bg-white rounded-lg flex p-6 gap-6 mt-6 shadow-md">
          <div className="w-3/12">
            <h3 className="font-semibold text-base mb-6">Upload Gambar</h3>
            <p className="text-sm">
              Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px
              (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px).
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4 w-full ">
            <InputMedia title="Foto Utama" name="fotoutama" id="fotoutama" />
            <InputMedia title="Foto 2" name="foto2" id="foto2" />
            <InputMedia title="Foto 3" name="foto3" id="foto3" />
            <InputMedia title="Foto 4" name="foto4" id="foto4" />
            <InputMedia title="Foto 5" name="foto5" id="foto5" />
          </div>
        </div>
        <div className="w-full bg-white p-6 mt-6 rounded-lg shadow-md">
          <InputAddProduct
            label="Nama Produk"
            placeholder="Contoh : Tas Selempang Pria"
            type="text"
          />
          <InputSelect label="Kategori" data={datas} />
          <TextArea
            label="Deskripsi Produk"
            placeholder="Tulis deskripsi produk..."
          />
          <InputAddProduct label="Harga" placeholder="Rp..." type="number" />
          <SwitchToggle label="Status Produk" />
          <InputAddProduct
            label="Stok Produk"
            placeholder="Masukkan jumlah stok"
            type="number"
          />
        </div>
        <div className="w-full mt-6 flex justify-end gap-4">
          <Link to="/store-dashboard">
            <button className="font-medium p-3 border border-gray-300 text-gray-500 w-48 rounded-md">
              Batal
            </button>
          </Link>
          <button className="font-medium p-3 bg-emerald-500 text-white w-48 rounded-md">
            Tambah Produk
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
