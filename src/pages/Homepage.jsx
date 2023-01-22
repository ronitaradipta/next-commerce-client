import React from "react";
import {
  AboutUs,
  Banner,
  Category,
  Footer,
  Header,
  ProductRecommendations,
} from "../components";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="container px-5 mx-auto">
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
