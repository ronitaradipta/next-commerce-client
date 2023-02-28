import React from "react";

const SelectElement = ({
  id,
  label,
  image,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <li>
      <input
        type="radio"
        id={id}
        name="courier"
        value={id}
        checked={selectedOption === id}
        onChange={handleOptionChange}
        className="hidden peer"
        required
      />
      <label
        htmlFor={id}
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-600 peer-checked:text-emerald-600 hover:text-gray-600 hover:bg-gray-100 "
      >
        <div className="text-lg font-semibold w-full">{label}</div>
        <div className="h-10 w-full">
          <img className="h-10" src={image} alt="" />
        </div>
      </label>
    </li>
  );
};

export default SelectElement;
