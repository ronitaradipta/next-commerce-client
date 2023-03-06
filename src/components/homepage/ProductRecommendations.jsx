import callApi from "../../services/callApi";
import React, { useEffect, useState } from "react";
import Spinner from "../loading/Spinner";
import CardProduct from "./element/CardProduct";

const ProductRecommendations = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);

  // styles
  const cardContainerStyle = "flex flex-wrap justify-start";

  const fetchData = async () => {
    try {
      const product = await callApi.get(`/products/?${limit}`);
      setDatas(product.data.data);
      console.log(product.data.data);
      if (loading) {
        setLimit(limit + 5);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const loadMoreData = () => {
    setLoading(true);
  };

  return (
    <section className="py-6">
      <h2>Rekomendasi Produk</h2>
      <div className={cardContainerStyle}>
        {datas.map((data) => {
          return <CardProduct data={data} key={data.id} />;
        })}
      </div>

      <div className="flex justify-center mt-6">
        <button className="border-2 border-emerald-500 font-medium text-emerald-500 rounded-lg w-80 py-3 flex items-center justify-center" onClick={loadMoreData}>
          {loading ? <Spinner /> : "Tampilkan Lebih Banyak"}
        </button>
      </div>
    </section>
  );
};

export default ProductRecommendations;
