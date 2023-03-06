import callApi from "../services/callApi";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import LeftContainer from "../components/auth/LeftContainer";
import FormCard from "../components/auth/elements/FormCard";
import InputElement from "../components/auth/elements/InputElement";

const LoginPage = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [Notification, setNotification] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await callApi.post("/auth/login", {
        email: input.email,
        password: input.password,
      });
      const data = { email: input.email, password: input.password };
      setLoading(false);
      setSuccessMessage(response.data.message);
      setNotification(true);
      setTimeout(() => {
        navigate("/otp-verification", { state: { data } });
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
    <div className="flex h-screen flex-wrap justify-center">
      <div className={`${Notification ? "flex" : "hidden"} mr-5 ml-5 fixed top-0 py-2 px-5 bg-green-500 opacity-0 rounded-md text-white translate-y-[150px] animate-popUp`}>
        <svg aria-hidden="true" className="w-5 h-5 mr-1.5 text-black flex-shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <p>{SuccessMessage}</p>
      </div>
      <LeftContainer />
      <div className=" w-full md:w-1/2 flex justify-center items-center bg-emerald-500">
        <FormCard title="Login" button="LOG IN" link="Daftar" question="Pengguna Baru?" route="/register" onChange={handleChangeInput} loading={loading} onSubmit={loginUser} ErrorMessage={ErrorMessage}>
          <InputElement type="text" placeholder="Email" name="email" onChange={handleChangeInput} />
          <InputElement type="password" placeholder="password" name="password" onChange={handleChangeInput} />
          <Link to="/forgot-password" className="text-sm text-gray-500">
            Lupa password ?
          </Link>
        </FormCard>
      </div>
    </div>
  );
};

export default LoginPage;
