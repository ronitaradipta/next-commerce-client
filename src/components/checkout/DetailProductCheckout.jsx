import React from "react";
import toko1 from "../../assets/images/img/toko.jpg";
import InputQtyElement from "./element/InputQtyElement";

const DetailProductCheckout = ({
  data,
  inputQty,
  setInputQty,
  handleOnChange,
}) => {
  return (
    <div className="flex py-6 gap-9">
      <img
        src={data && data.images[0].image}
        alt=""
        className="md:w-2/12 w-4/12"
      />
      <div className="6/12">
        <h3 className="text-md font-medium">{data && data.name}</h3>
        <div className="flex gap-2 items-center">
          <p className="text-xl font-bold">Rp. {data && data.price}</p>
          {/* <span className="bg-red-300 text-red-500 font-bold p-1 rounded-md">
            {data && Math.ceil(data.discountPercentage)}%
          </span> */}
          {/* <p className="line-through text-gray-500">
            Rp
            {data &&
              Math.ceil((100 / (100 - data.discountPercentage)) * data.price)}
          </p> */}
        </div>
        <div className="md:flex gap-4 mt-5">
          <div className="flex mb-3 md:mb-0">
            <img
              src={data.storeImage}
              alt=""
              className="w-[50px] rounded-full"
            />
            <div>
              <h4 className="font-medium text-gray-700">{data.storeName}</h4>
              <p className="text-gray-500">{data.storeCity}</p>
            </div>
          </div>

          <InputQtyElement
            data={data}
            inputQty={inputQty}
            setInputQty={setInputQty}
            handleOnChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailProductCheckout;
