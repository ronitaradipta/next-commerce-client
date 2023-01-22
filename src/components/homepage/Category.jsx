import api from "../../services/api";
import React, { useEffect, useState } from "react";
import CardCategory from "./element/CardCategory";

const Category = () => {
  const [datas, setDatas] = useState([]);

  // style
  const cardContainer = "grid grid-cols-3 md:grid-cols-10 gap-4 mt-6";

  const fetchAllCategory = async () => {
    try {
      const category = await api.get("/products/categories");
      setDatas(category.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  return (
    <section>
      <h2>Kategori Pilihan</h2>
      <div className={cardContainer}>
        {datas.map((data) => {
          return <CardCategory data={data} key={data} />;
        })}
      </div>
    </section>
  );
};

export default Category;
