import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../../loading/Spinner";

const FormCard = ({
  title,
  button,
  link,
  question,
  route,
  loading,
  onSubmit,
  children,
}) => {
  return (
    <div className="w-1/2 flex justify-center items-center bg-emerald-500">
      <div className="bg-white w-1/2 min-h-[24rem] rounded-lg p-7 flex flex-col gap-3">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {children}
          <button
            className="bg-emerald-500 py-2 rounded-md text-white flex justify-center"
            type="submit"
          >
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
