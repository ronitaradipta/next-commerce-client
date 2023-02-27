import React from "react";
import SelectElement from "./element/SelectElement";

export const CourierSelect = () => {
  return (
    <div className="py-6">
      <h2 className="font-bold text-xl">Pilih Kurir</h2>
      <ul className="grid w-full gap-6 md:grid-cols-3 mt-6">
        <SelectElement id="jne" label="JNE" />
        <SelectElement id="pos" label="POS" />
        <SelectElement id="tiki" label="TIKI" />
      </ul>
    </div>
  );
};
