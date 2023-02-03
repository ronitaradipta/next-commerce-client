import React from "react";

const SelectElement = ({ data }) => {
  return (
    <select
      name=""
      id=""
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
    >
      <option defaultValue>Pilih Kategori</option>
      {data &&
        data.map((item, idx) => {
          return (
            <option value={item} key={idx}>
              {item}
            </option>
          );
        })}
    </select>
  );
};

export default SelectElement;
