import React from "react";
import formatRupiah from "../../../utils/formatRupiah";
import Spinner from "../../loading/Spinner";

const CheckoutSummary = ({
  data,
  selectedCourier,
  handleCheckout,
  loading,
  selectAddress,
}) => {
  return (
    <div className="lg:w-3/12 w-full h-72 p-5 border border-gray-300 rounded-lg flex flex-col gap-4">
      <h2 className="font-bold text-lg">Ringkasan Belanja</h2>
      <div className="flex justify-between">
        <p>Total harga</p>
        <p>
          {(data &&
            !isNaN(data.totalPrice) &&
            formatRupiah(parseInt(data.totalPrice))) ||
            0}
        </p>
      </div>
      <div className="flex justify-between">
        <p>Ongkos kirim</p>
        <p>Rp. {selectedCourier}</p>
      </div>
      <hr className="border-t border-t-gray-300" />
      <div className="flex justify-between">
        <p className="font-bold text-lg">Total Tagihan</p>
        <p className="font-bold">
          {(!isNaN(data.totalPrice) &&
            formatRupiah(selectedCourier + data.totalPrice)) ||
            0}
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className={`${
            selectAddress && selectedCourier
              ? "bg-emerald-500 text-white"
              : "bg-gray-200 text-gray-400"
          } py-4 w-full rounded-lg  flex items-center justify-center`}
          onClick={handleCheckout}
          type="submit"
          disabled={!selectAddress || !selectedCourier}
        >
          {loading ? <Spinner /> : "Lanjutkan Pembayaran"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
