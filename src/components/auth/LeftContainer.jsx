import React from "react";
import logo from "../../assets/images/logo.png";
import illustration from "../../assets/images/image 4.png";
import { Link } from "react-router-dom";

const LeftContainer = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center">
      <Link to="/">
        <img src={logo} alt="" className="w-80" />
      </Link>
      <p className="text-lg">The Next Biggest e-commerce Platform</p>
      <img src={illustration} alt="" className="w-80" />
    </div>
  );
};

export default LeftContainer;
