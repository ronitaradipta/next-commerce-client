import React from "react";

import ImageProduct from "./ImageProduct";
import DescriptionProduct from "./DescriptionProduct";
import PemesananProduct from "./PemesananProduct";

function MainProduct(props) {
  return (
    <main>
      <div className="container flex mx-auto py-4 px-40 space-x-6">
        <ImageProduct />
        <DescriptionProduct />
        <PemesananProduct />
        <hr />
      </div>
    </main>
  );
}

export default MainProduct;
