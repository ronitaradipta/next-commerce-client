import React, { useState } from "react";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import LayoutDashboard from "../components/layout/LayoutDashboard";
import TableListProducts from "../components/DashboardStore/element/TableListProducts";
import { useEffect } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const number = 5;

  const fetchProduct = async () => {
    try {
      if (!hasMore) return;
      const response = await api.get(`/products/?limit=${limit}`);
      const newData = response.data.products;
      if (newData.length < limit) {
        setHasMore(false);
      }
      setProducts(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [limit, hasMore]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    console.log("top: ", scrollTop);
    console.log("client: ", clientHeight);
    console.log("scroll ", scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight - 3) {
      setLimit(limit + number);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [limit]);

  return (
    <LayoutDashboard>
      <div className="flex justify-between">
        <TitlePage title="Daftar Produk" />
        <input
          type="text"
          className="bg-white border border-gray-300 rounded-md p-2 text-sm"
          placeholder="Cari Nama Produk"
        />
        <input
          type="text"
          className="bg-white border border-gray-300 rounded-md p-2 text-sm"
          placeholder="Kategori"
        />
        <input
          type="text"
          className="bg-white border border-gray-300 rounded-md p-2 text-sm"
          placeholder="Filter"
        />
        <input
          type="text"
          className="bg-white border border-gray-300 rounded-md p-2 text-sm"
          placeholder="Urutkan"
        />
        <Link to="/add-product">
          <button className="bg-emerald-500 p-3 text-sm text-white font-medium rounded-md">
            Tambah Produk
          </button>
        </Link>
      </div>
      <div className="bg-white w-full rounded-lg mt-6">
        <TableListProducts data={products} />
      </div>
    </LayoutDashboard>
  );
};

export default ProductList;
