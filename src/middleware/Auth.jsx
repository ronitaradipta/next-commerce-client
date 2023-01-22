import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  if (Cookies.get("user")) {
    return <Navigate to="/" />;
  } else if (!Cookies.get("user")) {
    return children;
  }
};

export { Auth };
