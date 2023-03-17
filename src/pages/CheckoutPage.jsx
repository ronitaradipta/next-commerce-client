import React, { useEffect, useState } from "react";
import callApi from "../services/callApi";
import DetailProductCheckout from "../components/checkout/DetailProductCheckout";
import DetailAddress from "../components/checkout/DetailAddress";
import CheckoutSummary from "../components/checkout/element/CheckoutSummary";
import { CourierSelect } from "../components/checkout/CourierSelect";
import { useParams } from "react-router-dom";

const CheckoutPage = () => {
  const [product, setProduct] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [dataCourier, setDataCourier] = useState(null);
  const [selectedCourier, setSelectedCourier] = useState(0);
  const [userAddress, setUserAddress] = useState("");

  const [selectAddress, setSelectAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const { idStore } = useParams();

  const fetchDetailProduct = async () => {
    try {
      const response = await callApi.get(`/carts/product/${idStore}`);
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataAddress = async () => {
    try {
      const response = await callApi.get("address/users");
      setUserAddress(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;

    setSelectedOption(selectedOption);
  };

  const handleAddressChange = (e) => {
    const selectedAddress = e.target.value;

    setSelectAddress(selectedAddress);
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
      setLoading(true);
      const response = await callApi.post(`/orders/checkout/${idStore}`, {
        shippingCost: selectedCourier,
        address: selectAddress,
      });
      setLoading(false);
      window.location.assign(response.data.data[1].transactionUrl);
    } catch (error) {
      console.log(error);
      alert(error.message);
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (data) => {
    try {
      const response = await callApi.delete(`/carts/${data}`);
      console.log(response);
      fetchDetailProduct();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailProduct();
    fetchDataAddress();
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
        {product &&
          product.products?.map((item, idx) => {
            return (
              <DetailProductCheckout
                key={idx}
                data={item}
                handleDeleteProduct={handleDeleteProduct}
              />
            );
          })}

        <hr className="border-t border-t-gray-300" />
        <DetailAddress
          userAddress={userAddress}
          selectAddress={selectAddress}
          handleAddressChange={handleAddressChange}
        />
        <CourierSelect
          selectedOption={selectedOption}
          dataCourier={dataCourier}
          handleOptionChange={handleOptionChange}
          selectedCourier={selectedCourier}
          setSelectedCourier={setSelectedCourier}
          loading={loading}
        />
      </div>
      {product && (
        <CheckoutSummary
          data={product}
          selectedCourier={selectedCourier}
          handleCheckout={handleCheckout}
          loading={loading}
          selectAddress={selectAddress}
        />
      )}
    </main>
  );
};

export default CheckoutPage;
