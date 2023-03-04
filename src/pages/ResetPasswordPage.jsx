import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ValidToken from "../components/resetPassword/ValidToken";
import ExpiredToken from "../components/resetPassword/ExpiredToken";
import callApi from "../services/callApi";

const ResetPasswordPage = () => {
  const [VerifyToken, setVerifyToken] = useState(true);
  const { token } = useParams();

  useEffect(() => {
    checkToken(token);
  }, [token]);

  const checkToken = async (token) => {
    try {
      await callApi.get(`/auth/verify/${token}`);
      setVerifyToken(true);
    } catch (error) {
      if (error) {
        setVerifyToken(false);
      }
    }
  };

  return <div className="min-h-screen mx-auto max-w-screen-xl px-5 flex justify-center items-center ">{VerifyToken ? <ValidToken token={token} /> : <ExpiredToken />}</div>;
};

export default ResetPasswordPage;
