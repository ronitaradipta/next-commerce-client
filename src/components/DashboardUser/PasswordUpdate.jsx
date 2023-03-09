import React from "react";
import { GrClose } from "react-icons/gr";
import callApi from "../../services/callApi";
import { useState } from "react";
import Spinner from "../loading/Spinner";
import { BiShow, BiHide } from "react-icons/Bi";
const PasswordUpdate = ({ id, showEditData, setLoader, Loader, setSuccessMessage, setIsSuccess, setActiveComponent }) => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [ErrorMessage, setErrorMessage] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState({});

  const handlePasswordVisibility = (inputName) => {
    setPasswordVisible({
      ...passwordVisible,
      [inputName]: !passwordVisible[inputName],
    });
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      setIsSuccess(false);
      const response = await callApi.put("/users/password", {
        oldPassword: password.oldPassword,
        newPassword: password.newPassword,
        confirmPassword: password.confirmPassword,
      });
      setSuccessMessage(response.data.message);
      setIsSuccess(true);
      setLoader(false);
      setTimeout(() => {
        setActiveComponent(null);
      }, 1500);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setLoader(false);
    }
  };

  const inputHandler = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  const clearField = () => {
    setErrorMessage(false);
  };

  return (
    <div  className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0  animate-modal bg-[rgba(0,0,0,0.5)] z-[99]">
      <div class=" py-5 px-8 rounded-10 bg-primary-grey text-base-responsive bg-white border rounded-xl ">
        <header className="flex justify-between mb-5">
          <h2>Password Change</h2>
          <button className="hover:bg-neutral-200 py-2 px-2 rounded" onClick={showEditData}>
            <GrClose />
          </button>
        </header>
        <div className="flex justify-center h-[30px] text-red-500">
          <p>{ErrorMessage}</p>
        </div>

        <form id={id} onSubmit={updatePassword} class="w-full lg:max-w-[440px]">
          <div class="mb-5">
            <div class="font-medium mb-1.5">Password Lama</div>
            <div class="relative bg-white">
              <div class="flex items-center py-2.5 px-3 rounded border-2 border-grey-ec">
                <input
                  name="oldPassword"
                  class="w-full sm-only:text-sm focus:outline-none focus:shadow-outline"
                  placeholder="Masukkan password lama"
                  type={passwordVisible.oldPassword ? "text" : "password"}
                  onChange={inputHandler}
                  onKeyDown={clearField}
                />
                <div class="w-[10%] flex justify-end">{passwordVisible.oldPassword ? <BiHide onClick={() => handlePasswordVisibility("oldPassword")} /> : <BiShow onClick={() => handlePasswordVisibility("oldPassword")} />}</div>
              </div>
              <small class="text-red"></small>
            </div>
          </div>
          <div class="mb-5">
            <div class="font-medium mb-1.5">Password Baru</div>
            <div class="relative bg-white">
              <div class="flex items-center py-2.5 px-3 rounded border-2 border-grey-ec">
                <input
                  name="newPassword"
                  class="w-full sm-only:text-sm focus:outline-none focus:shadow-outline"
                  placeholder="Masukkan password baru"
                  type={passwordVisible.newPassword ? "text" : "password"}
                  onChange={inputHandler}
                  onKeyDown={clearField}
                />
                <div class="w-[10%] flex justify-end">{passwordVisible.newPassword ? <BiHide onClick={() => handlePasswordVisibility("newPassword")} /> : <BiShow onClick={() => handlePasswordVisibility("newPassword")} />}</div>
              </div>
              <small class="text-red"></small>
            </div>
          </div>
          <div class="text-grey-90 -mt-2 mb-4">Password minimal 8 karakter dengan kombinasi huruf kecil dan angka.</div>
          <div class="mb-5">
            <div class="font-medium mb-1.5">Konfirmasi Password Baru</div>
            <div class="relative bg-white">
              <div class="flex items-center py-2.5 px-3 rounded border-2 border-grey-ec">
                <input
                  name="confirmPassword"
                  class="w-full sm-only:text-sm focus:outline-none focus:shadow-outline"
                  placeholder="Konfirmasi Password Baru"
                  type={passwordVisible.confirmPassword ? "text" : "password"}
                  onChange={inputHandler}
                  onKeyDown={clearField}
                />
                <div class="w-[10%] flex justify-end">{passwordVisible.confirmPassword ? <BiHide onClick={() => handlePasswordVisibility("confirmPassword")} /> : <BiShow onClick={() => handlePasswordVisibility("confirmPassword")} />}</div>
              </div>
              <small class="text-red"></small>
            </div>
          </div>
          <div class="text-grey-90 -mt-2 mb-4">Password minimal 8 karakter dengan kombinasi huruf kecil dan angka.</div>
          <div class="flex justify-end">
            <button id="password-update" className="bg-green-500 py-2 px-5 flex justify-center w-[100px] h-[40px] rounded" type="submit">
              {Loader ? <Spinner /> : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordUpdate;
