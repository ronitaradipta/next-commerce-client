import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProductPagination from "../../SearchResults/ProductPagination";
import SelectElementCategory from "./SelectElementCategory";
import callApi from "../../../services/callApi";

const TableListProducts = ({ data, searchParams, paginate, setPaginate, errorDisplay, handleEdit, handleDelete, fetchProduct, fetchCategory }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [input, setInput] = useState({ categoryId: "", price: "", stock: "" });
  const [productCategory, setProductCategory] = useState([]);
  const header = ["Info Produk", "Kategori", "Harga", "Stok", "Date Created", "Atur"];
  const highlightMatchedKeywords = (text, keyword) => {
    const regex = new RegExp(keyword, "gi");
    return (text ?? "").replace(regex, (match) => `<b>${match}</b>`);
  };

  const paginateHandler = (pageNumber) => {
    setPaginate({ ...paginate, currentPage: pageNumber });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div>
        {data.length !== 0 && errorDisplay === "" ? (
          <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-white border-b">
                <tr>
                  {header.map((item, idx) => {
                    return (
                      <th scope="col" className="px-6 py-3" key={idx}>
                        <div className="flex justify-center"> {item}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className="bg-white border-b" key={item.id}>
                    <td scope="row" className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap flex items-center gap-6 ">
                      <img src={item.images[0]?.image} alt={item.name} className="w-24 h-24 object-cover rounded-md border" />
                      <div className="flex flex-col gap-2">
                        <div className="mb-2" dangerouslySetInnerHTML={{ __html: highlightMatchedKeywords(item.name, searchParams) }} />
                        <div className="italic text-[12px]">
                          <b>Deskripsi : </b>
                          {item.description.substring(0, 50)} . . . . .
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.categoryName}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">{item.price.toLocaleString("id-ID", { minimumFractionDigits: 0, maximumFractionDigits: 2, currency: "IDR" })}</div>
                    </td>
                    <td className="px-6 py-4">{item.stock}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center"> {new Date(item.date).toLocaleDateString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" }).replace(/\//g, "-")}</div>
                    </td>
                    <td className="px-6 py-4 items-center gap-4">
                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            handleEdit("update-product", item);
                          }}
                        >
                          <FaEdit className="w-6 h-6" />
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(item);
                          }}
                        >
                          <FaTrashAlt className="w-6 h-6" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ProductPagination currentPage={paginate.currentPage} totalPages={paginate.totalPages} paginate={paginateHandler} />
          </div>
        ) : (
          <div className="flex justify-center py-5">{errorDisplay}</div>
        )}
      </div>
    </>
  );
};

export default TableListProducts;
