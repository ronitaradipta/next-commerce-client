import React, { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "../components/cart/CheckBox";
import Notification from "../components/loading/Notification";
import callApi from "../services/callApi";
import formatRupiah from "../utils/formatRupiah";

const CartPage = () => {
  const [product, setProduct] = useState("");
  const [successDelete, setSuccessDelete] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState("");
  const [inputQty, setInputQty] = useState(1);
  const [activeComponent, setActiveComponent] = useState(null);

  const navigate = useNavigate();

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
      fetchDetailProduct();
      setSuccessDelete(true);
      setTimeout(() => {
        setSuccessDelete(false);
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (e) => {
    const productId = parseInt(e.target.value);
    setSelectedProducts(productId);
  };

  const totalPrice = () => {
    let total = 0;
    if (product) {
      total = product
        .filter((item) => {
          return item.product.storeId === selectedProducts;
        })
        .reduce((acc, cart) => {
          return acc + cart.product.price * cart.quantity;
        }, 0);
    }

    return formatRupiah(total);
  };

  const handleCheckout = () => {
    navigate(`/checkout/${selectedProducts}`);
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      if (value > 0) {
        if (e.target.value > data.stock) {
          setInputQty(data.stock);
        } else {
          setInputQty(e.target.value);
        }
      } else {
        setInputQty(0);
      }
    } else setInputQty(0);
  };

  const editCart = async (id) => {
    try {
      const response = await callApi.put(`/carts/${id}`, {
        quantity: inputQty,
      });
      fetchDetailProduct();
      setActiveComponent(null);
      setInputQty(1);
    } catch (error) {
      console.log(error);
    }
  };

  const showEditData = (id) => {
    setActiveComponent(id === activeComponent ? null : id);
  };

  useEffect(() => {
    fetchDetailProduct();
  }, []);

  return (
    <main className="container mx-auto px-6 lg:flex gap-10 mt-10 pb-36">
      {successDelete && (
        <Notification SuccessMessage="Produk berhasil dihapus" />
      )}
      <div className="lg:w-9/12 w-full">
        <h2 className="font-bold text-xl mb-9">Keranjang</h2>
        <hr className="border-t border-t-gray-300" />
        {product &&
          product.map((item, idx) => {
            const { product } = item;
            return (
              <div key={idx}>
                <hr className="border-t border-t-gray-300" />

                <div className="flex py-6 gap-9 flex-wrap md:flex-nowrap">
                  <CheckBox
                    id={product.storeId}
                    name={product.store.name}
                    value={product.storeId}
                    checked={selectedProducts === product.storeId}
                    onChange={handleCheckboxChange}
                  />
                  <Link
                    to={`/product-detail/${product.id}`}
                    className="md:w-2/12 w-[200px] h-[150px]"
                  >
                    <img
                      src={item && product.ProductGalleries[0]?.image}
                      alt=""
                    />
                  </Link>
                  <div className="w-6/12">
                    <h3 className="text-md font-medium">
                      {item && product.name}
                    </h3>
                    <p className="text-gray-400">Jumlah : {item.quantity}</p>
                    <div className="flex gap-2 items-center">
                      <p className="text-xl font-bold">
                        {item && formatRupiah(product.price)}
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
                          src={item && product.store.image}
                          alt=""
                          className="w-[50px] rounded-full"
                        />
                        <div>
                          <h4 className="font-medium text-gray-700">
                            {item && product.store.name}
                          </h4>
                          <p className="text-gray-500">
                            {item && product.store.city}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center mt-6">
                      <button
                        className={`${
                          activeComponent !== idx
                            ? "text-emerald-500"
                            : "text-gray-500"
                        } font-semibold text-sm`}
                        onClick={() => showEditData(idx)}
                      >
                        {activeComponent !== idx ? "Edit Keranjang" : "Batal"}
                      </button>
                      {activeComponent === idx && (
                        <>
                          <div className="flex space-x-9 border items-center flex-grow-0 font-normal text-lg">
                            <div
                              className="btn--min px-4 py-3 text-emerald-500 hover:cursor-pointer"
                              onClick={() => {
                                inputQty > 0 && setInputQty(inputQty - 1);
                              }}
                            >
                              <button>-</button>
                            </div>
                            <input
                              value={inputQty}
                              className="total--barang w-8 text-center appearance-none"
                              onChange={handleOnChange}
                              type="text"
                            />
                            <div
                              className="btn--plus px-4 py-3 text-emerald-500 hover:cursor-pointer"
                              onClick={() => {
                                inputQty < product.stock &&
                                  setInputQty(inputQty + 1);
                              }}
                            >
                              <button>+</button>
                            </div>
                          </div>
                          <button
                            className="text-sm font-semibold text-emerald-500"
                            onClick={() => editCart(item.id)}
                          >
                            Simpan Perubahan
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end items-end md:w-4/12">
                    <button onClick={() => handleDeleteProduct(product.id)}>
                      <BsFillTrashFill className="text-3xl text-gray-700" />
                    </button>
                  </div>
                </div>
                <hr className="border-t border-t-gray-300" />
              </div>
            );
          })}
      </div>
      <div className="lg:w-3/12 w-full h-72 p-5 border border-gray-300 rounded-lg flex flex-col gap-4">
        <h2 className="font-bold text-lg">Ringkasan Belanja</h2>
        <div className="flex justify-between">
          <p className="text-lg">Total harga</p>
          <p>{selectedProducts && totalPrice()}</p>
        </div>
        <hr className="border-t border-t-gray-300" />

        <div className="flex justify-center ">
          <button
            className="bg-emerald-500 text-white py-4 w-full rounded-lg  flex items-center justify-center"
            onClick={handleCheckout}
            type="submit"
          >
            Beli
          </button>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
