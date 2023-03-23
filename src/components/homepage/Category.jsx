import callApi from "../../services/callApi";
import React, { useEffect, useState } from "react";
import CardCategory from "./element/CardCategory";

const Category = () => {
  const [datas, setDatas] = useState([]);

  // style
  const cardContainer = "flex flex-wrap justify-center";
  // API
  const AllCategory = async () => {
    try {
      const category = await callApi.get("/categories");
      setDatas(category.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllCategory();
  }, []);

  return (
    <section>
      <h2>Kategori Pilihan</h2>
      <div className={cardContainer}>
        {datas.map((data, idx) => {
          return <CardCategory data={data} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default Category;
