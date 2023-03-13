import React, { useState, useEffect } from "react";
import callApi from "../../../services/callApi";

const AddressEdit = ({ id, dataEdit, setMessage, setIsSuccess, setnewAddressForm, getUserAddress }) => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    province: "",
    city: "",
    regency: "",
    zipcode: "",
    phoneNumber: "",
  });

  const updateAddress = async (e) => {
    e.preventDefault();
    try {
      const response = await callApi.put(`/address/${dataEdit.id}`, input);
      setMessage(response.data.message);
      setIsSuccess(true);
      getUserAddress();
      setTimeout(() => {
        setnewAddressForm("address-list");
        setIsSuccess(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => setInputData(dataEdit), [dataEdit]);

  const setInputData = (dataEdit) => {
    setInput({
      name: dataEdit.name,
      address: dataEdit.address,
      province: dataEdit.province,
      regency: dataEdit.regency,
      city: dataEdit.city,
      zipcode: dataEdit.zipcode,
      phoneNumber: dataEdit.phoneNumber,
    });
  };

  const inputHandler = (e) => setInput({ ...input, [e.target.name]: e.target.value });

  return (
    <form id={id} onSubmit={updateAddress} className="w-full bg-white py-10 absolute z-[999]">
      {[
        ["Label Alamat", "name"],
        ["Alamat Lengkap", "address"],
        ["Provinsi", "province"],
        ["Kecamatan / Kelurahan", "regency"],
        ["Kota", "city"],
        ["Kode Pos", "zipcode"],
        ["Nomor HP", "phoneNumber"],
      ].map(([label, name]) => (
        <div key={name} className="flex flex-col mb-5 gap-2">
          <label htmlFor={name} className="font-semibold">
            {label}
          </label>
          <input id={name} type="text" className="w-full py-2 px-5 rounded border outline-none" name={name} value={input[name]} onChange={inputHandler} />
        </div>
      ))}
      <div className="flex flex-col w-full mb-5 gap-2 justify-center items-center">
        <p>Dengan klik “Simpan”, kamu menyetujui Syarat & Ketentuan.</p>
        <button className="bg-green-600 py-3 px-5 w-[120px] font-semibold rounded text-white hover:bg-green-800" type="submit">
          simpan
        </button>
      </div>
    </form>
  );
};

export default AddressEdit;
