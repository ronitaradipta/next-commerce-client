import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectElement from "../SearchResults/SelectElement";
import CardProductStore from "../homepage/element/CardProductStore";
// import api from "../../services/api";
import callApi from "../../services/callApi";

const StoreProducts = () => {
  const { query, cat } = useParams();
  const [categories, setCategories] = useState([]);
  const [Products, setProducts] = useState([]);
  const {idData} = useParams();

  const fetchAllCategory = async () => {
    try {;
      const category = await callApi.get("/categories");
      setCategories(category.data.data); 
    } catch (error) {
  
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
      const response = await callApi.get(`/stores/${idData}/products`);
      setProducts(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  useEffect(() => {
    fetchSearchProducts();
  }, [query]);

  return (
    <div className=" py-5 w-full flex flex-wrap">
      <div className="w-full md:w-1/5 mb-5">
        <div className="bg-white shadow-md rounded-lg p-4 mt-4">
          <div>
            <h3 className="font-semibold mb-3">Etalase Toko</h3>
            <SelectElement data={categories} />
          </div>
          <div>
            <h3 className="font-semibold mb-3">Kategori</h3>
            <SelectElement data={categories} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[80%] pl-0 md:pl-5">
        <div className="flex flex-wrap ">
          {Products.length > 0 &&
            Products.map((data, idx) => {
              return <CardProductStore data={data} key={data.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default StoreProducts;
