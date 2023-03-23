import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const NonUserAuth = ({ children }) => {
  if (Cookies.get("token")) {
    return <Navigate to="/" />;
  } else if (!Cookies.get("token")) {
    return children;
  }
};

const UserAuth = ({ children }) => {
  if (Cookies.get("token")) {
    return children;
  } else if (!Cookies.get("token")) {
    return <Navigate to="/login" />;
  }
};

export { UserAuth, NonUserAuth };
