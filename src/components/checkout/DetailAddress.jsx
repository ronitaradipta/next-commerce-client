import React from "react";
import InputAddress from "./element/InputAddress";

const DetailAddress = () => {
  return (
    <div className="py-8">
      <h2 className="font-bold text-xl">Alamat Pengiriman</h2>
      <div className="flex gap-6">
        <InputAddress label="alamat" title="Alamat" />
        <InputAddress label="kecamatan" title="Kecamatan" />
      </div>
      <div className="flex gap-6">
        <InputAddress label="provinsi" title="Provinsi" />
        <InputAddress label="kota" title="Kota" />
        <InputAddress label="kodepos" title="Kode Pos" />
      </div>
      <div className="flex gap-6">
        <div className="mt-4 w-1/2">
          <label htmlFor="negara">
            Negara
            <input
              type="text"
              className="block border border-gray-300 rounded-lg p-2 w-full"
              id="negara"
            />
          </label>
        </div>
        <div className="mt-4 w-1/2">
          <label htmlFor="notelp">
            No telp
            <input
              type="text"
              className="block border border-gray-300 rounded-lg p-2 w-full"
              id="notelp"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default DetailAddress;
