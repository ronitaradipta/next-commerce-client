import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StoreRegisterForm from "../components/auth/storeInputElement/StoreRegisterForm";
import InputElement from "../components/auth/elements/InputElement";
import LeftContainer from "../components/auth/LeftContainer";
import callApi from "../services/callApi";

const StoreRegisterPage = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    city: "",
  });
  const navigate = useNavigate();

  const registerStore = async (e) => {
    e.preventDefault();
    try {
      await callApi.post("/stores", {
        name: input.name,
        description: input.description,
        city: input.city,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen flex-wrap">
      <LeftContainer />
      <StoreRegisterForm name={name} button="DAFTAR" onSubmit={registerStore}>
        <InputElement type="text" placeholder="Nama Toko" name="name" onChange={handleChangeInput} />
        <InputElement type="text" placeholder="Deskripsi Toko" name="description" onChange={handleChangeInput} />
        <InputElement type="text" placeholder="Kota Domisili" name="city" onChange={handleChangeInput} />
      </StoreRegisterForm>
    </div>
  );
};

export default StoreRegisterPage;
