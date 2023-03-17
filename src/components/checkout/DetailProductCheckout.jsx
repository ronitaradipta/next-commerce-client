import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const DetailProductCheckout = ({ data, handleDeleteProduct }) => {
  return (
    <div className="flex py-6 gap-9 flex-wrap md:flex-nowrap">
      <img
        src={data && data.product.ProductGalleries[0]?.image}
        alt=""
        className="md:w-2/12 w-[200px] h-[150px]"
      />
      <div className="md:w-6/12 w-full">
        <h3 className="text-md font-medium">{data && data.product.name}</h3>
        <p className="my-3 text-gray-500 text-sm">
          Jumlah: {data && data.quantity}
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-xl font-bold">Rp. {data && data.product.price}</p>
          {/* <span className="bg-red-300 text-red-500 font-bold p-1 rounded-md">
            {data && Math.ceil(data.discountPercentage)}%
          </span> */}
          {/* <p className="line-through text-gray-500">
            Rp
            {data &&
              Math.ceil((100 / (100 - data.discountPercentage)) * data.price)}
          </p> */}
        </div>
        <div className="md:flex gap-4 mt-5">
          <div className="flex mb-3 md:mb-0">
            <img
              src={data && data.product.store.image}
              alt=""
              className="w-[50px] rounded-full"
            />
            <div>
              <h4 className="font-medium text-gray-700">
                {data && data.product.store.name}
              </h4>
              <p className="text-gray-500">{data && data.product.store.city}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end md:w-4/12">
        <button onClick={() => handleDeleteProduct(data.product.id)}>
          <BsFillTrashFill className="text-3xl text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default DetailProductCheckout;
