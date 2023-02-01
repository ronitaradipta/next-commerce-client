import React, { useEffect, useState } from "react";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import LayoutDashboard from "../components/layout/LayoutDashboard";
import api from "../services/api";
import productimg from "../assets/images/laptop-stand.png";

const DetailTransactions = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [dataTransaction, setDataTransaction] = useState([]);

  const fetchDataTransaction = async () => {
    try {
      const response = await api.get("/carts/?limit=5");
      console.log(response.data.carts);
      setDataTransaction(response.data.carts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataTransaction();
  }, []);

  const menu = [
    "Semua Pesanan",
    "Pesanan Dikirim",
    "Siap Dikirim",
    "Dalam Pengiriman",
    "Pesanan Selesai",
  ];

  return (
    <LayoutDashboard>
      <TitlePage title="Daftar Pesanan" />
      <div className="bg-white w-full pt-5 pl-5 pr-5 rounded-lg mt-6 flex gap-12 items-center font-medium text-gray-500">
        {menu.map((item, idx) => {
          return (
            <button
              className={` pb-5 ${
                idx === activeTabIndex &&
                "border-emerald-500 text-emerald-500 border-b-2"
              } `}
              key={idx}
              onClick={() => setActiveTabIndex(idx)}
            >
              {item}
            </button>
          );
        })}
      </div>
      {activeTabIndex === 0 && (
        <div className="flex flex-col gap-6 mt-6">
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
        </div>
      )}
      {activeTabIndex === 1 && <div>Pesanan Dikirim</div>}
      {activeTabIndex === 2 && <div>Siap Dikirim</div>}
    </LayoutDashboard>
  );
};

export default DetailTransactions;
