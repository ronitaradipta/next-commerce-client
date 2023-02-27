import React, { useState } from "react";

import ImageProduct from "./ImageProduct";
import DescriptionProduct from "./DescriptionProduct";
import PemesananProduct from "./PemesananProduct";
import { useParams } from "react-router";
import { useEffect } from "react";
import api from "../../services/api";

function MainProduct() {
  const [product, setProduct] = useState("");
  const { idData } = useParams();

  const fetchDetailProduct = async () => {
    try {
      const response = await api.get(`/products/${idData}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailProduct();
  }, []);

  return (
    <main>
      <div className="mx-auto max-w-screen-xl flex flex-wrap container py-5">
        <ImageProduct data={product} />
        <DescriptionProduct data={product} />
        <PemesananProduct data={product} idData={idData} />
        <hr />
      </div>
    </main>
  );
}

export default MainProduct;
