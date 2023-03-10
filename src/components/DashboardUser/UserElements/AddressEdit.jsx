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
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  useEffect(() => {
    setInputData(dataEdit);
  }, [dataEdit]);

  const updateAddress = async (e) => {
    e.preventDefault();
    try {
      const response = await callApi.put(`/address/${dataEdit.id}`, {
        name: input.name,
        address: input.address,
        province: input.province,
        city: input.city,
        regency: input.regency,
        zipcode: input.zipcode,
        phoneNumber: input.phoneNumber,
      });
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

  return (
    <form id={id} onSubmit={updateAddress} className="w-full bg-white py-10 absolute z-[999]">
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Label Alamat
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="name" value={input.name} onChange={inputHandler} />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="full-address" className=" font-semibold">
          Alamat Lengkap
        </label>
        <textarea id="" cols="30" rows="10" className="border outline-none min-h-[150px] max-h-[150px] rounded-lg overflow-scroll px-2" name="address" value={input.address} onChange={inputHandler}></textarea>
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Provinsi
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="province" value={input.province} onChange={inputHandler} />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Kecamatan / Kelurahan
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="regency" value={input.regency} onChange={inputHandler} />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Kota
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="city" value={input.city} onChange={inputHandler} />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Kode Pos
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="zipcode" value={input.zipcode} onChange={inputHandler} />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label htmlFor="name" className=" font-semibold">
          Nomor HP
        </label>
        <input id="name" type="text" className="w-full py-2 px-5 rounded border outline-none" name="phoneNumber" value={input.phoneNumber} onChange={inputHandler} />
      </div>
      <div className="flex flex-col  w-full  mb-5 gap-2 justify-center items-center">
        <p>Dengan klik “Simpan”, kamu menyetujui Syarat & Ketentuan.</p>

        <button className="bg-green-600 py-3 px-5 w-[120px] font-semibold rounded text-white hover:bg-green-800" type="submit">
          simpan
        </button>
      </div>
    </form>
  );
};

export default AddressEdit;
