import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import callApi from "../../services/callApi";
import { GrClose } from "react-icons/gr";
import Notification from "../loading/Notification";
import ConfirmationBox from "../loading/ConfirmationBox";
import AddressAdd from "./UserElements/AddressAdd";
import AddressList from "./UserElements/AddressList";
import AddressEdit from "./UserElements/AddressEdit";

const AddressUpdate = ({ id, showEditData }) => {
  const DataCookies = Cookies.get("token");
  const [addressData, setAddressData] = useState("");
  const [Message, setMessage] = useState("");
  const [Address, setAddress] = useState([]);
  const [active, setActive] = useState(null);
  const [Success, setIsSuccess] = useState(false);
  const [newAddressForm, setnewAddressForm] = useState("address-list");
  const [addressIdToDelete, setAddressIdToDelete] = useState(null);

  useEffect(() => {
    if (DataCookies) {
      getUserAddress();
    }
  }, [DataCookies, Address]);

  const getUserAddress = async () => {
    const response = await callApi.get("/address/users");
    setAddress(response.data.data);
  };

  const setMainAddress = async (id) => {
    try {
      await callApi.put(`/address/main/${id}`);
      setMessage("Berhasil mengubah alamat utama");
      setIsSuccess(true);
      setTimeout(() => {
        getUserAddress();
        setIsSuccess(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
  const updateAddress = async (e) => {
    try {
      await callApi.put(`/address/${id}`);
      setIsSuccess(true);
      setMessage("Berhasil mengupdate alamat");
      setTimeout(() => {
        getUserAddress();
        setIsSuccess(false);
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

  const getEditFormData = async (id) => {
    const response = await callApi.get(`/address/${id}`);
    setAddressData(response.data);
    EditForm("address-edit");
  };

  const EditForm = (id) => {
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
    <div
      id={id}
      className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 animate-modal bg-[rgba(0,0,0,0.5)] z-[99]"
    >
      {active ? (
        <ConfirmationBox
          addressId={addressIdToDelete}
          setActive={hideConfirmationBox}
          getUserAddress={getUserAddress}
          setIsSuccess={setIsSuccess}
          setMessage={setMessage}
        />
      ) : (
        ""
      )}
      {Success ? <Notification SuccessMessage={Message} /> : ""}
      <div className=" w-full h-[500px] overflow-scroll lg:w-[80%] bg-white py-10 px-10 rounded-lg z-[999]">
        <div className="flex flex-col w-full justify-center items-center ">
          <div className="flex w-full items-center justify-between pb-10 border-b-2 ">
            <h2 className="mt-10 md:mt-0">
              {" "}
              {newAddressForm === "address-form"
                ? "Form Alamat Baru"
                : newAddressForm === "address-edit"
                ? "Form Edit Alamat"
                : "List Alamat"}
            </h2>
            <div className="flex gap-5">
              {newAddressForm === "address-list" ? (
                <button
                  onClick={() => OpenForm("address-form")}
                  className="bg-green-500 text-white py-2 px-5 rounded font-semibold"
                >
                  +Tambah Alamat
                </button>
              ) : (
                <button
                  onClick={() => OpenForm("address-list")}
                  className="bg-green-500 text-white py-2 px-5 rounded font-semibold"
                >
                  Batal
                </button>
              )}

              <button
                className="hover:bg-neutral-200 py-2 px-3 rounded"
                onClick={showEditData}
              >
                <GrClose />
              </button>
            </div>
          </div>
          <div className="w-full relative">
            {/* edit address */}
            {newAddressForm === "address-edit" ? (
              <AddressEdit
                id="address-edit"
                dataEdit={addressData}
                setnewAddressForm={setnewAddressForm}
                setMessage={setMessage}
                setIsSuccess={setIsSuccess}
                getUserAddress={getUserAddress}
              />
            ) : (
              ""
            )}
            {/* add new address */}
            {newAddressForm === "address-form" ? (
              <AddressAdd
                id="address-form"
                setnewAddressForm={setnewAddressForm}
                setMessage={setMessage}
                setIsSuccess={setIsSuccess}
                getUserAddress={getUserAddress}
              />
            ) : (
              ""
            )}
            {/* List of All Address = this is the first rendered when address list opened */}
            {newAddressForm === "address-list" ? (
              <AddressList
                id="addresslist"
                sortedAddress={sortedAddress}
                showConfirmationBox={showConfirmationBox}
                setMainAddress={setMainAddress}
                getUserAddress={getUserAddress}
                OpenForm={OpenForm}
                getEditFormData={getEditFormData}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressUpdate;
