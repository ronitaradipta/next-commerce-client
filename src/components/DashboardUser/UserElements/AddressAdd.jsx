import React, { useState } from "react";
import callApi from "../../../services/callApi";
import Spinner from "../../loading/Spinner";

const AddressAdd = ({ id, setnewAddressForm, setIsSuccess, setMessage, getUserAddress }) => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    regency: "",
    city: "",
    province: "",
    zipcode: "",
    phoneNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState({
    name: 0,
    address: 0,
  });
  const MAX_CHAR = {
    name: 30,
    address: 200,
  };

  const SubmitNewAddress = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await callApi.post("/address", {
        name: input.name,
        address: input.address,
        regency: input.regency,
        city: input.city,
        province: input.province,
        zipcode: input.zipcode,
        phoneNumber: input.zipcode,
      });
      setIsLoading(false);
      setIsSuccess(true);
      setMessage("Berhasil menambahkan alamat baru");
      setTimeout(() => {
        getUserAddress();
        setIsSuccess(false);
      }, 1500);
      setnewAddressForm("address-list");
    } catch (error) {
      console.log(error);
    }
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value.slice(0, MAX_CHAR[name]);
    const count = value.length;
    setInput({ ...input, [name]: value });
    setCharCount({ ...charCount, [name]: count });
  };

  return (
    <form id={id} onSubmit={SubmitNewAddress} className="w-full bg-white py-10 absolute z-[999]">
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Label Alamat
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="name" onChange={inputHandler} maxLength={MAX_CHAR.name} />
        <div className="flex justify-end">
          {charCount.name}/{MAX_CHAR.name}
        </div>
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="full-address" className=" font-semibold">
          Alamat Lengkap
        </label>
        <textarea id="" cols="30" rows="10" className="border outline-none min-h-[150px] max-h-[150px] rounded-lg overflow-scroll px-2" name="address" onChange={inputHandler} maxLength={MAX_CHAR.address}></textarea>
        <div className="flex justify-end">
          {charCount.address}/{MAX_CHAR.address}
        </div>
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Provinsi
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="province" onChange={inputHandler} />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Kecamatan / Kelurahan
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="regency" onChange={inputHandler} />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Kota
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="city" onChange={inputHandler} />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Kode Pos
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="zipcode" onChange={inputHandler} />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Nomor HP
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="phoneNumber" onChange={inputHandler} />
      </div>
      <div className="flex flex-col  w-full  mb-5 gap-2 justify-center items-center">
        <p>Dengan klik “Simpan”, kamu menyetujui Syarat & Ketentuan.</p>
        <button className="bg-green-600 flex justify-center py-3 px-5 w-[120px] font-semibold rounded text-white hover:bg-green-800" type="submit">
          {isLoading ? <Spinner /> : "Simpan"}
        </button>
      </div>
    </form>
  );
};

export default AddressAdd;
