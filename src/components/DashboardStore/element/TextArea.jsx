import React from "react";

const TextArea = ({ label, placeholder }) => {
  return (
    <label className="mb-6 w-full flex gap-8">
      <span className="font-semibold text-base w-2/12">{label}</span>
      <textarea
        placeholder={placeholder}
        rows="4"
        className="border border-gray-300 font-normal rounded p-2 w-full"
      ></textarea>
    </label>
  );
};

export default TextArea;
