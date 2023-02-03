import React, { Suspense } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ProductLoading from "../../loading/ProductLoading";

const TableListProducts = ({ data }) => {
  const header = ["Info Produk", "Harga", "Stok", "Status", "Atur"];
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-white border-b">
            <tr>
              {header.map((item, idx) => {
                return (
                  <th scope="col" className="px-6 py-3 text-sm" key={idx}>
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<ProductLoading />}>
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <tr className="bg-white border-b" key={item.id}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap flex items-center gap-6"
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-md"
                        />
                        {item.title}
                      </th>
                      <td className="px-6 py-4">{item.price}</td>
                      <td className="px-6 py-4">{item.stock}</td>
                      <td className="px-6 py-4">$Aktif</td>
                      <td className="px-6 py-4 items-center gap-4">
                        <div className="flex gap-4">
                          <button>
                            <FaEdit className="w-6 h-6" />
                          </button>
                          <button>
                            <FaTrashAlt className="w-6 h-6" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </Suspense>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableListProducts;
