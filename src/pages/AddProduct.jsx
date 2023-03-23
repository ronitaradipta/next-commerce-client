import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputAddProduct from "../components/DashboardStore/element/InputAddProduct";
import InputMedia from "../components/DashboardStore/element/InputMedia";
import InputSelect from "../components/DashboardStore/element/InputSelect";
import SwitchToggle from "../components/DashboardStore/element/SwitchToggle";
import TextArea from "../components/DashboardStore/element/TextArea";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import HeaderDashboard from "../components/DashboardStore/HeaderDashboard";
import Notification from "../components/loading/Notification";
import Spinner from "../components/loading/Spinner";
import callApi from "../services/callApi";

const AddProduct = () => {
  const [datas, setDatas] = useState([]);
  const [inputToggle, setInputToggle] = useState(true);
  const [mediaInput, setMediaInput] = useState([]);
  const [inputTitles, setInputTitles] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const selectedCategoryName = inputCategory
    ? datas.find((item) => item.id === inputCategory)?.name
    : "";
  const [inputDescriptions, setInputDescriptions] = useState("");
  const [inputPrice, setInputPrice] = useState(0);
  const [inputStock, setInputStock] = useState(0);
  const [showImageInput, setShowImageInput] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [message, setMessage] = useState({ error: "", success: "" });

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchAllCategory = async () => {
    try {
      const category = await callApi.get("/categories");
      setDatas(category.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataProduct = async () => {
    try {
      const response = await callApi.get(`/products/${id}`);
      const { data } = response.data;
      setInputTitles(data.name);
      setInputCategory(data.categoryId);
      setInputDescriptions(data.description);
      setInputPrice(data.price);
      setInputStock(data.stock);
      setShowImageInput(data.images);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = (event, index) => {
    const files = event.target.files;
    const imageURL = URL.createObjectURL(files[0]);
    let newImages = [...showImageInput];
    newImages[index] = { image: imageURL };
    console.log(newImages);
    setShowImageInput(newImages);
    setMediaInput([...mediaInput, files[0]]);
  };

  const data = new FormData();
  data.append("name", inputTitles);
  data.append("description", inputDescriptions);
  data.append("price", inputPrice);
  data.append("stock", inputStock);
  data.append("categoryId", inputCategory);

  showImageInput.forEach((image, i) => {
    data.append("images", mediaInput[i]);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let response;
      if (id) {
        response = await callApi.put(`/products/${id}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        response = await callApi.post("/products", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      setMessage({ success: response.data.message });
      setisSuccess(true);
      setTimeout(() => {
        setisSuccess(false);
        setLoading(false);
        navigate("/list-products");
      }, 2500);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMessage({ error: error.response.data.error });
    }
  };

  useEffect(() => {
    if (id) {
      getDataProduct();
    }
    fetchAllCategory();
  }, []);
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      {isSuccess ? <Notification SuccessMessage={message.success} /> : ""}
      <HeaderDashboard />
      <div className="w-full px-5 md:px-0 md:w-10/12 mx-auto pt-10 pb-20">
        <TitlePage title="Tambah Produk" />
        <form>
          <div className="w-full bg-white rounded-lg flex flex-wrap p-6  mt-6 shadow-md">
            <div className="w-full lg:w-3/12 pr-5">
              <h3 className="font-semibold text-base mb-6">Upload Gambar</h3>
              <p className="text-sm">
                Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px
                (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px).
              </p>
            </div>
            <div className="w-full lg:w-[75%] flex flex-wrap lg:flex-nowrap lg:gap-4">
              {[0, 1, 2, 3, 4].map((index) => (
                <InputMedia
                  title="Foto"
                  name="images"
                  key={index}
                  index={index}
                  showImageInput={showImageInput}
                  onChange={handleImageUpload}
                />
              ))}
            </div>
          </div>

          <div className="w-full bg-white p-6 mt-6 rounded-lg shadow-md">
            <InputAddProduct
              label="Nama Produk"
              placeholder="Contoh : Tas Selempang Pria"
              type="text"
              value={inputTitles}
              name="name"
              onChange={setInputTitles}
            />
            <InputSelect
              label="Kategori"
              data={datas}
              inputCategory={inputCategory}
              selectedCategoryName={selectedCategoryName}
              setInputCategory={setInputCategory}
              name="categoryId"
            />
            <TextArea
              label="Deskripsi Produk"
              placeholder="Tulis deskripsi produk..."
              name="description"
              value={inputDescriptions}
              onChange={setInputDescriptions}
            />
            <InputAddProduct
              label="Harga"
              placeholder="Rp..."
              type="number"
              name="price"
              value={inputPrice}
              onChange={setInputPrice}
            />
            <SwitchToggle
              label="Status Produk"
              inputToggle={inputToggle}
              setInputToggle={setInputToggle}
            />
            <InputAddProduct
              label="Stok Produk"
              placeholder="Masukkan jumlah stok"
              type="number"
              name="stock"
              value={inputStock}
              onChange={setInputStock}
            />
          </div>
          <p className="text-center text-red-500 p-2">{message.error}</p>
          <div className="w-full mt-6 flex justify-center md:justify-end gap-4">
            <Link to="/store-dashboard">
              <button className="font-medium p-3 border border-gray-300 text-gray-500 w-48 rounded-md">
                Batal
              </button>
            </Link>
            <button
              className={`${
                inputTitles &&
                inputDescriptions &&
                inputCategory !== "Pilih Kategori" &&
                inputPrice &&
                inputStock
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-200 text-gray-400"
              } font-medium p-3 rounded-md w-48 flex justify-center`}
              disabled={
                !inputTitles ||
                !inputDescriptions ||
                inputCategory === "Pilih Kategori" ||
                !inputPrice ||
                !inputStock
              }
              type="submit"
              onClick={handleSubmit}
            >
              {loading ? <Spinner /> : id ? "Edit Produk" : "Tambah Produk"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
