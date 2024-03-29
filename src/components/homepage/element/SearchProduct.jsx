import React, { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { IconContext } from "react-icons";
import callApi from "../../../services/callApi";
import debounce from "lodash/debounce";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../loading/Spinner";

const SearchProduct = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [productResults, setProductResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const highlightMatchedKeywords = (text, keyword) => {
    const regex = new RegExp(keyword, "gi");
    return (text ?? "").replace(regex, (match) => `<b>${match}</b>`);
  };

  const fetchSearch = async () => {
    setLoading(true);
    try {
      const response = await callApi.get(`/products?search=${inputSearch}`);
      const highlightedResults = response.data.data.map((product) => ({
        ...product,
        highlightedTitle: highlightMatchedKeywords(product.name, inputSearch),
      }));
      setProductResults(highlightedResults);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleChangeInput = (e) => {
    setInputSearch(e.target.value);
    setLoading(true);
  };

  const searchSumbit = (e) => {
    e.preventDefault();
    setInputSearch("");
    return navigate(`/search-results/product?search=${inputSearch}`);
  };

  const debouncedChangeHandler = useCallback(debounce(handleChangeInput, 300), []);

  const handleClickListSearch = (menu) => {
    navigate(`/search-results/product?search=${menu}`);
    setInputSearch("");
  };

  useEffect(() => {
    if (inputSearch) {
      fetchSearch();
    }
  }, [inputSearch]);

  return (
    <div className="w-full md:w-8/12 relative">
      <form onSubmit={searchSumbit}>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Cari Produk/Nama toko"
            onChange={debouncedChangeHandler}
            required
          />

          {!inputSearch && (
            <button type="submit" className="text-white absolute right-1 bottom-0.5 font-medium text-sm px-2 py-2">
              <IconContext.Provider value={{ className: "text-gray-600 w-6 h-6" }}>
                <MdOutlineSearch />
              </IconContext.Provider>
            </button>
          )}
        </div>
      </form>
      {inputSearch && (
        <div className="w-full max-h-96 py-4 px-6 bg-white border text-gray-900 border-gray-300 rounded-lg absolute overflow-auto">
          <ul>
            {loading && <Spinner />}

            {!loading &&
              productResults.length > 0 &&
              productResults.map((item) => {
                return (
                  <a className="w-full py-3 block group cursor-pointer" onClick={() => handleClickListSearch(item.name)} key={item.id}>
                    <li className=" group-hover:text-emerald-500 group flex gap-2">
                      <IconContext.Provider
                        value={{
                          className: "text-gray-600 group-hover:text-emerald-500 w-6 h-6",
                        }}
                      >
                        <MdOutlineSearch />
                      </IconContext.Provider>
                      <div dangerouslySetInnerHTML={{ __html: item.highlightedTitle }} />
                    </li>
                  </a>
                );
              })}
            {!loading && productResults.length === 0 && "Tidak ada produk yang cocok"}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
