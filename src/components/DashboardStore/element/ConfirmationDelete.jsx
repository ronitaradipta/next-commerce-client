import React, { useState } from "react";
import callApi from "../../../services/callApi";
import Spinner from "../../loading/Spinner";

const ConfirmationDelete = ({ item, fetchProduct, setActive, setIsSuccess, setMessage }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      await callApi.delete(`/products/${id}`);
      setTimeout(() => {
        setIsLoading(false);
        setActive(false);
        setMessage("Produk berhasil dihapus");
        setIsSuccess(true);
        fetchProduct();
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSuccess(false);
    }
  };

  return (
    <div id="confirmation-box" className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-[9999]">
      {isLoading ? (
        <Spinner className="text-[40px]" />
      ) : (
        <div className="w-[450px] flex flex-col items-center  py-5 px-5 bg-white opacity-1 rounded-md ">
          <div className="font-bold text-lg mb-5">HAPUS PRODUCT</div>
          <div>Apakah Anda yakin untuk menghapus produk :</div>
          <div className="mb-5 text-center">
            <b> "{item.name}" </b>?.
          </div>
          <div className="flex items-center gap-5">
            <button className="bg-neutral-200 py-2 px-4 rounded-md mr-4" onClick={() => setActive(false)}>
              Batal
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={() => handleDelete(item.id)}>
              Ya, Hapus
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationDelete;
