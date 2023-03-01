import React, { useState, useEffect } from "react";
import FormCardForgot from "../components/forgotPassword/FormCardForgot";
import InputElementForgot from "../components/forgotPassword/InputElementForgot";
import { useNavigate } from "react-router-dom";
import callApi from "../services/callApi";
import logo from "../assets/images/logo.png";

const ForgotPasswordPage = () => {
  const [input, setInput] = useState({
    email: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [Notification, setNotification] = useState(false);
  const navigate = useNavigate();
  const resetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await callApi.post("/auth/forgot", {
        email: input.email,
      });
      setSuccessMessage(result.data.msg);
      setLoading(false);
      setNotification(true);
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      setErrorMessage(error.response.data.msg);
      setLoading(false);
    }
  };
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="min-h-screen mx-auto max-w-screen-xl px-5 flex flex-col justify-center items-center">
      <div className={`${Notification ? "flex" : "hidden"} mr-5 ml-5 fixed top-0 py-2 px-5 bg-green-500 opacity-0 rounded-md text-white translate-y-[150px] animate-popUp`}>
        <svg aria-hidden="true" className="w-5 h-5 mr-1.5 text-black flex-shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <p>{SuccessMessage}</p>
      </div>

      <div className="logo mb-2">
        <img src={logo} alt="nextcommerce_logo" />
      </div>
      <FormCardForgot
        title="Reset Password"
        button="KIRIM"
        question="Kembali ke halaman"
        route1="/register"
        route2="/login"
        link1="register"
        link2="login"
        onChange={handleChangeInput}
        loading={loading}
        onSubmit={resetPassword}
        errMessage={ErrorMessage}
      >
        <InputElementForgot type="text" placeholder="Masukkan email kamu" name="email" onChange={handleChangeInput} />
      </FormCardForgot>
    </div>
  );
};

export default ForgotPasswordPage;
