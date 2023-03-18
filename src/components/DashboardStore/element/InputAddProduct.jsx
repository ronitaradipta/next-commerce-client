import React from "react";

const InputAddProduct = ({ label, placeholder, type, name, onChange }) => {
  return (
    <>
      <label className="mb-6 w-full flex flex-wrap">
        <div className="font-semibold text-base w-full md:w-[20%] mb-2">
          {label}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border border-gray-300 font-normal rounded p-2 w-full md:w-[80%]"
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </label>
    </>
  );
};

export default InputAddProduct;
