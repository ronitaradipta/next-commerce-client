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
  const {idData} = useParams

  const fetchStrore = async()=> {
    try{
      // const response = await callApi.get(`/stores/${idData}`)
      const response = await callApi.get(`/stores/`)
      setStoreName(response.data)
      console.log(response.data)
    }catch (error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchStrore()
  },[]);
  
  const setModalBox = () => {
    setShopDetails(!ShopDetails);
  };
  return (
    <div className="min-h-screen">
      {ShopDetails && <StoreDetails setModalBox={setModalBox} />}
      <Header />
      <div className="page_border max-w-screen-xl mx-auto p-5 flex flex-col items-center">
        {/* <StoreInfo data={storeName} idData={idData} /> */}
        <StoreInfo  />
        <StoreProducts />
      </div>
      <Footer />
    </div>
  );
};

export default StorePage;
