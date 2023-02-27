import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import callApi from "../services/callApi";
import DetailProductCheckout from "../components/checkout/DetailProductCheckout";
import DetailAddress from "../components/checkout/DetailAddress";
import CheckoutSummary from "../components/checkout/element/CheckoutSummary";
import { CourierSelect } from "../components/checkout/CourierSelect";
const CheckoutPage = () => {
  const [product, setProduct] = useState("");
  const [inputQty, setInputQty] = useState(0);
  const { idData } = useParams();

  const fetchDetailProduct = async () => {
    try {
      const response = await callApi.get(`/products/${idData}`);
      setProduct(response.data.data);
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
    <main className="container mx-auto px-6 lg:flex gap-10 mt-10 pb-36">
      <div className="lg:w-9/12 w-full">
        <h2 className="font-bold text-xl mb-9">Detail Produk</h2>
        <hr className="border-t border-t-gray-300" />
        <DetailProductCheckout
          data={product}
          inputQty={inputQty}
          setInputQty={setInputQty}
          handleOnChange={handleOnChange}
        />
        <hr className="border-t border-t-gray-300" />
        <DetailAddress />
        <CourierSelect />
      </div>
      <CheckoutSummary data={product} inputQty={inputQty} />
    </main>
  );
};

export default CheckoutPage;
