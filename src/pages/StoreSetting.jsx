import React, { useEffect, useState } from "react";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import LayoutDashboard from "../components/layout/LayoutDashboard";
import callApi from "../services/callApi";
import Notification from "../components/loading/Notification";
import Spinner from "../components/loading/Spinner";

const StoreSetting = () => {
  const [dataStore, setDataStore] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [message, setMessage] = useState({ error: "", success: "" });

  const fetchDataStore = async () => {
    try {
      const response = await callApi.get("/stores/user");
      setDataStore(response.data.data);
      setDescription(response.data.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const data = new FormData();
  data.append("description", description);
  data.append("image", image);

  const handleImageUpload = (e) => {
    const file = e.target.files;
    const imageURL = URL.createObjectURL(file[0]);
    setShowImage(imageURL);
    setImage(file[0]);
  };

  const submitDescription = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await callApi.patch("/stores", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage({ success: response.data.message });
      setisSuccess(true);
      setTimeout(() => {
        setisSuccess(false);
        setLoading(false);
      }, 2500);
      setDescription("");
      fetchDataStore();
    } catch (error) {
      console.log(data);
      console.log(error);
      setLoading(false);
      setMessage({ error: error.response.data.error });
    }
  };

  useEffect(() => {
    fetchDataStore();
  }, []);
  return (
    <LayoutDashboard>
      {isSuccess ? <Notification SuccessMessage={message.success} /> : ""}
      <TitlePage title="Toko Sederhana" />
      <form>
        <div className=" bg-white px-8 py-8 lg:px-20 w-full rounded-lg shadow-lg mt-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
          <img
            src={showImage ? showImage : dataStore.image}
            alt="image"
            className="w-40 h-40 rounded-full"
          />
          <div className="md:w-4/12 px-12 md:px-1">
            <p className="text-sm mb-4 ">
              Ukuran optimal 300 x 300 piksel dengan Besar file: Maksimum
              10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan:
              JPG, JPEG, PNG
            </p>
            <label
              htmlFor="store-image"
              className="border-2 p-2 w-56 rounded font-medium text-gray-500 border-gray-300"
            >
              Edit Foto Toko
            </label>
            <input
              type="file"
              name="image"
              id="store-image"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <div className=" md:w-4/12 px-12 md:px-1">
            <h3 className="text-base font-semibold mb-3">Nama Toko</h3>
            <p className="text-sm mb-3">{dataStore.name}</p>
            <h3 className="text-base font-semibold mb-3">Deskripsi Toko</h3>
            <p className="text-sm mb-3">{dataStore.description}</p>
            <textarea
              rows="4"
              className="w-full border border-gray-300 mb-3 p-2"
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              value={description}
            ></textarea>
            <button
              className="bg-emerald-500 text-white rounded-md  font-medium p-3 w-56 flex justify-center"
              onClick={submitDescription}
              type="submit"
            >
              {loading ? <Spinner /> : "Simpan Perubahan"}
            </button>
          </div>
        </div>
      </form>
    </LayoutDashboard>
  );
};

export default StoreSetting;
