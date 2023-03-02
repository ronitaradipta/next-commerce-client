import React from "react";
import { Link } from "react-router-dom";

const ExpiredToken = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-5 px-5 text-[20px] border bg-red-200">
        Invalid Link or Your token has been expired. Click
        <Link to="/forgot-password" className="text-green-500">
          {" "}
          here
        </Link>{" "}
        to get a new link
      </div>
    </div>
  );
};

export default ExpiredToken;
