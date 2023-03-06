import React from "react";

const SelectCourierElement = ({
  selectedCourier,
  setSelectedCourier,
  item,
}) => {
  return (
    <li>
      <input
        type="radio"
        id={item.service}
        name="selectcourier"
        value={item.cost[0].value}
        checked={selectedCourier === item.cost[0].value}
        onChange={() => setSelectedCourier(item.cost[0].value)}
        className="hidden peer"
        required
      />
      <label
        htmlFor={item.service}
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-600 peer-checked:text-emerald-600 hover:text-gray-600 hover:bg-gray-100 "
      >
        <div className="w-7/12">
          <h3 className="font-semibold">{item.service}</h3>
          <p className="text-sm">
            Perkiraan pengiriman (hari): {item.cost[0].etd}
          </p>
        </div>
        <p className="text-lg font-bold">{item.cost[0].value}</p>
      </label>
    </li>
  );
};

export default SelectCourierElement;
