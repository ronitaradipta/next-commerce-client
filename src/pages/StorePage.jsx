import React, { useEffect, useState } from "react";
import Footer from "../components/homepage/Footer";
import Header from "../components/homepage/Header";
import StoreDetails from "../components/storepage/modalbox/StoreDetails";
import StoreInfo from "../components/storepage/StoreInfo";
import StoreProducts from "../components/storepage/StoreProducts";
import callApi from "../services/callApi";
import { useParams } from "react-router-dom";

const StorePage = () => {
  const [storeName, setStoreName] = useState();
  const [ShopDetails, setShopDetails] = useState(false);
  const {idData} = useParams();
  const { query, cat } = useParams();

  const fetchStore = async () => {
    let param;
    try {
      if (query) {
        param = `search/?q=${query}`;
      }
      if (cat) {
        param = `category/${cat}`;
      }
      const response = await callApi.get(`/stores/${idData}/products`);
      setStoreName(response.data);
      // console.log(response.data)
    } catch (error) {}
  };

  useEffect(()=>{
    fetchStore()
  },[]);
  
  const setModalBox = () => {
    setShopDetails(!ShopDetails);
  };
  return (
    <div className="min-h-screen">
      {ShopDetails && <StoreDetails setModalBox={setModalBox} data={storeName} />}
      <Header />
      <div className="page_border max-w-screen-xl mx-auto p-5 flex flex-col items-center">
        <StoreInfo data={storeName} setModalBox={setModalBox}/>
        <StoreProducts />
      </div>
      <Footer />
    </div>
  );
};

export default StorePage;
