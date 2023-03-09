import { useState } from "react";
import Notification from "../components/loading/Notification";
import callApi from "../services/callApi";
import { useNavigate, Link } from "react-router-dom";
import FormCard from "../components/auth/elements/FormCard";
import LeftContainer from "../components/auth/LeftContainer";
import InputElement from "../components/auth/elements/InputElement";

const LoginPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const navigate = useNavigate();


  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  
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
      setisSuccess(true);
      setTimeout(() => {
        navigate("/otp-verification", { state: { data } });
      }, 2500);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setLoading(false);
    }
  };



  return (
    <div className="flex h-screen flex-wrap justify-center">
      {isSuccess && <Notification SuccessMessage={SuccessMessage} />}

      <LeftContainer />
      <div className=" w-full md:w-1/2 flex justify-center items-center bg-emerald-500">
        <FormCard title="Login" button="LOG IN" link="Daftar" question="Pengguna Baru?" route="/register" onChange={handleChangeInput} loading={loading} onSubmit={loginUser} ErrorMessage={ErrorMessage}>
          <InputElement type="text" placeholder="Username / Email" name="email" onChange={handleChangeInput} />
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
