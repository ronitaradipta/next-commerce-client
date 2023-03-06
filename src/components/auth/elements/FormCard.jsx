import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../../loading/Spinner";

const FormCard = ({ title, button, link, question, route, loading, onSubmit, children, ErrorMessage }) => {
  return (
    <div className=" w-full md:w-1/2 flex justify-center items-center bg-emerald-500">
      <div className="bg-white min-h-[24rem] min-w-[24rem] rounded-lg p-7 flex flex-col gap-3">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-center text-red-500 p-2">{ErrorMessage}</p>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {children}
          <button className="bg-emerald-500 py-2 rounded-md text-white flex justify-center" type="submit">
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
