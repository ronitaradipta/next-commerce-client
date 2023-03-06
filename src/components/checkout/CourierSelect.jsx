import React from "react";
import SelectElement from "./element/SelectElement";
import jne from "../../assets/store/jne.png";
import pos from "../../assets/store/pos-indonesia.png";
import tiki from "../../assets/store/tiki.png";
import SelectCourierElement from "./element/SelectCourierElement";
import Spinner from "../loading/Spinner";

export const CourierSelect = ({
  selectedOption,
  dataCourier,
  handleOptionChange,
  selectedCourier,
  setSelectedCourier,
  loading,
}) => {
  return (
    <div className="py-6">
      <h2 className="font-bold text-xl">Pilih Kurir</h2>
      <ul className="grid w-full gap-6 md:grid-cols-3 mt-6">
        <SelectElement
          id="jne"
          label="JNE"
          image={jne}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          defaultChecked
        />
        <SelectElement
          id="pos"
          label="POS"
          image={pos}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <SelectElement
          id="tiki"
          label="TIKI"
          image={tiki}
          selectedOption={selectedOption}
          dataCourier={dataCourier}
          handleOptionChange={handleOptionChange}
        />
      </ul>
      {dataCourier && (
        <ul className="grid md:grid-cols-3 border border-gray-300 bg-gray-50 rounded-md mt-4 p-4 gap-8">
          {loading ? (
            <Spinner />
          ) : (
            dataCourier.costs.map((item, idx) => {
              return (
                <SelectCourierElement
                  item={item}
                  key={idx}
                  selectedCourier={selectedCourier}
                  setSelectedCourier={setSelectedCourier}
                />
              );
            })
          )}
        </ul>
      )}
    </div>
  );
};
