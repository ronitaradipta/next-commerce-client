import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardProduct } from "../components";
import CheckBoxElement from "../components/SearchResults/CheckBoxElement";
import InputPriceElement from "../components/SearchResults/InputPriceElement";
import SelectElement from "../components/SearchResults/SelectElement";
import api from "../services/api";

const SearchResults = () => {
  const { query, cat } = useParams();
  const [categories, setCategories] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);

  const fetchAllCategory = async () => {
    try {
      const category = await api.get("/products/categories");
      setCategories(category.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSearchProducts = async () => {
    let param;
    try {
      if (query) {
        param = `search/?q=${query}`;
      }
      if (cat) {
        param = `category/${cat}`;
      }
      const response = await api.get(`/products/${param}`);
      setSearchProducts(response.data.products);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  useEffect(() => {
    fetchSearchProducts();
  }, [query]);

  return (
    <div className="bg-gray-100">
      <div className="container py-6 px-5 mx-auto flex gap-8">
        <div className="w-2/12">
          <h2>Filter</h2>
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <div>
              <h3 className="font-semibold mb-3">Kategori</h3>
              <SelectElement data={categories} />
            </div>
            <div className="mt-3">
              <h3 className="font-semibold">Lokasi</h3>
              <CheckBoxElement label="Kab. Badung" />
              <CheckBoxElement label="Jakarta" />
              <CheckBoxElement label="Denpasar" />
              <CheckBoxElement label="Surabaya" />
              <button className="text-emerald-500 text-sm font-medium">
                Lihat Selengkapnya
              </button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Harga</h3>
              <InputPriceElement placeholder="Harga Max" />
              <InputPriceElement placeholder="Harga Min" />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Rating</h3>
              <CheckBoxElement label="4 keatas" />
            </div>
          </div>
        </div>
        <div className="w-10/12">
          <h2>Pencarian : {query}</h2>
          <div className="grid grid-cols-5 mt-4 gap-5">
            {searchProducts.length > 0 &&
              searchProducts.map((data) => {
                return <CardProduct data={data} key={data.id} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
