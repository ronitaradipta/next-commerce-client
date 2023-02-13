import React, { useState } from "react";
import Footer from "../components/homepage/Footer";
import Header from "../components/homepage/Header";
import StoreDetails from "../components/storepage/modalbox/StoreDetails";
import StoreInfo from "../components/storepage/StoreInfo";
import StoreProducts from "../components/storepage/StoreProducts";

const StorePage = () => {
  const [ShopDetails, setShopDetails] = useState(false);
  const setModalBox = () => {
    setShopDetails(!ShopDetails);
  };
  return (
    <div className="min-h-screen">
      {ShopDetails && <StoreDetails setModalBox={setModalBox} />}
      <Header />
      <div className="page_border max-w-screen-xl mx-auto p-5 flex flex-col items-center">
        <StoreInfo setModalBox={setModalBox} />
        <StoreProducts />
      </div>
      <Footer />
    </div>
  );
};

export default StorePage;
