import { useState } from "react";
import callApi from "../services/callApi";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import FormCard from "../components/auth/elements/FormCard";
import LeftContainer from "../components/auth/LeftContainer";
import Notification from "../components/loading/Notification";
import InputElement from "../components/auth/elements/InputElement";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isSuccess, setisSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState({});
  const [input, setInput] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ error: "", success: "" });

  const handlePasswordVisibility = (inputName) => {
    setPasswordVisible({
      ...passwordVisible,
      [inputName]: !passwordVisible[inputName],
    });
  };

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await callApi.post("/auth/login", input);
      const data = { email: input.email, password: input.password };
      setMessage({ success: response.data.message });
      setisSuccess(true);
      setTimeout(() => {
        setisSuccess(false);
        navigate("/otp-verification", { state: { data } });
      }, 2500);
    } catch (error) {
      setMessage({ error: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-wrap justify-center">
      {isSuccess ? <Notification SuccessMessage={message.success} /> : ""}
      <LeftContainer />
      <div className=" w-full md:w-1/2 flex justify-center items-center bg-emerald-500">
        <FormCard
          title="Login"
          button="LOG IN"
          link="Daftar"
          question="Pengguna Baru?"
          route="/register"
          onChange={handleChangeInput}
          loading={loading}
          onSubmit={loginUser}
          ErrorMessage={message.error}
          disabled={disabled}
        >
          <InputElement
            type="text"
            placeholder="Username / Email"
            name="email"
            onChange={handleChangeInput}
          />
          <InputElement
            type={passwordVisible.password ? "text" : "password"}
            placeholder="password"
            name="password"
            onChange={handleChangeInput}
            password={
              <div className="w-[10%] absolute right-2 flex justify-end  cursor-pointer">
                {passwordVisible.password ? (
                  <BiHide
                    onClick={() => handlePasswordVisibility("password")}
                  />
                ) : (
                  <BiShow
                    onClick={() => handlePasswordVisibility("password")}
                  />
                )}
              </div>
            }
          />
          <Link to="/forgot-password" className="text-sm text-gray-500">
            Lupa password ?
          </Link>
        </FormCard>
      </div>
    </div>
  );
};

export default LoginPage;
