import React, { useEffect } from "react";
import callApi from "../../services/callApi";

const ConfirmationBox = ({ addressId, setActive, getUserAddress, setMessage, setIsSuccess }) => {
  const handleDelete = async (id) => {
    try {
      await callApi.delete(`/address/${id}`);
      getUserAddress();
      setIsSuccess(true);
      setMessage("Alamat berhasil dihapus");
      setActive(false);
    } catch (error) {
      console.log;
    }
  };

  return (
    <div id="confirmation-box" className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-[999]">
      <div className="w-[450px] flex flex-col items-center  py-5 px-5 bg-white opacity-1 rounded-md ">
        <div className="font-bold text-lg mb-5">HAPUS ALAMAT</div>
        <div className="mb-5">Apakah Anda yakin untuk menghapus "Rumah"? Anda tidak dapat mengembalikan alamat yang sudah dihapus.</div>
        <div className="flex items-center gap-5">
          <button className="bg-neutral-200 py-2 px-4 rounded-md mr-4" onClick={() => setActive(false)}>
            Batal
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={() => handleDelete(addressId)}>
            Ya, Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
