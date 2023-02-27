import React from "react";
import { Link } from "react-router-dom";

const CheckoutSummary = ({ data, inputQty }) => {
  const shippingFee = 1;
  return (
    <div className="lg:w-3/12 w-full h-72 p-5 border border-gray-300 rounded-lg flex flex-col gap-4">
      <h2 className="font-bold text-lg">Ringkasan Belanja</h2>
      <div className="flex justify-between">
        <p>Total harga</p>
        <p>Rp. {data && data.price * inputQty}</p>
      </div>
      <div className="flex justify-between">
        <p>Ongkos kirim</p>
        <p>Rp. {shippingFee}</p>
      </div>
      <hr className="border-t border-t-gray-300" />
      <div className="flex justify-between">
        <p className="font-bold text-lg">Total Tagihan</p>
        <p className="font-bold">Rp. {shippingFee + data.price * inputQty}</p>
      </div>
      <Link to="/transaction-success">
        <button className="bg-emerald-500 py-2 w-full rounded-lg text-white">
          Lanjutkan Pembayaran
        </button>
      </Link>
    </div>
  );
};

export default CheckoutSummary;
