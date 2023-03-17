import React from "react";

const InputQtyElement = ({ inputQty, setInputQty, data, handleOnChange }) => {
  return (
    <div className="flex space-x-9 border items-center flex-grow-0 font-normal text-lg">
      <div
        className="btn--min px-4 py-3 text-emerald-500 hover:cursor-pointer"
        onClick={() => {
          inputQty > 0 && setInputQty(inputQty - 1);
        }}
      >
        <button>-</button>
      </div>
      <input
        value={inputQty}
        className="total--barang w-8 text-center appearance-none"
        onChange={handleOnChange}
        type="text"
      />
      <div
        className="btn--plus px-4 py-3 text-emerald-500 hover:cursor-pointer"
        onClick={() => {
          inputQty < data.product.stock && setInputQty(inputQty + 1);
        }}
      >
        <button>+</button>
      </div>
    </div>
  );
};

export default InputQtyElement;
