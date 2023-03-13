import { useState } from "react";
import callApi from "../services/callApi";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import Notification from "../components/loading/Notification";
import FormCardForgot from "../components/forgotPassword/FormCardForgot";
import InputElementForgot from "../components/forgotPassword/InputElementForgot";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await callApi.post("/auth/forgot", {
        email,
      });
      setSuccessMessage(response.data.message);
      setIsSuccess(true);
      setTimeout(() => navigate("/"), 2500);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChangeInput = (e) => setEmail(e.target.value);

  return (
    <div className="min-h-screen mx-auto max-w-screen-xl px-5 flex flex-col justify-center items-center">
      {isSuccess ? <Notification SuccessMessage={successMessage} /> : ""}

      <div className="logo mb-2">
        <img src={logo} alt="Logo_next_commerce" />
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
        loading={isLoading}
        onSubmit={handleSubmit}
        errMessage={errorMessage}
      >
        <InputElementForgot type="text" placeholder="Masukkan email kamu" name="email" onChange={handleChangeInput} />
      </FormCardForgot>
    </div>
  );
};

export default ForgotPasswordPage;
