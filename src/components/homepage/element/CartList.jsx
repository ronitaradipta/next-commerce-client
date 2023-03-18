import React from "react";
import { Link } from "react-router-dom";
import emptycart from "../../../assets/images/emptycart.svg";

const CartList = ({ data, user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg h-72 w-[500px] absolute top-14 p-8 overflow-y-auto flex flex-col gap-6">
      {user && (
        <div className="flex justify-between items-center border-b border-b-gray-300 pb-4">
          <h2>Keranjang ({data?.length || "0"})</h2>
          <Link to="/cart">
            <p className="font-semibold text-emerald-500">Lihat Keranjang</p>
          </Link>
        </div>
      )}

      {user &&
        data?.length > 0 &&
        data.map((item) => {
          return (
            <div
              className="flex justify-between items-center"
              key={item.product.id}
            >
              <div className="flex gap-4">
                <img src="" alt="image" />
                <div>
                  <h3 className="font-bold text-lg truncate w-40">
                    {item.product.name}
                  </h3>
                  <p className="text-gray-500">{item.quantity} barang</p>
                </div>
              </div>
              <p className="text-lg font-bold text-red-500">
                Rp.{item.product.price}
              </p>
            </div>
          );
        })}
      {!user && (
        <div className="flex flex-col items-center">
          <img src={emptycart} alt="icon" className="h-36 mb-6" />
          <h2>Login dulu biar bisa checkout!</h2>
        </div>
      )}
    </div>
  );
};

export default CartList;
