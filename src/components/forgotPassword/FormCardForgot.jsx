import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../loading/Spinner";

const FormCardForgot = ({ title, button, link1, link2, route1, route2, question, loading, onSubmit, children, errMessage, suggestion }) => {
  return (
    <div className=" min-h-[24rem] min-w-[24rem] rounded-lg p-2 flex flex-col gap-3">
      <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
      <p className="text-center text-red-500 p-2">{errMessage}</p>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        {children}
        <p>{suggestion}</p>
        <button className="bg-emerald-500 py-2 rounded-md text-white flex justify-center" type="submit">
          {loading && <Spinner />}
          {!loading && button}
        </button>
      </form>
      <p className="text-center p-2">
        {question}
        <Link to={route1}>
          <span className="text-emerald-500 font-semibold ml-1">{link1} </span>
        </Link>
        atau
        <Link to={route2}>
          <span className="text-emerald-500 font-semibold ml-1">{link2}</span>
        </Link>
      </p>
    </div>
  );
};

export default FormCardForgot;
