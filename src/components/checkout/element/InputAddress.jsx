import React from "react";

const InputAddress = ({ label, title }) => {
  return (
    <div className="mt-4 w-1/2">
      <label htmlFor={label}>
        {title}
        <input
          type="text"
          className="block border border-gray-300 rounded-lg p-2 w-full"
          id={label}
        />
      </label>
    </div>
  );
};

export default InputAddress;
