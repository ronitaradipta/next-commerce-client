import React from "react";
import Spinner from "../../loading/Spinner";

const AvatarElements = ({ src, Loader, uploadImage, showEditData }) => {
  return (
    <div className=" w-full md:w-[50%] lg:w-[25%] py-5 px-5">
      <div className="flex flex-col justify-center items-center ">
        <div className="image overflow-hidden relative md:h-full md:w-full rounded-full border border-gray-400 ">
          <img src={src} alt="profile" className="object-contain w-full" />
          {Loader ? (
            <div className="loader absolute bg-gray-500 opacity-50 top-0 rounded-full lg:w-full h-full flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="border border-gray-400 text-gray-500 font-medium w-full rounded-md mt-4">
          <label htmlFor="file-upload" className="flex flex-col px-2 items-center justify-center w-full rounded-lg cursor-pointer ">
            <div className="flex flex-col items-center justify-center ">
              <p className="mb-2 text-sm text-gray-500 font-semibold mt-3">Pilih Foto</p>
            </div>

            <input id="file-upload" type="file" name="avatar" className="hidden" onChange={uploadImage} />
          </label>
        </div>
        <p className="mt-4 text-sm text-gray-700">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
        <button id="btn-cancel-dob" onClick={showEditData} className="border border-gray-400 text-gray-500 font-medium p-3 w-full rounded-md mt-8">
          Ubah Kata Sandi
        </button>
      </div>
    </div>
  );
};

export default AvatarElements;
