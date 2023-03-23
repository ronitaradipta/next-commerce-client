import React from "react";

const InputElementOTP = ({
  type,
  name,
  value,
  maxLength,
  onChange,
  onKeyDown,
  onPaste,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      maxLength={maxLength}
      className="border border-gray-400 rounded-md p-2 w-[40px] text-center"
      onChange={onChange}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      required
    />
  );
};

export default InputElementOTP;
