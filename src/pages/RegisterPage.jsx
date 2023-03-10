import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCard from "../components/auth/elements/FormCard";
import InputElement from "../components/auth/elements/InputElement";
import LeftContainer from "../components/auth/LeftContainer";
import callApi from "../services/callApi";

const RegisterPage = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [Notification, setNotification] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await callApi.post("/auth/register", {
        name: input.name,
        email: input.email,
        password: input.password,
        passwordConfirm: input.passwordConfirm,
      });
      setLoading(false);
      setNotification(true);
      setSuccessMessage(response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setLoading(false);
      setInput({ ...input, name: "", email: "", password: "", passwordConfirm: "" });
    }
  };
  const handleKeyDown = () => {
    // clear Error Message once field is filled
    setErrorMessage("");
  };
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex min-h-screen flex-wrap justify-center">
      <div className={`${Notification ? "flex" : "hidden"} mr-5 ml-5 fixed top-0 py-2 px-5 bg-green-500 opacity-0 rounded-md text-white translate-y-[150px] animate-popUp`}>
        <svg aria-hidden="true" className="w-5 h-5 mr-1.5 text-black flex-shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <p>{SuccessMessage}</p>
      </div>
      <LeftContainer />
      <div className=" w-full md:w-1/2 flex justify-center items-center bg-emerald-500">
        <FormCard title="Daftar" button="DAFTAR" link="Login" question="Sudah Punya Akun?" route="/login" loading={loading} onSubmit={registerUser} ErrorMessage={ErrorMessage}>
          <InputElement type="text" placeholder="username" name="name" value={input.name} onChange={handleChangeInput} onKeyDown={handleKeyDown} />
          <InputElement type="email" placeholder="email" name="email" value={input.email} onChange={handleChangeInput} onKeyDown={handleKeyDown} />
          <InputElement type="password" placeholder="password" name="password" value={input.password} onChange={handleChangeInput} onKeyDown={handleKeyDown} />
          <InputElement type="Password" placeholder="Konfirmasi Password" name="passwordConfirm" value={input.passwordConfirm} onChange={handleChangeInput} onKeyDown={handleKeyDown} />
        </FormCard>
      </div>
    </div>
  );
};

export default RegisterPage;
