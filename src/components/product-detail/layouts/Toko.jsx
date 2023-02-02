import React from "react";

import toko1 from "../../../assets/images/img/toko.jpg";

function Toko() {
  return (
    <div className="flex mt-4 hover:cursor-pointer w-52">
      <div className="space-x-4 mr-4">
        <img
          className="rounded-full"
          src={toko1}
          alt="toko"
          width="50px"
          height="50px"
        />
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-base">Toko Sederhana</h3>
        <p className="font-normal text-sm">Surabaya</p>
      </div>
    </div>
  );
}

export default Toko;
