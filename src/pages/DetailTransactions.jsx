import React, { useEffect, useState } from "react";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import LayoutDashboard from "../components/layout/LayoutDashboard";
import api from "../services/callApi";
import productimg from "../assets/images/laptop-stand.png";

const DetailTransactions = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [dataTransaction, setDataTransaction] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);

  const fetchDataTransaction = async () => {
    try {
      const response = await api.get("orders/store");
      setDataTransaction(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataTransaction();
  }, []);

  const menu = [
    "Semua Pesanan",
    "Menunggu Pembayaran",
    "Siap Dikirim",
    "Dalam Pengiriman",
    "Pesanan Selesai",
  ];

  return (
    // <></>
    <LayoutDashboard>
      <TitlePage title="Daftar Pesanan" />
      <div className="bg-white w-full pt-5 pl-5 pr-5 rounded-lg mt-6 flex gap-4 md:gap-8 lg:gap-12 items-center font-medium text-sm md:text-base text-gray-500">
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
            dataTransaction.map((data, ) => {
              return (
                <div
                  className="bg-white w-full flex rounded-lg p-4 md:p-6 shadow-lg justify-between gap-2 flex-col lg:flex-row"
                  key={data}
                >
                  <div className="flex gap-x-5 md:w-8/12 lg:w-6/12 xl:w-4/12">
                    <img src={data.OrderDetails[0].product.productGalleries?.image} alt="image" className="w-16 h-16 md:w-24 md:h-24 " />
                    <div className="flex flex-col justify-between">
                      <div className="text-sm font-semibold md:text-[18px]">{data.OrderDetails[0].product.name}</div>
                      <p className="text-gray-500 text-sm md:text-base">
                        {data.OrderDetails[0].price}
                      </p>
                      <a
                        href="#"
                        className="font-medium text-emerald-500 text-[12px] md:text-sm"
                      >
                        Lihat Produk Lainnya
                      </a>
                    </div>
                  </div>
                  <div className=" md:w-8/12 lg:w-4/12 py-2">
                    <div className="font-semibold">Alamat</div>
                    <p className="text-gray-500 text-[10px] md:text-sm">
                      {data.customerAddress}
                    </p>
                  </div>
                  <div className="md:w-8/12 lg:w-4/12 py-2">
                    <div className="text-sm md:text-md font-semibold">Status</div>
                      <p className="text-gray-500 text-[10px] md:text-sm">{data.shippingStatus}</p>
                  </div>
                  <div className="md:w-8/12 lg:w-4/12 py-2">
                   
                    <div className="text-sm md:text-md font-semibold">Nama Pemesan</div>
                    <p className="text-gray-500 text-[10px] md:text-sm">
                      {data.customerDetail}
                    </p>
                  </div>
                  <div className="md:w-8/12 lg:w-4/12 py-2">
                    <h3 className="text-gray-500 text-sm md:text-md">
                      Jumlah Pesanan {data.OrderDetails[0].quantity} Barang
                    </h3>
                    <p className="text-sm md:text-xl font-semibold">
                      Total Harga : Rp. {data.totalPrice}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      {activeTabIndex === 1 && <div>
        dah
      </div>}
      {activeTabIndex === 2 && <div>Siap Dikirim</div>}
      {activeTabIndex === 3 && <div>Siap Dikirim</div>}
      {activeTabIndex === 4 && <div>Siap Dikirim</div>}
      {activeTabIndex === 5 && <div>Siap Dikirim</div>}
    </LayoutDashboard>
  );
};

export default DetailTransactions;
