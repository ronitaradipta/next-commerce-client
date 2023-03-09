import { useState } from "react";
import FormCardForgot from "../forgotPassword/FormCardForgot";
import InputElementForgot from "../forgotPassword/InputElementForgot";
import { useNavigate } from "react-router-dom";
import callApi from "../../services/callApi";
import logo from "../../assets/images/logo.png";
import Notification from "../loading/Notification";
const ValidToken = ({ token }) => {
  const [input, setInput] = useState({
    newPassword: "",
    newPasswordConfirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(token);
    console.log(input.newPassword);
    try {
      const result = await callApi.put(`/auth/reset/${token}`, {
        newPassword: input.newPassword,
        newPasswordConfirm: input.newPasswordConfirm,
      });
      setSuccessMessage(result.data.message);
      setLoading(false);
      setisSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setLoading(false);
    }
  };
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {isSuccess && <Notification SuccessMessage={SuccessMessage} />}
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
        loading={loading}
        onSubmit={resetPassword}
        errMessage={ErrorMessage}
      >
        <InputElementForgot type="password" placeholder="Masukkan password baru kamu" name="newPassword" onChange={handleChangeInput} />
        <InputElementForgot type="password" placeholder="Konfirmasi password baru kamu" name="newPasswordConfirm" onChange={handleChangeInput} />
      </FormCardForgot>
    </div>
  );
};

export default ValidToken;
