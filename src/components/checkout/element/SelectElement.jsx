import React from "react";

const SelectElement = ({ id, label }) => {
  return (
    <li>
      <input
        type="radio"
        id={id}
        name="courier"
        value={id}
        className="hidden peer"
        required
      />
      <label
        for={id}
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-600 peer-checked:text-emerald-600 hover:text-gray-600 hover:bg-gray-100 "
      >
        <div className="block">
          <div className="w-full text-lg font-semibold">{label}</div>
        </div>
      </label>
    </li>
  );
};

export default SelectElement;
