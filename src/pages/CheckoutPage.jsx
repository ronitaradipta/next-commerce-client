import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import toko1 from "../assets/images/img/toko.jpg";
const CheckoutPage = () => {
  const [product, setProduct] = useState("");
  const [inputQty, setInputQty] = useState(0);
  const { idData } = useParams();

  const shippingFee = 1;
  const totalPurchase = shippingFee + product.price * inputQty;

  const fetchDetailProduct = async () => {
    try {
      const response = await api.get(`/products/${idData}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
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

  useEffect(() => {
    fetchDetailProduct();
  }, []);
  return (
    <main className="container mx-auto px-6 flex gap-10 mt-10 pb-36">
      <div className="w-9/12">
        <h2 className="font-bold text-xl mb-9">Detail Produk</h2>
        <hr className="border-t border-t-gray-300" />
        <div className="flex py-6 gap-9">
          <img src={product && product.thumbnail} alt="" className="w-2/12" />
          <div className="6/12">
            <h3 className="text-sm font-medium">{product && product.title}</h3>
            <div className="flex gap-2 items-center">
              <p className="text-xl font-bold">${product && product.price}</p>
              <span className="bg-red-300 text-red-500 font-bold p-1 rounded-md">
                {product && Math.ceil(product.discountPercentage)}%
              </span>
              <p className="line-through text-gray-500">
                $
                {product &&
                  Math.ceil(
                    (100 / (100 - product.discountPercentage)) * product.price
                  )}
              </p>
            </div>
            <div className="flex gap-3 mt-3">
              <img src={toko1} alt="" className="w-[50px] rounded-full" />
              <div>
                <h4 className="font-bold">Toko Sederhana</h4>
                <p className="text-gray-500">Surabaya</p>
              </div>
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
                    inputQty < product.stock && setInputQty(inputQty + 1);
                  }}
                >
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end w-4/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-8 h-8 fill-gray-500"
            >
              <path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z" />
            </svg>
          </div>
        </div>
        <hr className="border-t border-t-gray-300" />
        <div className="py-8">
          <h2 className="font-bold text-xl">Alamat Pengiriman</h2>
          <div className="flex gap-6">
            <div className="mt-4 w-1/2">
              <label htmlFor="alamat">
                Alamat
                <input
                  type="text"
                  className="block border border-gray-300 rounded-lg p-2 w-full"
                  id="alamat"
                />
              </label>
            </div>
            <div className="mt-4 w-1/2">
              <label htmlFor="kecamatan">
                Kecamatan
                <input
                  type="text"
                  className="block border border-gray-300 rounded-lg p-2 w-full"
                  id="kecamatan"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="mt-4 w-1/3">
              <label htmlFor="provinsi">
                Provinsi
                <input
                  type="text"
                  className="block border border-gray-300 rounded-lg p-2 w-full"
                  id="provinsi"
                />
              </label>
            </div>
            <div className="mt-4 w-1/3">
              <label htmlFor="kota">
                Kota
                <input
                  type="text"
                  className="block border border-gray-300 rounded-lg p-2 w-full"
                  id="kota"
                />
              </label>
            </div>
            <div className="mt-4 w-1/3">
              <label htmlFor="kodepos">
                Kode Pos
                <input
                  type="text"
                  className="block border border-gray-300 rounded-lg p-2 w-full"
                  id="kodepos"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="mt-4 w-1/2">
              <label htmlFor="negara">
                Negara
                <input
                  type="text"
                  className="block border border-gray-300 rounded-lg p-2 w-full"
                  id="negara"
                />
              </label>
            </div>
            <div className="mt-4 w-1/2">
              <label htmlFor="notelp">
                No telp
                <input
                  type="text"
                  className="block border border-gray-300 rounded-lg p-2 w-full"
                  id="notelp"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/12 h-72 p-5 border border-gray-300 rounded-lg flex flex-col gap-4">
        <h2 className="font-bold text-lg">Ringkasan Belanja</h2>
        <div className="flex justify-between">
          <p>Total harga</p>
          <p>${product && product.price * inputQty}</p>
        </div>
        <div className="flex justify-between">
          <p>Ongkos kirim</p>
          <p>${shippingFee}</p>
        </div>
        <hr className="border-t border-t-gray-300" />
        <div className="flex justify-between">
          <p className="font-bold text-lg">Total Tagihan</p>
          <p className="font-bold">${totalPurchase}</p>
        </div>
        <Link to="/transaction-success">
          <button className="bg-emerald-500 py-2 w-full rounded-lg text-white">
            Lanjutkan Pembayaran
          </button>
        </Link>
      </div>
    </main>
  );
};

export default CheckoutPage;
