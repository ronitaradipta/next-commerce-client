import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Header from "../components/homepage/Header";

const UserProfileSetting = () => {
  const [user, setUser] = useState("");
  const dataUser = Cookies.get("user");

  useEffect(() => {
    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }
  }, []);

  const titleStyle = "mt-4 text-gray-500";

  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <Header />
      <div className="px-6">
        <div className="mt-16 bg-white rounded-lg shadow-lg w-full flex md:gap-7 lg:gap-24 p-10 lg:p-20 flex-col md:flex-row">
          <div className="md:w-2/5 lg:w-2/12 flex flex-col items-center py-5">
            <img
              src={user.image}
              alt="profile"
              className="w-44 rounded-full border border-gray-400"
            />
            <button className="border border-gray-400 text-gray-500 font-medium p-3 w-full rounded-md mt-4">
              Pilih Foto
            </button>
            <p className="mt-4 text-sm text-gray-700">
              Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi
              file yang diperbolehkan: .JPG .JPEG .PNG
            </p>
            <button className="border border-gray-400 text-gray-500 font-medium p-3 w-full rounded-md mt-8">
              Ubah Kata Sandi
            </button>
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <h2>Biodata</h2>
              <div className="grid grid-cols-2 gap-x-12">
                <p className={titleStyle}>Nama</p>
                <p className={titleStyle}>
                  {user.firstName + " " + user.lastName}
                </p>
                <p className={titleStyle}>Tanggal Lahir</p>
                <p className={titleStyle}>28 Februari 1995</p>
                <p className={titleStyle}>Jenis Kelamin</p>
                <p className={titleStyle}>{user.gender}</p>
              </div>
            </div>
            <div>
              <h2>Kontak</h2>
              <div className="grid grid-cols-2 gap-x-12">
                <p className={titleStyle}>Email</p>
                <p className={titleStyle}>{user.email}</p>
                <p className={titleStyle}>Nomor Hp</p>
                <p className={titleStyle}>+628202011111</p>
              </div>
            </div>
          </div>
          <div className=" md:w-2/5 ">
            <h2 className="mt-10 md:mt-0">Alamat</h2>
            <div className="border border-gray-300 rounded-lg w-full mt-4 p-4">
              <h3 className="font-semibold mb-3">
                {user.firstName + " " + user.lastName}
              </h3>
              <p>+628202011111</p>
              <p>
                Setra Duta Cemara, Kec. Kuta Selatan, Kota Badung, Provinsi Bali
                - 80361
              </p>
              <button className="text-emerald-500 font-medium mt-6">
                Ubah Alamat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSetting;
