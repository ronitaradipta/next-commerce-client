import React from "react";
import { Link } from "react-router-dom";

const CartList = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg h-96 w-[500px] absolute top-14 p-8 overflow-y-auto flex flex-col gap-6">
      <div className="flex justify-between items-center border-b border-b-gray-300 pb-4">
        <h2>Keranjang ({data.length})</h2>
        <Link to="/cart">
          <p className="font-semibold text-emerald-500">Lihat Keranjang</p>
        </Link>
      </div>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="flex gap-4">
                <img src="" alt="image" />
                <div>
                  <h3 className="font-bold text-lg truncate w-40">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.quantity} barang</p>
                </div>
              </div>
              <p className="text-lg font-bold text-red-500">
                ${item.discountedPrice}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default CartList;
