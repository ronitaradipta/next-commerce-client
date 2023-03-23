import React from "react";

const SelectElementCategory = ({ data, title, handleFilter, value }) => {
  return (
    <select name="category" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" onChange={handleFilter}>
      <option defaultValue value={value !== "" ? "" : value}>
        {title}
      </option>
      {data &&
        data.map((item, idx) => {
          return (
            <option name="category" value={item.slug} key={idx}>
              {item.name}
            </option>
          );
        })}
    </select>
  );
};

export default SelectElementCategory;
