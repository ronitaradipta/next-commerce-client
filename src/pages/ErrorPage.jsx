import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/images/page-not-found.svg";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img src={illustration} alt="page not found" className="w-96 mb-10" />
        <h1 className="text-4xl font-medium mb-3">Halaman Tidak Ditemukan</h1>
        <p className="text-lg mb-8">Mungkin kamu salah alamat</p>
        <button className="bg-emerald-500 p-3 text-white rounded-md w-64 font-medium text-lg">
          <Link to="/">Kembali ke Beranda</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
