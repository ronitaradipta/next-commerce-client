import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreRegisterForm from "../components/auth/storeInputElement/StoreRegisterForm";
import InputElement from "../components/auth/elements/InputElement";
import LeftContainer from "../components/auth/LeftContainer";
import axios from "axios";

const StoreRegisterPage = () => {
  const [StoreName, setStoreName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Description, setDescription] = useState("");
  const navigate = useNavigate();

  const registerStore = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/.....", {
        store_name: StoreName,
        phone_number: PhoneNumber,
        address: Address,
        description: Description,
      });
    } catch (error) {}
    setLoading(true);
    navigate("/...");
    setLoading(false);
  };

  return (
    <div className="flex h-screen flex-wrap">
      <LeftContainer />
      <StoreRegisterForm name="Asep" button="DAFTAR" onSubmit={registerStore}>
        <InputElement type="text" value={StoreName} placeholder="Nama Toko" name="nama toko" onChange={(e) => setStoreName(e.target.value)} />
        <InputElement type="text" value={PhoneNumber} placeholder="No. Phone Number" name="No. Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
        <InputElement type="text" value={Address} placeholder="Alamat Toko" name="Alamat Toko" onChange={(e) => setAddress(e.target.value)} />
        <InputElement type="text" value={Description} placeholder="Deskripsi Toko" name="Deskripsi Toko" onChange={(e) => setDescription(e.target.value)} />
      </StoreRegisterForm>
    </div>
  );
};

export default StoreRegisterPage;
