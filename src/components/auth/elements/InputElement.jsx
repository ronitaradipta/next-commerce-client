import React from "react";

const InputElement = ({ type, placeholder, name, value, onChange }) => {
  return <input type={type} placeholder={placeholder} value={value} className="border border-gray-400 rounded-md p-2" name={name} onChange={onChange} required />;
};

export default InputElement;
