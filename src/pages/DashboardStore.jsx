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
        <StatsCard title="Penghasilan" stat="Rp 13.500" />
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
                  className="bg-white w-full flex rounded-lg p-4 md:p-6 shadow-lg justify-between gap-2 flex-col lg:flex-row"
                  key={item.id}
                >
                  <div className="flex gap-2 md:w-8/12 lg:w-6/12 xl:w-4/12">

                    <img src={productimg} alt="image" className="w-24 h-24 " />
                    <div className=" flex flex-col justify-between">
                      <div className="text-sm w-full font-semibold md:text-[18px]">{title}</div>
                      <p className="text-gray-500 text-sm md:text-base ">
                        {quantity} x {discountedPrice}
                      </p>
                      <a
                        href="#"
                        className="font-medium text-emerald-500 text-[12px] md:text-sm"
                      >
                        Lihat Produk Lainnya
                      </a>
                    </div>
                  </div>
                  <div className="md:w-8/12 lg:w-4/12 py-2">
                    <div className="text-sm md:text-xl font-semibold">Alamat</div>
                    <p className="text-gray-500 text-[10px] md:text-sm">
                      Setra Duta Cemara, Kec. Kuta Selatan, Kota Badung,
                      Provinsi Bali - 80361
                    </p>
                  </div>
                  <div className="md:w-8/12 lg:w-4/12 py-2">
                    <div className="text-sm font-semibold md:text-xl">Nama Pemesan</div>
                    <p className="text-gray-500 text-[10px] md:text-sm">
                      Asep Surasep (+628 2020 11111)
                    </p>
                  </div>
                  <div className="md:w-8/12 lg:w-4/12 py-2">
                    <div className="text-gray-500 text-sm md:text-md">
                      Jumlah Pesanan {item.totalProducts} Barang
                    </div>
                    <p className="text-sm md:text-xl font-semibold">
                      Total Harga: Rp.500.000
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
