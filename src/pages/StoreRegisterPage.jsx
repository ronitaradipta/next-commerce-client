import { useState, useEffect } from "react";
import callApi from "../services/callApi";
import { useNavigate } from "react-router-dom";
import LeftContainer from "../components/auth/LeftContainer";
import Notification from "../components/loading/Notification";
import StoreRegisterForm from "../components/auth/storeInputElement/StoreRegisterForm";
import StoreInputElement from "../components/auth/storeInputElement/StoreInputElement";

const StoreRegisterPage = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    city: "",
  });

  const MAX_CHAR = { name: 20, description: 60 };
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState({ success: "", error: "" });
  const [charCount, setCharCount] = useState({ name: 0, description: 0 });
  const [validation, setValidation] = useState({ name: false, description: false });

  const navigate = useNavigate();

  const registerStore = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await callApi.post("/stores", input);
      setMessage({ success: response.data.message, error: "" });
      setIsSuccess(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setMessage({ error: response.data.message, success: "" });
    } finally {
      setIsLoading(false);
    }
  };

  // length validation and UI length count
  const inputHandler = (e) => {
    const { name, value } = e.target;
    const count = value.length;
    setInput({ ...input, [name]: value });
    setCharCount({ ...charCount, [name]: count });
    setValidation({ ...validation, [name]: count >= 1 && count < 5 });
  };

  // set disabled once requirement for both input fulfilled
  useEffect(() => setDisabled(!validation.name && !validation.description), [validation]);

  // set validation alert message
  const alert = (name) => (
    <div className="flex w-full justify-between">
      {!validation[name] ? <p></p> : <div className="text-red-500 text-sm"> min. 5 karakter</div>}
      {charCount[name]}/{MAX_CHAR[name]}
    </div>
  );

  return (
    <div className="flex h-screen flex-wrap">
      {isSuccess ? <Notification SuccessMessage={message.success} /> : ""}
      <LeftContainer />
      <StoreRegisterForm name="Asep" button="DAFTAR" onSubmit={registerStore} isLoading={isLoading} errorMessage={message.error} validation={validation} disabled={disabled}>
        <StoreInputElement validation={validation.name} type="text" placeholder="Nama Toko" name="name" onChange={inputHandler} maxLength={MAX_CHAR.name} alert={alert("name")} />
        <StoreInputElement validation={validation.description} type="text" placeholder="Deskripsi toko" name="description" onChange={inputHandler} maxLength={MAX_CHAR.description} alert={alert("description")} />
        <StoreInputElement type="text" placeholder="Domisili" name="city" onChange={inputHandler} />
      </StoreRegisterForm>
    </div>
  );
};

export default StoreRegisterPage;
