import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import callApi from "../services/callApi";
import DetailProductCheckout from "../components/checkout/DetailProductCheckout";
import DetailAddress from "../components/checkout/DetailAddress";
import CheckoutSummary from "../components/checkout/element/CheckoutSummary";
import { CourierSelect } from "../components/checkout/CourierSelect";
const CheckoutPage = () => {
  const [product, setProduct] = useState("");
  const [inputQty, setInputQty] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [dataCourier, setDataCourier] = useState(null);
  const [selectedCourier, setSelectedCourier] = useState(0);
  const [loading, setLoading] = useState(false);
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

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;

    setSelectedOption(selectedOption);
  };

  const fetchDataCourier = async () => {
    try {
      if (selectedOption) {
        setLoading(true);
        const response = await callApi.post(
          `/services/courier/${selectedOption}`,
          {
            origin: "501",
            destination: "114",
            weight: 1700,
          }
        );
        setDataCourier(response.data.data[0]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleCheckout = async () => {
    try {
      if (inputQty > 0) {
        setLoading(true);
        const response = await callApi.post(
          `/orders/checkout/${product.storeId}`,
          {
            shippingCost: selectedCourier,
            address: "jl jl yuk cuy",
            regency: "Kuta selatan",
            city: "Badung",
            province: "Bali",
            zipcode: "80361",
            name: "Asep surasep",
            email: "jojojo@gmail.com",
            phone: "0812345678",
          }
        );
        console.log(response);
        setLoading(false);
      } else {
        alert("Qty Produk harus lebih besar dari 0");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetailProduct();
    setSelectedOption("jne");
  }, []);

  useEffect(() => {
    fetchDataCourier();
  }, [selectedOption]);

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
        <CourierSelect
          selectedOption={selectedOption}
          dataCourier={dataCourier}
          handleOptionChange={handleOptionChange}
          selectedCourier={selectedCourier}
          setSelectedCourier={setSelectedCourier}
          loading={loading}
        />
      </div>
      <CheckoutSummary
        data={product}
        inputQty={inputQty}
        selectedCourier={selectedCourier}
        handleCheckout={handleCheckout}
        loading={loading}
      />
    </main>
  );
};

export default CheckoutPage;
