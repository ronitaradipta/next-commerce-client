import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const ProductPagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center items-center space-x-2 my-4">
      <GrPrevious
        className={`${currentPage === 1 ? "text-gray-300  cursor-not-allowed" : "text-gray-700 cursor-pointer"}`}
        onClick={() => {
          if (currentPage > 1) {
            paginate(currentPage - 1);
          }
        }}
      />
      {pageNumbers.map((number) => (
        <li key={number}>
          <button onClick={() => paginate(number)} className={`text-gray-700 border-b-2 font-bold py-2 px-4 ${number === currentPage ? "border-green-500 text-green-500" : "border-none"}`}>
            {number}
          </button>
        </li>
      ))}
      <GrNext
        className={`${currentPage === totalPages ? "text-gray-300  cursor-not-allowed" : "text-gray-700 cursor-pointer"}`}
        onClick={() => {
          if (currentPage < totalPages) {
            paginate(currentPage + 1);
          }
        }}
      />
    </ul>
  );
};

export default ProductPagination;
