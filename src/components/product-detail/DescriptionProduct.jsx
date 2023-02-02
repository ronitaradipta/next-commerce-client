import React from "react";

import Description from "./layouts/Description";
import Toko from "./layouts/Toko";
import Ulasan from "./layouts/Ulasan";

function DescriptionProduct({ data }) {
  return (
    <section className="w-4/12">
      <Description data={data} />
      <Toko />
      <Ulasan />
    </section>
  );
}

export default DescriptionProduct;
