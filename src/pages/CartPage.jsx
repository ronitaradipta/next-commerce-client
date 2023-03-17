import React, { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import callApi from "../services/callApi";

const CartPage = () => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDetailProduct = async () => {
    try {
      const response = await callApi.get(`/carts/product`);
      setProduct(response.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (data) => {
    try {
      const response = await callApi.delete(`/carts/${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailProduct();
  }, []);

  return (
    <main className="container mx-auto px-6 lg:flex gap-10 mt-10 pb-36">
      <div className="lg:w-9/12 w-full">
        <h2 className="font-bold text-xl mb-9">Keranjang</h2>
        <hr className="border-t border-t-gray-300" />
        {product &&
          product.map((item, idx) => {
            return (
              <>
                <div className="flex py-6 gap-9 flex-wrap md:flex-nowrap">
                  <img
                    src={item && item.product.ProductGalleries[0]?.image}
                    alt=""
                    className="md:w-2/12 w-[200px] h-[150px]"
                  />
                  <div className="6/12">
                    <h3 className="text-md font-medium">
                      {item && item.product.name}
                    </h3>
                    <div className="flex gap-2 items-center">
                      <p className="text-xl font-bold">
                        Rp. {item && item.product.price}
                      </p>
                      {/* <span className="bg-red-300 text-red-500 font-bold p-1 rounded-md">
            {item && Math.ceil(item.discountPercentage)}%
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
                          src={item && item.product.store.image}
                          alt=""
                          className="w-[50px] rounded-full"
                        />
                        <div>
                          <h4 className="font-medium text-gray-700">
                            {item && item.product.store.name}
                          </h4>
                          <p className="text-gray-500">
                            {item && item.product.store.city}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-end md:w-4/12">
                    <button
                      onClick={() => handleDeleteProduct(item.product.id)}
                    >
                      <BsFillTrashFill className="text-3xl text-gray-700" />
                    </button>
                  </div>
                </div>
                <hr className="border-t border-t-gray-300" />
              </>
            );
          })}
      </div>
      <div className="lg:w-3/12 w-full h-72 p-5 border border-gray-300 rounded-lg flex flex-col gap-4">
        <h2 className="font-bold text-lg">Ringkasan Belanja</h2>
        <div className="flex justify-between">
          <p>Total harga</p>
          <p>Rp. {product && product.totalPrice}</p>
        </div>
        <hr className="border-t border-t-gray-300" />
        <div className="flex justify-between">
          <p className="font-bold text-lg">Total Tagihan</p>
          <p className="font-bold">Rp. {product.totalPrice}</p>
        </div>
        <div className="flex justify-center ">
          <button
            className="bg-emerald-500 text-white py-4 w-full rounded-lg  flex items-center justify-center"
            // onClick={handleCheckout}
            type="submit"
          >
            {loading ? <Spinner /> : "Beli"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
