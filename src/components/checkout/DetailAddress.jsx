import React from "react";

const DetailAddress = ({
  userAddress,
  selectAddress,
  handleAddressChange,
  userAddressbyId,
}) => {
  return (
    <div className="py-8">
      <h2 className="font-bold text-xl">Alamat Pengiriman</h2>
      <div className="my-8">
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
        {/* <div className="inline-flex items-center justify-between w-full p-5  bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-600 peer-checked:text-emerald-600 hover:text-gray-600 hover:bg-gray-100 ">
          <div className="w-7/12">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm">{item.address}</p>
            <p className="text-sm">{item.regency}</p>
            <p className="text-sm">
              {item.city} - {item.zipcode}
            </p>
            <p className="text-sm">{item.phoneNumber}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DetailAddress;
