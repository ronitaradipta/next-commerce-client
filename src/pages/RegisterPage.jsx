import callApi from "../services/callApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import FormCard from "../components/auth/elements/FormCard";
import LeftContainer from "../components/auth/LeftContainer";
import Notification from "../components/loading/Notification";
import InputElement from "../components/auth/elements/InputElement";

const RegisterPage = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();
  const [isMatch, setIsMatch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState({});
  const [validation, setValidation] = useState({
    password: false,
    passwordConfirm: false,
  });

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await callApi.post("/auth/register", input);
      setSuccessMessage(data.message);
      setIsSuccess(true);
      setTimeout(() => navigate("/login"), 2500);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeInput = (e) => {
    setErrorMessage("");
    const { name, value } = e.target;
    setInput({ ...input, [e.target.name]: e.target.value });
    // check if each input met the length requirement
    const isLength = value.length > 1 && value.length < 8;
    // check if input value are match each other
    const isMatch = name === "passwordConfirm" ? value === input.password : true && name === "password" ? value === input.passwordConfirm : true;
    setValidation({ ...validation, [name]: isLength });
    setIsMatch(isMatch);
  };

  // set button from disable to enable once requirement for validation fulfilled
  useEffect(() => {
    const { password, passwordConfirm } = validation;
    setDisabled(password === false && passwordConfirm === false && isMatch);
  }, [validation, isMatch]);

  // set toggle button for password visibility / non-visibility
  const passwordToggle = (type) => (
    <div className="w-[10%] absolute right-2 flex justify-end cursor-pointer" onClick={() => setPasswordVisible((prevState) => ({ ...prevState, [type]: !prevState[type] }))}>
      {passwordVisible[type] ? <BiHide /> : <BiShow />}
    </div>
  );
  // set password alert message
  const passwordAlert = (isValid, message) => (isValid && input.password !== "" ? <div className="text-red-500 text-sm">{message}</div> : null);

  return (
    <div className="flex min-h-screen flex-wrap justify-center">
      {isSuccess && <Notification SuccessMessage={SuccessMessage} />}
      <LeftContainer />
      <div className="w-full md:w-1/2 flex justify-center items-center bg-emerald-500">
        <FormCard title="Daftar" button="DAFTAR" link="Login" question="Sudah Punya Akun?" route="/login" loading={loading} onSubmit={registerUser} ErrorMessage={ErrorMessage} disabled={disabled}>
          <InputElement type="text" placeholder="username" name="name" value={input.name} onChange={handleChangeInput} />
          <InputElement type="email" placeholder="email" name="email" value={input.email} onChange={handleChangeInput} />
          <InputElement
            password={passwordToggle("password")}
            type={passwordVisible.password ? "text" : "password"}
            placeholder="password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            alert={passwordAlert(validation.password, "min. 8 karakter")}
          />
          <InputElement
            password={passwordToggle("passwordConfirm")}
            type={passwordVisible.passwordConfirm ? "text" : "password"}
            placeholder="Konfirmasi Password"
            name="passwordConfirm"
            value={input.passwordConfirm}
            onChange={handleChangeInput}
            alert={passwordAlert(!isMatch, "password tidak sama")}
          />
        </FormCard>
      </div>
    </div>
  );
};

export default RegisterPage;
