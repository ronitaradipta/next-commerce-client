import { useState, useEffect } from "react";
import FormCardOTP from "../components/OTPVerification/FormCardOTP";
import InputElementOTP from "../components/OTPVerification/InputElementOTP";
import { useNavigate, useLocation } from "react-router-dom";
import callApi from "../services/callApi";
import Cookies from "js-cookie";

const OTPverificationPage = () => {
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const [Notification, setNotification] = useState(null);
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data } = state; // note : this data saved on local storage might having a security risk

  //   catch the input field value and turn into array
  const handleChangeInput = (e, index) => {
    const { value } = e.target;
    const otpArray = [...otp];
    otpArray[index] = value;
    setOTP(otpArray);
    console.log(otp);
  };

  const handleKeyDown = (e, index) => {
    // clear Error Message once field is filled
    setErrorMessage("");
    const { key } = e;

    // Allow only numeric keys and Enable backspace to delete previous field
    if (!((key >= "0" && key <= "9") || key === "Backspace")) {
      e.preventDefault();
    } else {
      if (key === "Backspace") {
        const otpArray = [...otp];
        otpArray[index] = "";
        setOTP(otpArray);
        if (index > 0) {
          document.getElementsByName(`otp-${index - 1}`)[0].focus();
        }
      } else {
        // move to next input field when current field is filled
        if (index < otp.length - 1 && e.target.value !== "") {
          document.getElementsByName(`otp-${index + 1}`)[0].focus();
        }
      }
    }
  };

  useEffect(
    (e) => {
      // Automatically submit the form when all fields are filled
      if (otp.every((field) => field !== "")) {
        handleSubmit(e);
      }

      let timer = null;
      // Only start the countdown if the countdown value is greater than 0
      if (countdown > 0) {
        timer = setInterval(() => {
          setCountdown(countdown - 1);
        }, 1000);
      }

      // Clear the timer when the countdown reaches 0
      if (countdown === 0) {
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    },
    [otp, countdown]
  );

  // Disable the resend button and set the countdown to 60 seconds then resend OTP
  const handleResendClick = async () => {
    setCountdown(30);
    resendOTP();
  };

  // OTP RESEND
  const resendOTP = async () => {
    setNotification(false);
    try {
      const response = await callApi.post("/auth/login", data);
      setLoading(false);
      setSuccessMessage(response.data.message);
      setNotification(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    // change the callback to prevent use an undefined paramater for automatic submit form
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    // join array into string
    const fullOTP = otp.join("");
    setLoading(true);
    setNotification(false);
    try {
      const response = await callApi.post(`/auth/verify-otp`, {
        email: data.email,
        code: fullOTP,
      });
      setLoading(false);
      setSuccessMessage(response.data.message);
      Cookies.set("token", response.data.data, { expires: 1 });
      setNotification(true);
      setOTP(["", "", "", "", "", ""]);
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      setLoading(false);
      setOTP(["", "", "", "", "", ""]);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen mx-auto flex justify-center items-center bg-neutral-200">
      <div
        className={`${
          Notification ? "flex" : "hidden"
        } mr-5 ml-5 fixed top-0 py-2 px-5 bg-green-500 opacity-0 rounded-md text-white translate-y-[150px] animate-popUp`}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-1.5 text-black flex-shrink-0"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p>{SuccessMessage}</p>
      </div>
      <div className="form_container p-5 min-w-[28rem] bg-white rounded-md">
        <FormCardOTP
          title="OTP Verification"
          notification="Kode OTP telah dikirimkan ke"
          button="VERIFIKASI"
          question="Belum menerima email ?"
          route="/register"
          link="kirim ulang"
          onChange={handleChangeInput}
          loading={loading}
          onSubmit={handleSubmit}
          ErrorMessage={ErrorMessage}
          email={data.email}
          onClick={handleResendClick}
          disabled={countdown > 0}
        >
          {otp.map((otpField, index) => (
            <InputElementOTP
              key={index}
              type="text"
              name={`otp-${index}`}
              value={otpField}
              maxLength="1"
              onChange={(e) => handleChangeInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              required
            />
          ))}
        </FormCardOTP>
        <div className="flex justify-center">
          {countdown > 0
            ? `Please wait ${countdown} seconds to Resend`
            : "belum mendapat email konfirmasi ?"}
          <button
            className="text-green-500"
            onClick={handleResendClick}
            disabled={countdown > 0}
          >
            {countdown > 0 ? "" : " Resend OTP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPverificationPage;
