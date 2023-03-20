import React from "react";

const CheckBoxElement = ({ name, value, checked, handleFilter }) => {
  return (
    <div className="flex items-center mt-3 mb-4">
      <input type="checkbox" name={name} value={value} onChange={handleFilter} checked={checked} />
      <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">
        {value}
      </label>
    </div>
  );
};

export default CheckBoxElement;
