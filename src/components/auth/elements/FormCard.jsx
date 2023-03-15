import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../../loading/Spinner";

const FormCard = ({ title, button, link, question, route, loading, onSubmit, children, ErrorMessage, disabled }) => {
  const inputButton = `border ${!disabled ? "bg-gray-200 cursor-not-allowed  " : "bg-green-600 text-white  hover:bg-green-800"} rounded-md px-5 py-2 w-full mb-4 text-md font-bold flex justify-center`;
  return (
    <div className=" w-full md:w-1/2 flex justify-center items-center bg-emerald-500">
      <div className="bg-white min-h-[24rem] min-w-[24rem] rounded-lg p-7 flex flex-col gap-3">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-center text-red-500 p-2">{ErrorMessage}</p>
        <form className="flex flex-col" onSubmit={onSubmit}>
          {children}
          <button className={inputButton} type="submit" disabled={!disabled}>
            {loading && <Spinner />}
            {!loading && button}
          </button>
        </form>
        <p className="text-center p-2">
          {question}
          <Link to={route}>
            <span className="text-emerald-500 font-semibold ml-1">{link}</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormCard;
