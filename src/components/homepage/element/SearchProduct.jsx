import React, { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { IconContext } from "react-icons";
import api from "../../../services/api";

const SearchProduct = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [productResults, setProductResults] = useState([]);

  const fetchSearch = async () => {
    const response = await api.get(`/products/search?q=${inputSearch}`);

    setProductResults(response.data.products);
  };
  console.log(productResults);

  const handleChangeInput = (e) => {
    setInputSearch(e.target.value);
    fetchSearch();
  };

  return (
    <div className="w-full md:w-8/12 relative">
      <form>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Cari Produk/Nama toko"
            onChange={handleChangeInput}
            required
          />
          {!inputSearch && (
            <button
              type="submit"
              className="text-white absolute right-1 bottom-0.5 font-medium text-sm px-2 py-2"
            >
              <IconContext.Provider
                value={{ className: "text-gray-600 w-6 h-6" }}
              >
                <MdOutlineSearch />
              </IconContext.Provider>
            </button>
          )}
        </div>
      </form>
      {inputSearch && (
        <div className="w-full max-h-96 py-4 px-6 bg-white border text-gray-900 border-gray-300 rounded-lg absolute overflow-auto">
          <ul>
            {productResults.map((item) => {
              return (
                <a href="#" className="w-full py-3 block group">
                  <li className=" group-hover:text-emerald-500 group flex gap-2">
                    <IconContext.Provider
                      value={{
                        className:
                          "text-gray-600 group-hover:text-emerald-500 w-6 h-6",
                      }}
                    >
                      <MdOutlineSearch />
                    </IconContext.Provider>
                    {item.title}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
