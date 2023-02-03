import api from "../services/api";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import LeftContainer from "../components/auth/LeftContainer";
import FormCard from "../components/auth/elements/FormCard";
import InputElement from "../components/auth/elements/InputElement";

const LoginPage = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await api.post("/auth/login", {
        username: input.username,
        password: input.password,
      });
      setLoading(false);
      navigate("/");
      const token = response.data.token;
      Cookies.set("token", token, { expires: 1 });
      Cookies.set("user", JSON.stringify(response.data), { expires: 1 });
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.message);
      setLoading(false);
    }
  };

  // USER LOGIN
  // username: 'kminchelle',
  //  password: '0lelplR',

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen">
      <LeftContainer />
      <FormCard
        title="Login"
        button="LOG IN"
        link="Daftar"
        question="Pengguna Baru?"
        route="/register"
        onChange={handleChangeInput}
        loading={loading}
        onSubmit={loginUser}
        errMessage={errorMsg}
      >
        <InputElement
          type="text"
          placeholder="Username/email"
          name="username"
          onChange={handleChangeInput}
        />
        <InputElement
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChangeInput}
        />
        <p className="text-sm text-gray-500">Lupa password</p>
      </FormCard>
    </div>
  );
};

export default LoginPage;
