import React from "react";

const InputAddProduct = ({ label, placeholder, type }) => {
  return (
    <>
      <label className="mb-6 w-full flex gap-8">
        <span className="font-semibold text-base w-2/12">{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="border border-gray-300 font-normal rounded p-2 w-full"
        />
      </label>
    </>
  );
};

export default InputAddProduct;
