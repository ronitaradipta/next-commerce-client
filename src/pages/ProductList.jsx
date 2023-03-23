import { Link } from "react-router-dom";
import callApi from "../services/callApi";
import { useState, useEffect } from "react";
import Notification from "../components/loading/Notification";
import LayoutDashboard from "../components/layout/LayoutDashboard";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import StoreProductUpdate from "../components/DashboardStore/StoreProductUpdate";
import TableListProducts from "../components/DashboardStore/element/TableListProducts";
import ConfirmationDelete from "../components/DashboardStore/element/ConfirmationDelete";
import SelectElementFilter from "../components/DashboardStore/element/SelectElementFilter";
import SelectElementCategory from "../components/DashboardStore/element/SelectElementCategory";

const ProductList = () => {
  const [message, setMessage] = useState("");
  const [editData, setEditData] = useState([]);
  const [active, setActive] = useState(false);
  const [idParams, setIdParams] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const [activeComponent, setActiveComponent] = useState(null);
  const [filter, setFilter] = useState({ category: "", sortBy: "" });
  const [paginate, setPaginate] = useState({ dataPerPage: "", totalPages: "", currentPage: 1 });
  const filterKeys = [
    { name: "Lowest Price", value: "price:asc" },
    { name: "Highest Price", value: "price:desc" },
    { name: "Lowest Stock", value: "stock:asc" },
    { name: "Highest Stock", value: "stock:desc" },
    { name: "Recent Created", value: "createdAt:asc" },
    { name: "Lastest Created", value: "createdAt:desc" },
  ];

  const fetchProduct = async () => {
    try {
      setErrorDisplay("");
      const response = await callApi.get(`/stores/products?search=${searchParams}&category=${filter.category}&sortBy=${filter.sortBy}&page=${paginate.currentPage}`);
      const newData = response.data;
      setPaginate({
        currentPage: newData.currentPage,
        totalPages: newData.totalPages,
        dataPerPage: newData.dataPerPage,
      });
      setProducts(newData.data);
    } catch (error) {
      console.log(error);
      setProducts([]);
      setErrorDisplay(error.response.data.message);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await callApi.get(`/stores/products/category`);
      const newData = response.data;
      setCategory(newData.categories);
    } catch (error) {
      console.log(error);
    }
  };

  // filter search by keywords, category and sortBy (price,stock,date created)
  const handleFilter = ({ target: { name, value } }) => {
    if (name === "category") {
      setFilter({ ...filter, category: value });
    } else if (name === "keywords") {
      setSearchParams(value);
    } else {
      setFilter({ ...filter, sortBy: value });
    }
  };

  const handleDelete = (item) => {
    setIdParams(item);
    setActive(true);
  };

  const handleEdit = (id, data) => {
    setEditData(data);
    setActiveComponent(id);
  };

  // fetch the data everytime the data has changed / filtered
  useEffect(() => {
    fetchProduct();
    fetchCategory();
  }, [searchParams, paginate.currentPage, filter, activeComponent]);

  return (
    <LayoutDashboard>
      {/* notification message */}
      {isSuccess ? <Notification SuccessMessage={message} /> : ""}

      {/* edit component */}
      {activeComponent === "update-product" ? <StoreProductUpdate id="update-product" handleEdit={handleEdit} datas={editData} /> : ""}

      {/* delete confirmation box */}
      {active ? <ConfirmationDelete item={idParams} setActive={setActive} setIsSuccess={setIsSuccess} setMessage={setMessage} fetchProduct={fetchProduct} /> : ""}

      <div className="px-2">
        <div className="mb-2">
          <TitlePage title="Daftar Produk" />
        </div>
        <div className="flex w-full flex-wrap justify-around ">
          <div className="w-[50%] px-2">
            <input type="text" name="keywords" className="w-full bg-white border border-gray-300 rounded-md h-full px-5 text-sm mb-2" placeholder="Cari Nama Produk" onChange={handleFilter} />
          </div>
          <div className="flex w-[30%] gap-2 px-2">
            <SelectElementCategory title="Semua Kategori" data={category} handleFilter={handleFilter} />
            <SelectElementFilter title="Filter Keys" data={filterKeys} handleFilter={handleFilter} />
          </div>
          <div className="w-[20%] px-2">
            <Link to="/add-product">
              <button className="bg-emerald-500 p-3 text-sm text-white font-medium rounded-md">Tambah Produk</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-lg mt-6">
        <TableListProducts
          data={products}
          errorDisplay={errorDisplay}
          searchParams={searchParams}
          paginate={paginate}
          setPaginate={setPaginate}
          setActive={setActive}
          setIdParams={setIdParams}
          handleDelete={handleDelete}
          fetchProduct={fetchProduct}
          fetchCategory={fetchCategory}
          handleEdit={handleEdit}
        />
      </div>
    </LayoutDashboard>
  );
};

export default ProductList;
