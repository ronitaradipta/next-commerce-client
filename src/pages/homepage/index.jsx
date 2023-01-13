import React from "react";
import AboutUs from "../../components/homepage/AboutUs";
import Banner from "../../components/homepage/Banner";
import Category from "../../components/homepage/Category";
import Footer from "../../components/homepage/Footer";
import Header from "../../components/homepage/header";
import ProductRecommendations from "../../components/homepage/ProductRecommendations";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Banner />
        <Category />
        <hr className="border-t-gray-300 mt-6 border-t-2" />
        <ProductRecommendations />
        <hr className="border-t-gray-300 mt-6 border-t-2" />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
