import React from "react";
import Spinner from "../loading/Spinner";

const FormCardOTP = ({ title, button, loading, onSubmit, children, ErrorMessage, notification, email }) => {
  return (
    <div className="  max-w-[25rem] rounded-lg mb-5">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-red-500 p-2 text-center">{ErrorMessage}</p>
      <p className="text-center p-2">{notification}</p>
      <p className="text-center p-2 mb-5">{email}</p>
      <form className="flex flex-col items-center justify-center" onSubmit={onSubmit}>
        <div className="flex flex-wrap gap-5 mb-5 justify-center "> {children}</div>
        <button className="bg-emerald-500 py-2 mt-5 rounded-md text-white flex justify-center min-w-[22rem]" type="submit">
          {loading && <Spinner />}
          {!loading && button}
        </button>
      </form>
    </div>
  );
};

export default FormCardOTP;
