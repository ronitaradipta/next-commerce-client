import React from "react";

const UserProfileLoading = () => {
  const titleStyle = "mt-4 text-gray-500 bg-gray-300 min-w-[10rem] px-2 py-2 ";
  return (
    <div role="status" className="py-6 px-4 rounded shadow animate-pulse md:p-6">
      <div className="mt-16 bg-white rounded-lg shadow-lg w-full flex md:gap-7 lg:gap-24 p-10 lg:p-20 flex-col md:flex-row">
        <div className="md:w-2/5 lg:w-2/12 flex flex-col items-center py-5">
          <svg className="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
          <button className="border border-gray-400 text-gray-500 font-medium p-3 w-full rounded-md mt-4">Pilih Foto</button>
          <p className="mt-4 text-sm text-gray-700">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
          <button className="border border-gray-400 text-gray-500 font-medium p-3 w-full rounded-md mt-8">Ubah Kata Sandi</button>
        </div>
        <div className="flex flex-col gap-12 w-full md:w-5/12">
          <div>
            <h2>Biodata</h2>
            <div className="grid grid-cols-2 gap-x-12">
              <p className={titleStyle}></p>
              <p className={titleStyle}></p>
              <p className={titleStyle}></p>
              <p className={titleStyle}></p>
              <p className={titleStyle}></p>
              <p className={titleStyle}></p>
            </div>
          </div>
          <div>
            <h2>Kontak</h2>
            <div className="grid grid-cols-2 gap-x-12">
              <p className={titleStyle}></p>
              <p className={titleStyle}></p>
              <p className={titleStyle}></p>
              <p className={titleStyle}></p>
            </div>
          </div>
        </div>
        <div className=" md:w-2/5 ">
          <h2 className="mt-10 md:mt-0"></h2>

          <div className="border border-gray-300 rounded-lg w-full mt-4 p-4">
            <h3 className={titleStyle}></h3>
            <p className={titleStyle}></p>
            <p className={titleStyle}></p>
            <button className="text-emerald-500 font-medium mt-6 "></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileLoading;
