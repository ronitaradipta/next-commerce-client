import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/images/Frame.png";

const TransactionSuccess = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <img src={illustration} alt="img" />
          <h1 className="text-4xl font-bold">Transaksi Sukses</h1>
          <p>
            Silahkan cek email untuk detail pesanan Anda. Resi akan diinfokan
            secepat mungkin
          </p>
          <Link to="/">
            <button
              className="inline-flex items-center px-4 py-2 text-white bg-emerald-500 border rounded-lg
                hover:bg-white hover:text-emerald-500 focus:outline-none focus:ring"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-sm font-medium">Lanjutkan Berbelanja</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionSuccess;
