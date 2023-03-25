import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import formatRupiah from "../../../utils/formatRupiah";
import callApi from "../../../services/callApi";
import Spinner from "../../loading/Spinner";
import Notification from "../../loading/Notification";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const ModalTransaction = ({ data, selectedCard, setSelectedCard }) => {
  const [inputTracking, setInputTracking] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [message, setMessage] = useState({ error: "", success: "" });
  const dataUser = Cookies.get("user");
  const user = JSON.parse(dataUser);

  const orderStatus = (status) => {
    if (status === "waiting_payment") {
      return "Menunggu Pembayaran";
    } else if (status === "new") {
      return "Siap Dikirim";
    } else if (status === "in_progress") {
      return "Dalam Pengiriman";
    } else if (status === "delivered") {
      return "Pesanan Selesai";
    }
  };

  const updateTrackingNumber = async () => {
    try {
      setLoading(true);
      const response = await callApi.put(`/orders/tracking-update/${data.id}`, {
        trackingNumber: inputTracking,
      });
      setMessage({ success: response.data.message });
      setisSuccess(true);
      setTimeout(() => {
        setisSuccess(false);
        setLoading(false);
        window.location.reload();
      }, 2500);
    } catch (error) {
      console.log(error);
      setMessage({ error: error.response.data.error });
      setLoading(false);
    }
  };

  const handleOrderConfirmation = async () => {
    try {
      setLoading(true);
      const response = await callApi.put(`/orders/${data.id}/confirm-order`);
      console.log(response.data);
      setMessage({ success: response.data.message });
      setisSuccess(true);
      setTimeout(() => {
        setisSuccess(false);
        setLoading(false);
        setSelectedCard(null);
        window.location.reload();
      }, 2500);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Transition appear show={selectedCard !== null} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 overflow-y-scroll"
        onClose={() => setSelectedCard(null)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Detail Transaksi
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 my-3">
                    Status :{" "}
                    <span className="font-semibold">
                      {orderStatus(data.shippingStatus)}
                    </span>
                  </p>
                  <hr className="border-t border-t-gray-300" />
                  <p className="text-sm my-3">
                    No. Invoice :{" "}
                    <span className="text-emerald-500 font-semibold">
                      {data.orderNumber}
                    </span>
                  </p>
                  <hr className="border-t border-t-gray-300" />
                  <h3 className="font-semibold mt-4">Detail Produk</h3>
                  {data.OrderDetails.map((item) => {
                    return (
                      <>
                        {isSuccess ? (
                          <Notification SuccessMessage={message.success} />
                        ) : (
                          ""
                        )}
                        <div>
                          <Link
                            to={`/store-info/${item.product.store.id}`}
                            className="flex gap-2 items-center mt-4 mb-2"
                          >
                            <img
                              src={item.product.store.image}
                              alt=""
                              className="h-10 w-10"
                            />
                            <p className="text-sm font-medium text-gray-600">
                              {item.product.store.name}
                            </p>
                          </Link>
                        </div>
                        <div className="flex  gap-4" key={item.id}>
                          <div className="h-20 w-20">
                            <Link to={`/product-detail/${item.product.id}`}>
                              <img
                                src={item.product.ProductGalleries[0].image}
                                alt="image"
                              />
                            </Link>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm">
                              {item.product.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {item.quantity} x{" "}
                              {formatRupiah(item.product.price)}
                            </p>
                          </div>
                          <div>
                            <p>Total Harga :</p>
                            <p>
                              {formatRupiah(item.product.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  {user?.storeId === data.storeId &&
                    data.shippingStatus === "new" && (
                      <div className="flex flex-col gap-3">
                        <h3 className="font-semibold mt-4">Set Nomor Resi</h3>
                        <input
                          type="text"
                          onChange={(e) => setInputTracking(e.target.value)}
                          className="border border-gray-300 font-normal rounded p-2 w-full"
                        />
                        <button
                          className="px-4 py-2 bg-emerald-500 text-white rounded-md flex items-center justify-center"
                          onClick={updateTrackingNumber}
                        >
                          {loading ? <Spinner /> : "Simpan"}
                        </button>
                      </div>
                    )}
                  {data.shippingStatus === "in_progress" && (
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold mt-4">Nomor Resi</h3>
                      <p className="text-gray-500 text-base">
                        {data.trackingNumber}
                      </p>
                      {user?.storeId !== data.storeId && (
                        <button
                          className="px-4 py-2 bg-emerald-500 text-white rounded-md mt-4 flex items-center justify-center"
                          onClick={handleOrderConfirmation}
                        >
                          {loading ? <Spinner /> : "Konfirmasi Terima Pesanan"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalTransaction;
