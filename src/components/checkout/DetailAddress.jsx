import React from "react";
import { Link } from "react-router-dom";

const DetailAddress = ({ userAddress, selectAddress, handleAddressChange }) => {
  return (
    <div className="py-8">
      <h2 className="font-bold text-xl mb-6">Alamat Pengiriman</h2>
      <Link to="/profile" className="text-emerald-500 font-semibold">
        Lihat list alamat
      </Link>
      <div className="my-4">
        <select
          id="address"
          className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 "
          value={selectAddress}
          onChange={handleAddressChange}
          required
        >
          <option value="">Pilih salah satu</option>
          {userAddress &&
            userAddress.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default DetailAddress;
