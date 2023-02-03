import React, { Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import StatsCard from "../components/DashboardStore/StatsCard";
import LayoutDashboard from "../components/layout/LayoutDashboard";
import api from "../services/api";
import productimg from "../assets/images/laptop-stand.png";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import ProductLoading from "../components/loading/ProductLoading";

const DashboardStore = () => {
  const [dataTransaction, setDataTransaction] = useState([]);

  const fetchDataTransaction = async () => {
    try {
      const response = await api.get("/carts/?limit=5");
      setDataTransaction(response.data.carts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataTransaction();
  }, []);

  return (
    <LayoutDashboard>
      <TitlePage title="Lihat Pencapaianmu Hari Ini" />
      <div className="grid gap-4 grid-cols-3 mt-6 md:w-8/12 h-32">
        <StatsCard title="Jumlah Pesanan" stat="120" />
        <StatsCard title="Penghasilan" stat="Rp13.500K" />
        <StatsCard title="Jumlah Pesanan" stat="35" />
      </div>
      <h2 className="font-semibold text-xl mt-6">Riwayat Pesanan</h2>
      <div className="flex flex-col gap-6 mt-6">
        <Suspense fallback={<ProductLoading />}>
          {dataTransaction.length > 0 &&
            dataTransaction.map((item) => {
              const { title, discountedPrice, quantity } = item.products[0];
              return (
                <div
                  className="bg-white w-full flex rounded-lg p-6 shadow-lg justify-between gap-4"
                  key={item.id}
                >
                  <img src={productimg} alt="image" className="w-24" />
                  <div className="w-4/12 flex flex-col justify-between">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-gray-500 text-base">
                      {quantity} x {discountedPrice}
                    </p>
                    <a
                      href="#"
                      className="font-medium text-emerald-500 text-sm"
                    >
                      Lihat Produk Lainnya
                    </a>
                  </div>
                  <div className="w-4/12">
                    <h3 className="font-semibold">Alamat</h3>
                    <p className="text-gray-500 text-sm">
                      Setra Duta Cemara, Kec. Kuta Selatan, Kota Badung,
                      Provinsi Bali - 80361
                    </p>
                  </div>
                  <div className="w-4/12">
                    <h3 className="font-semibold">Nama Pemesan</h3>
                    <p className="text-gray-500 text-sm">
                      Asep Surasep (+628 2020 11111)
                    </p>
                  </div>
                  <div className="w-4/12">
                    <h3 className="text-gray-500">
                      Jumlah Pesanan {item.totalProducts} Barang
                    </h3>
                    <p className="text-xl font-semibold">
                      Total Harga : Rp.500.000
                    </p>
                  </div>
                </div>
              );
            })}
        </Suspense>
      </div>
    </LayoutDashboard>
  );
};

export default DashboardStore;
