import React, { lazy, Suspense } from "react";
import { AboutUs, Banner, Category } from "../components";
import ProductLoading from "../components/loading/ProductLoading";
const ProductRecommendations = lazy(() =>
  import("../components/homepage/ProductRecommendations")
);

const Homepage = () => {
  return (
    <>
      <main className="container px-5 mx-auto">
        <Banner />
        <Category />
        <hr className="border-t-gray-300 mt-6 border-t-2" />
        <Suspense fallback={<ProductLoading />}>
          <ProductRecommendations />
        </Suspense>
        <hr className="border-t-gray-300 mt-6 border-t-2" />
        <AboutUs />
      </main>
    </>
  );
};

export default Homepage;
