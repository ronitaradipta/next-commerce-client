import React from "react";

const TextArea = ({ label, placeholder }) => {
  return (
    <label className="mb-6 w-full flex flex-wrap">
      <span className="font-semibold text-base w-full md:w-[20%] mb-2">{label}</span>
      <textarea placeholder={placeholder} rows="4" className="border border-gray-300 font-normal rounded p-2 w-full md:w-[80%]"></textarea>
    </label>
  );
};

export default TextArea;
