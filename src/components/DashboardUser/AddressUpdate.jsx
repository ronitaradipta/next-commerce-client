import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import callApi from "../../services/callApi";
import { GrClose } from "react-icons/gr";
import Notification from "../loading/Notification";
import ConfirmationBox from "../loading/ConfirmationBox";
import AddressAdd from "./UserElements/AddressAdd";
import AddressList from "./UserElements/AddressList";

const AddressUpdate = ({ id, showEditData }) => {
  const dataCookies = Cookies.get("user");
  const [Message, setMessage] = useState("");
  const [Address, setAddress] = useState([]);
  const [active, setActive] = useState(null);
  const [Success, setIsSuccess] = useState(false);
  const [newAddressForm, setnewAddressForm] = useState(null);
  const [addressIdToDelete, setAddressIdToDelete] = useState(null);

  useEffect(() => {
    if (dataCookies) {
      getUserAddress();
    }
  }, [dataCookies, Address]);

  const getUserAddress = async () => {
    const response = await callApi.get("/address/users");

    setAddress(response.data.data);
  };

  const setMainAddress = async (id) => {
    try {
      setIsSuccess(false);
      await callApi.put(`/address/main/${id}`);
      setIsSuccess(true);
      setMessage("Berhasil mengubah alamat utama");
      setTimeout(() => {
        getUserAddress();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const showConfirmationBox = (id) => {
    setAddressIdToDelete(id);
    setActive(true);
  };

  const hideConfirmationBox = () => {
    setAddressIdToDelete(null);
    setActive(false);
  };

  const OpenForm = (id) => {
    setnewAddressForm(id === newAddressForm ? null : id);
  };

  // this will set the main address to be shown on the top
  const sortedAddress =
    Address.length > 0
      ? [...Address].sort((a, b) => {
          if (a.isMain && !b.isMain) {
            return -1;
          } else if (!a.isMain && b.isMain) {
            return 1;
          } else {
            return 0;
          }
        })
      : [];

  return (
    <div id={id} className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 animate-modal bg-[rgba(0,0,0,0.5)] z-[99]">
      {active ? <ConfirmationBox addressId={addressIdToDelete} setActive={hideConfirmationBox} getUserAddress={getUserAddress} setIsSuccess={setIsSuccess} setMessage={setMessage} /> : ""}
      {Success ? <Notification SuccessMessage={Message} /> : ""}
      <div className=" w-full h-[500px] overflow-scroll lg:w-[80%] bg-white py-10 px-10 rounded-lg">
        <div className="flex flex-col w-full justify-center items-center ">
          <div className="flex w-full items-center justify-between pb-10 border-b-2 ">
            <h2 className="mt-10 md:mt-0">Daftar Alamat Kamu</h2>
            <div className="flex gap-5">
              <button onClick={() => OpenForm("address-form")} className="bg-green-500 py-2 px-5 rounded font-semibold">
                {newAddressForm === "address-form" ? "List Alamat" : "+ Tambah Alamat"}
              </button>
              <button className="hover:bg-neutral-200 py-2 px-3 rounded" onClick={showEditData}>
                <GrClose />
              </button>
            </div>
          </div>
          <div className="w-full relative">
            {/* add new address form */}
            {newAddressForm === "address-form" ? <AddressAdd id="address-form" setnewAddressForm={setnewAddressForm} setMessage={setMessage} setIsSuccess={setIsSuccess} /> : ""}
            {/* List of Address = this is the first rendered when address list opened */}
            <AddressList id={id} sortedAddress={sortedAddress} showConfirmationBox={showConfirmationBox} setMainAddress={setMainAddress} getUserAddress={getUserAddress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressUpdate;
