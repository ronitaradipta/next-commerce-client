import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCard from "../components/auth/elements/FormCard";
import InputElement from "../components/auth/elements/InputElement";
import LeftContainer from "../components/auth/LeftContainer";
import callApi from "../services/callApi";
import Notification from "../components/loading/Notification";
const RegisterPage = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
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
      setisSuccess(true);
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
      {isSuccess && <Notification SuccessMessage={SuccessMessage} />}
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
