import React from "react";
import { MdAddPhotoAlternate } from "react-icons/md";

const InputMedia = ({ title, name, id, onChange, index, showImageInput }) => {
  return (
    <div className="mt-5 w-1/2 md:w-1/3 lg:w-1/5 flex items-center justify-center ">
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        {showImageInput[index] ? (
          <img src={showImageInput[index].image} className="w-full h-full" />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <MdAddPhotoAlternate className="text-gray-400 w-12 h-12" />
            <p className="mb-2 text-sm text-gray-500 font-semibold mt-3">
              {title}
            </p>
          </div>
        )}

        <input
          id={id}
          name={name}
          type="file"
          className="hidden"
          onChange={(e) => onChange(e, index)}
          required
        />
      </label>
    </div>
  );
};

export default InputMedia;
