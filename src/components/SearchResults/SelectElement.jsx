import React from "react";

const SelectElement = ({ data, handleFilter, value }) => {
  return (
    <select name="category" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" onChange={handleFilter}>
      <option defaultValue value={value !== "" ? "" : value}>
        Semua Kategori
      </option>
      {data &&
        data.map(( data ) => {
          return (
            <option value={data.slug}>
              {data.name}
            </option>
          );
        })}
    </select>
  );
};

export default SelectElement;
