import React from "react";

const InputPriceElement = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border border-gray-300 rounded-md p-2 mt-3"
    />
  );
};

export default InputPriceElement;
