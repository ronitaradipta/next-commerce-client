import { useEffect, useState } from "react";
import callApi from "../../services/callApi";
import { MdAddPhotoAlternate } from "react-icons/md";
import Spinner from "../../components/loading/Spinner";
import Notification from "../../components/loading/Notification";
import TitlePage from "../../components/DashboardStore/element/TitlePage";
import SwitchToggle from "../../components/DashboardStore/element/SwitchToggle";

const StoreProductUpdate = ({ id, handleEdit, datas }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [input, setInput] = useState({ ...datas, images: [] });
  const [displayImage, setDisplayImage] = useState(datas.images);

  useEffect(() => {
    const fetchAllCategory = async () => {
      const result = await callApi.get("/categories");
      setAllCategory(result.data.data);
    };
    fetchAllCategory();
  }, []);

  // 1. convert All image received from database with URL format to readable file for backend
  useEffect(() => {
    const convertImages = async () => {
      const imageFiles = await Promise.all(
        datas.images.map(async (imageUrl) => {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const currentDate = new Date();
          const newFileName = `${currentDate.getTime()}.jpg`;
          return new File([blob], newFileName, { type: `image/jpg` });
        })
      );
      setInput((prevInput) => ({ ...prevInput, images: imageFiles }));
    };
    convertImages();
  }, [datas.images]);

  //2.  set Files from input and change image to URL for display preview of images
  const handleChange = ({ target: { name, value } }) => setInput((prevInput) => ({ ...prevInput, [name]: value }));

  const handleImageChange = (i, { target: { files } }) => {
    const file = files[0];
    setInput((prevInput) => ({ ...prevInput, images: [...prevInput.images.slice(0, i), file, ...prevInput.images.slice(i + 1)] }));
    setDisplayImage((prevDisplayImage) => [...prevDisplayImage.slice(0, i), { image: URL.createObjectURL(file), name: file.name, type: file.type }, ...prevDisplayImage.slice(i + 1)]);
  };

  //   3. Upload the edited data
  const uploadEditedData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { images, ...data } = input;
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value));
      images.forEach((image) => formData.append("images", image));
      await callApi.put(`/products/${datas.id}`, formData);
      setSuccessMessage("Data Produk Berhasil diperbaharui");
      setIsSuccess(true);
      setTimeout(() => handleEdit(null), 1500);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id={id} className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0  animate-modal bg-[rgba(0,0,0,0.5)] z-[99]">
      {isSuccess ? <Notification SuccessMessage={successMessage} /> : ""}

      <div class=" py-2 px-2 rounded-10 bg-primary-grey text-base-responsive bg-white border rounded-xl w-[90%] md:w-[85%] lg:w-[80%] h-[80%] overflow-scroll ">
        <form onSubmit={uploadEditedData} className="w-full mx-auto p-5">
          <TitlePage title="Edit Produk" />
          <div className="w-full bg-white rounded-lg flex flex-wrap p-6  mt-6 shadow-md">
            <div className="w-full lg:w-3/12 pr-5">
              <h3 className="font-semibold text-base mb-6">Gambar Produk</h3>
              <p className="text-sm">Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px).</p>
            </div>
            <div className="w-full lg:w-[75%] flex flex-wrap">
              {[...Array(5)].map((_, i) => (
                <div className="mt-5 w-1/2 md:w-1/3 lg:w-1/5 flex items-center justify-center" key={i}>
                  <label className="flex flex-col items-center overflow-hidden justify-center w-48 h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  hover:bg-gray-100">
                    {displayImage[i]?.image ? (
                      <img className="w-48 h-48" src={displayImage[i].image} alt="gambar-produk" />
                    ) : (
                      <>
                        <MdAddPhotoAlternate className="text-gray-400 w-12 h-12" />
                        <p className="mb-2 text-sm text-gray-500 font-semibold mt-3">images</p>
                      </>
                    )}
                    <input name="images" type="file" multiple className="hidden" onChange={(e) => handleImageChange(i, e)} accept="image/*" />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full bg-white p-6 mt-6 rounded-lg shadow-md">
            <div className="mb-6 w-full flex items-center flex-wrap">
              <div className="font-semibold text-base w-full md:w-[20%]">Product Name</div>
              <input type="text" name="name" value={input.name} className="border border-gray-300 font-normal rounded p-2 w-full md:w-[80%]" onChange={handleChange} />
            </div>

            {/* input category Product */}
            <div className="mb-6 w-full flex items-center flex-wrap">
              <div className="font-semibold text-base w-full md:w-[20%]">Category</div>
              <select name="categoryId" className="border border-gray-300 font-normal rounded p-2 w-full md:w-[80%]" value={input.categoryId} onChange={handleChange}>
                {allCategory.map((item, idx) => {
                  return (
                    <option name="categoryId" value={item.id} key={idx}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* input description product */}
            <div className="mb-6 w-full flex flex-wrap">
              <span className="font-semibold text-base w-full md:w-[20%] mb-2">Description</span>
              <textarea name="description" id="description" rows="4" className="border border-gray-300 font-normal rounded p-2 w-full md:w-[80%]" value={input.description} onChange={handleChange}></textarea>
            </div>

            {/* input price product */}

            <div className="mb-6 w-full flex items-center flex-wrap">
              <div className="font-semibold text-base w-full md:w-[20%] mb-2">Harga</div>
              <input type="number" name="price" value={input.price} onChange={handleChange} className="border border-gray-300 font-normal rounded p-2 w-full md:w-[80%]" />
            </div>

            <SwitchToggle label="Status Produk" />

            {/* input stock product */}
            <div className="mb-6 w-full flex items-center flex-wrap">
              <div className="font-semibold text-base w-full md:w-[20%] mb-2">Stock</div>
              <input type="number" name="stock" value={input.stock} onChange={handleChange} className="border border-gray-300 font-normal rounded p-2 w-full md:w-[80%]" />
            </div>
          </div>

          <div className="w-full mt-6 flex justify-center md:justify-end gap-4">
            <button
              className="font-medium p-3 bg-emerald-500 text-white w-48 rounded-md"
              onClick={() => {
                handleEdit(null, null);
              }}
            >
              Batal
            </button>
            <button type="submit" className="font-medium p-3 bg-emerald-500 text-white w-48 rounded-md flex justify-center">
              {isLoading ? <Spinner /> : "Perbaharui Produk"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StoreProductUpdate;
