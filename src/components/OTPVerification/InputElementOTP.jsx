import React from "react";

const InputElementOTP = ({ key, type, name, value, maxLength, onChange, onKeyDown }) => {
  return <input key={key} type={type} value={value} name={name} maxLength={maxLength} className="border border-gray-400 rounded-md p-2 w-[40px] text-center" onChange={onChange} onKeyDown={onKeyDown} required />;
};

export default InputElementOTP;
