import React, { useState } from "react";
import callApi from "../../services/callApi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Notification from "../loading/Notification";
import FormCardForgot from "../forgotPassword/FormCardForgot";
import InputElementForgot from "../forgotPassword/InputElementForgot";

const ValidToken = ({ token }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState({ success: "", error: "" });
  const [input, setInput] = useState({ newPassword: "", newPasswordConfirm: "" });

  const resetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await callApi.put(`/auth/reset/${token}`, input);
      setMessage({ success: result.data.message, error: "" });
      setIsSuccess(true);
      setTimeout(() => navigate("/login"), 2500);
    } catch (error) {
      setMessage({ success: "", error: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };
  const handleChangeInput = (e) => {
    setMessage({ error: "" });
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {isSuccess ? <Notification SuccessMessage={message.success} /> : ""}
      <div className="logo mb-2">
        <img src={logo} alt="Logo_next_commerce" />
      </div>
      <FormCardForgot
        title="Reset Password"
        button="KIRIM"
        suggestion="Password minimal 8 karakter dengan kombinasi huruf kecil dan angka."
        question="Kembali ke halaman"
        route1="/register"
        route2="/login"
        link1="register"
        link2="login"
        onChange={handleChangeInput}
        loading={loading}
        onSubmit={resetPassword}
        errMessage={message.error}
      >
        <InputElementForgot type="password" placeholder="Masukkan password baru kamu" name="newPassword" onChange={handleChangeInput} />
        <InputElementForgot type="password" placeholder="Konfirmasi password baru kamu" name="newPasswordConfirm" onChange={handleChangeInput} />
      </FormCardForgot>
    </div>
  );
};

export default ValidToken;
