import React, { useState } from "react";
import callApi from "../../../services/callApi";
import Spinner from "../../loading/Spinner";

const MAX_CHAR = {
  name: 30,
  address: 200,
};

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await callApi.post("/address", input);
      setIsSuccess(true);
      setMessage("Berhasil menambahkan alamat baru");
      setTimeout(() => {
        getUserAddress();
        setIsSuccess(false);
      }, 1500);
      setnewAddressForm("address-list");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const SliceValue = value.slice(0, MAX_CHAR[name]);
    const count = SliceValue.length;
    setInput({ ...input, [name]: SliceValue });
    setCharCount({ ...charCount, [name]: count });
  };

  const renderInput = (name, label, type = "text", rows = 1) => (
    <div className="flex flex-col mb-5 gap-2">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      {type === "text" && <input id={name} type={type} className="w-full py-2 px-5 rounded border outline-none" name={name} onChange={handleInputChange} maxLength={MAX_CHAR[name]} required />}
      {type === "textarea" && (
        <textarea id={name} cols="30" rows={rows} className="border outline-none min-h-[150px] max-h-[150px] rounded-lg overflow-scroll px-2" name={name} onChange={handleInputChange} maxLength={MAX_CHAR[name]} required></textarea>
      )}
      <div className="flex justify-end">
        {(name === "name" || name === "address") && (
          <span>
            {charCount[name]}/{MAX_CHAR[name]}
          </span>
        )}
      </div>
    </div>
  );
  return (
    <form id={id} onSubmit={handleSubmit} className="w-full bg-white py-10 absolute z-[999]">
      {renderInput("name", "Label Alamat")}
      {renderInput("address", "Alamat Lengkap", "textarea", 10)}
      {renderInput("province", "Provinsi")}
      {renderInput("regency", "Kecamatan / Kelurahan")}
      {renderInput("city", "Kota")}
      {renderInput("zipcode", "Kode Pos")}
      {renderInput("phoneNumber", "Nomor HP")}
      <div className="flex flex-col w-full mb-5 gap-2 justify-center items-center">
        <p>Dengan klik “Simpan”, kamu menyetujui Syarat & Ketentuan.</p>
        <button className="bg-green-600 flex justify-center py-3 px-5 w-[120px] font-semibold rounded text-white hover:bg-green-800" type="submit">
          {isLoading ? <Spinner /> : "Simpan"}
        </button>
      </div>
    </form>
  );
};

export default AddressAdd;
