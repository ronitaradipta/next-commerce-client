import React, { useEffect, useState } from "react";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import LayoutDashboard from "../components/layout/LayoutDashboard";
import api from "../services/callApi";
import productimg from "../assets/images/laptop-stand.png";
import { Link } from "react-router-dom";
import DetailTransakionList from "../components/DashboardUser/DetailTransakionList";

const DetailTransactions = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [dataTransaction, setDataTransaction] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);

  const fetchDataTransaction = async () => {
    try {
      const response = await api.get("orders/store");
      setDataTransaction(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataTransaction();
  }, []);

  const filterShippingStatusDelivered = dataTransaction.filter((data) => {
    return data.shippingStatus === "delivered";
  });

  const filterShippingStatusWaitingPayment = dataTransaction.filter((data) => {
    return data.shippingStatus === "waiting_payment";
  });
  const filterShippingStatusNew = dataTransaction.filter((data) => {
    return data.shippingStatus === "new";
  });
  const filterShippingStatusInProgress = dataTransaction.filter((data) => {
    return data.shippingStatus === "in_progress";
  });

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
            dataTransaction.map((data) => {
              return (
                <DetailTransakionList data={data} key={data.id}/>
              );
            })}
        </div>
      )}
      {activeTabIndex === 1 && (
        <div className="flex flex-col gap-6 mt-6">
          {filterShippingStatusWaitingPayment.length > 0 &&
            filterShippingStatusWaitingPayment.map((data) => {
              return (
                <DetailTransakionList data={data} key={data.id}/>
              );
            })}
        </div>
      )}
      {activeTabIndex === 2 && (
        <div className="flex flex-col gap-6 mt-6">
          {filterShippingStatusNew.length > 0 &&
            filterShippingStatusNew.map((data) => {
              return (
                <DetailTransakionList data={data} key={data.id}/>
              );
            })}
        </div>
      )}
      {activeTabIndex === 3 && (
        <div className="flex flex-col gap-6 mt-6">
          {filterShippingStatusInProgress.length > 0 &&
            filterShippingStatusInProgress.map((data) => {
              return (
                <DetailTransakionList data={data} key={data.id}/>
              );
            })}
        </div>
      )}
      {activeTabIndex === 4 && (
        <div className="flex flex-col gap-6 mt-6">
          {filterShippingStatusDelivered.length > 0 &&
            filterShippingStatusDelivered.map((data) => {
              return (
                <DetailTransakionList data={data} key={data.id}/>
              );
            })}
        </div>
      )}
    </LayoutDashboard>
  );
};

export default DetailTransactions;
