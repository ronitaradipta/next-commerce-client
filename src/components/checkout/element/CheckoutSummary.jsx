import React from "react";
import Spinner from "../../loading/Spinner";

const CheckoutSummary = ({
  data,
  inputQty,
  selectedCourier,
  handleCheckout,
  loading,
}) => {
  return (
    <div className="lg:w-3/12 w-full h-72 p-5 border border-gray-300 rounded-lg flex flex-col gap-4">
      <h2 className="font-bold text-lg">Ringkasan Belanja</h2>
      <div className="flex justify-between">
        <p>Total harga</p>
        <p>Rp. {data && data.price * inputQty}</p>
      </div>
      <div className="flex justify-between">
        <p>Ongkos kirim</p>
        <p>Rp. {selectedCourier}</p>
      </div>
      <hr className="border-t border-t-gray-300" />
      <div className="flex justify-between">
        <p className="font-bold text-lg">Total Tagihan</p>
        <p className="font-bold">
          Rp. {selectedCourier + data.price * inputQty}
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-emerald-500 py-4 w-full rounded-lg text-white flex items-center justify-center"
          onClick={handleCheckout}
        >
          {loading ? <Spinner /> : "Lanjutkan Pembayaran"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
