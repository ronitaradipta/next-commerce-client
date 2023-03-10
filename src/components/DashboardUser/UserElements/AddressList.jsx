import React from "react";

const AddressList = ({ id, sortedAddress, showConfirmationBox, setMainAddress, getEditFormData }) => {
  if (sortedAddress.length === 0) {
    return (
      <div id={id} className="w-full flex justify-center items-center py-20">
        Anda Belum memiliki Alamat, silahkan tambah baru
      </div>
    );
  }

  return (
    <div id={id} className="w-full ">
      {sortedAddress.map((address) => (
        <div key={address.id} className={`${address.isMain ? "bg-green-200 " : "bg-white "}border border-gray-300 rounded-lg w-full mt-4 p-4`}>
          <div className="flex gap-5">
            <div className="name font-bold">{address.name}</div>
            {address.isMain && <div className="status bg-neutral-300 py-1 px-2 rounded text-sm">utama</div>}
          </div>
          <p className="mt-2 text-sm sm:text-base">{address.address}</p>
          <div className="flex gap-5 items-center w-full">
            <button onClick={() => getEditFormData(address.id)} className="text-green-500 font-semibold mt-6">
              Ubah
            </button>
            {!address.isMain ? (
              <button onClick={() => showConfirmationBox(address.id)} className="text-emerald-500 font-medium mt-6">
                Hapus
              </button>
            ) : (
              ""
            )}
            {!address.isMain && (
              <button onClick={() => setMainAddress(address.id)} className="text-green-500 font-semibold mt-6">
                Jadikan Utama
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
