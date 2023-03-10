import React from "react";
import Spinner from "../../loading/Spinner";

const StoreRegisterForm = ({ name, button, loading, onSubmit, children, errMessage }) => {
  return (
    <div className=" w-full md:w-1/2 flex justify-center items-center bg-emerald-500">
      <div className="bg-white min-h-[24rem] rounded-lg p-7 flex flex-col gap-3">
        <h2 className="text-2xl font-bold mb-4">
          Ayo <span>{name}, Daftarkan Tokomu</span>
        </h2>
        {errMessage && errMessage === "Invalid credentials" && <p className="text-center text-red-500 p-2">Email atau password salah</p>}
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {children}
          <button className="bg-emerald-500 py-2 rounded-md text-white flex justify-center" type="submit">
            {loading && <Spinner />}
            {!loading && button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StoreRegisterForm;
