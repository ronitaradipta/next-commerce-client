import React from "react";

const CheckBoxElement = ({ label }) => {
  return (
    <div className="flex items-center mt-3 mb-4">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500"
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBoxElement;
