import React from "react";
import emptyData from "../../../assets/images/empty-data.svg";

const NoDataPreview = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <img src={emptyData} className="h-52 w-52" alt="" />
      <h3 className="font-semibold text-lg">Tidak ada transaksi..</h3>
    </div>
  );
};

export default NoDataPreview;
