import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const NonUserAuth = ({ children }) => {
  if (Cookies.get("user")) {
    return <Navigate to="/" />;
  } else if (!Cookies.get("user")) {
    return children;
  }
};

const UserAuth = ({ children }) => {
  if (Cookies.get("user")) {
    return children;
  } else if (!Cookies.get("user")) {
    return <Navigate to="/login" />;
  }
};

export { UserAuth, NonUserAuth };
