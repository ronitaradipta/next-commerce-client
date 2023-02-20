import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCard from "../components/auth/elements/FormCard";
import InputElement from "../components/auth/elements/InputElement";
import LeftContainer from "../components/auth/LeftContainer";

const RegisterPage = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    navigate("/login");
    setLoading(false);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex h-screen flex-wrap">
      <LeftContainer />
      <FormCard title="Daftar" button="DAFTAR" link="Login" question="Sudah Punya Akun?" route="/login" onChange={handleChangeInput} loading={loading} onSubmit={registerUser}>
        <InputElement type="text" placeholder="username" name="username" onChange={handleChangeInput} />
        <InputElement type="email" placeholder="email" name="email" onChange={handleChangeInput} />
        <InputElement type="phone" placeholder="No Hp" name="phone" onChange={handleChangeInput} />
        <InputElement type="password" placeholder="password" name="password" onChange={handleChangeInput} />
        <InputElement type="Password" placeholder="Konfirmasi Password" name="password" onChange={handleChangeInput} />
      </FormCard>
    </div>
  );
};

export default RegisterPage;
