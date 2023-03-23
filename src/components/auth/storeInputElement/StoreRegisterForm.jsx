import React from "react";
import Spinner from "../../loading/Spinner";

const StoreRegisterForm = ({
  button,
  isLoading,
  onSubmit,
  children,
  errorMessage,
  validation,
  disabled,
}) => {
  const inputButton = `border ${
    !disabled ? "bg-gray-200 cursor-not-allowed " : "bg-green-500 text-white"
  } rounded-md px-5 py-2 w-full mb-4 text-md font-bold justify-center flex`;
  return (
    <div className=" w-full md:w-1/2 flex justify-center items-center bg-emerald-500">
      <div className="bg-white min-h-[24rem] rounded-lg p-7 flex flex-col gap-3">
        <h2 className="text-2xl font-bold mb-4">
          Ayo <span> Daftarkan Tokomu</span>
        </h2>
        <p className="text-red-500">{errorMessage}</p>
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
          {children}
          <button className={inputButton} type="submit" disabled={!disabled}>
            {isLoading ? <Spinner /> : button}
          </button>
          {/* <SubmitButton text={button} isLoading={isLoading} disabled={!isFormValid} /> */}
        </form>
      </div>
    </div>
  );
};

export default StoreRegisterForm;
