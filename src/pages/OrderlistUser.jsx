import React, { useState, useEffect } from "react";
import NoDataPreview from "../components/DashboardStore/element/NoDataPreview";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import DetailTransakionList from "../components/DashboardUser/DetailTransakionList";
import PaymentConfirmation from "../components/DashboardUser/UserElements/PaymentConfirmation";
import Header from "../components/homepage/Header";
import api from "../services/callApi";

const OrderlistUser = () => {
  const [dataTransaction, setDataTransaction] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const fetchDataTransaction = async () => {
    try {
      const response = await api.get("orders/user");
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
    <div className="min-h-[100vh] bg-gray-200">
      <Header />
      <PaymentConfirmation closeModal={closeModal} isOpen={isOpen} />
      <section className="p-10">
        <div className="flex justify-between">
          <TitlePage title="Riwayat Pesanan" />
          <button
            className="text-white font-semibold bg-emerald-500 rounded-md py-2 px-4"
            onClick={openModal}
          >
            Konfirmasi Pembayaran
          </button>
        </div>
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
            {dataTransaction.length > 0 ? (
              dataTransaction.map((data) => {
                return <DetailTransakionList data={data} key={data.id} />;
              })
            ) : (
              <NoDataPreview />
            )}
          </div>
        )}
        {activeTabIndex === 1 && (
          <div className="flex flex-col gap-6 mt-6">
            {filterShippingStatusWaitingPayment.length > 0 ? (
              filterShippingStatusWaitingPayment.map((data) => {
                return <DetailTransakionList data={data} key={data.id} />;
              })
            ) : (
              <NoDataPreview />
            )}
          </div>
        )}
        {activeTabIndex === 2 && (
          <div className="flex flex-col gap-6 mt-6">
            {filterShippingStatusNew.length > 0 ? (
              filterShippingStatusNew.map((data) => {
                return <DetailTransakionList data={data} key={data.id} />;
              })
            ) : (
              <NoDataPreview />
            )}
          </div>
        )}
        {activeTabIndex === 3 && (
          <div className="flex flex-col gap-6 mt-6">
            {filterShippingStatusInProgress.length > 0 ? (
              filterShippingStatusInProgress.map((data) => {
                return <DetailTransakionList data={data} key={data.id} />;
              })
            ) : (
              <NoDataPreview />
            )}
          </div>
        )}
        {activeTabIndex === 4 && (
          <div className="flex flex-col gap-6 mt-6">
            {filterShippingStatusDelivered.length > 0 ? (
              filterShippingStatusDelivered.map((data) => {
                return <DetailTransakionList data={data} key={data.id} />;
              })
            ) : (
              <NoDataPreview />
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default OrderlistUser;
