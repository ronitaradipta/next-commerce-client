import React from "react";
import { Link } from "react-router-dom";

const DropdownContainer = () => {
  return (
    <div className="bg-white border border-gray-300 absolute rounded-md left-16 top-3 w-[200px]">
      <Link to="/add-product">
        <p className="hover:bg-gray-200 py-3 pl-2 rounded-md">Tambah Produk</p>
      </Link>
      <Link to="/list-products">
        <p className="hover:bg-gray-200 py-3 pl-2 rounded-md">List Produk</p>
      </Link>
    </div>
  );
};

export default DropdownContainer;
