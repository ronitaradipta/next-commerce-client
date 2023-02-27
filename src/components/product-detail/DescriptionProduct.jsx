import React from "react";

import Description from "./layouts/Description";
import Toko from "./layouts/Toko";
import Ulasan from "./layouts/Ulasan";

function DescriptionProduct({ data }) {
  return (
    <section className="p-2 w-full sm:w-1/2 md:w-[33%]  ">
      <Description data={data} />
      <Toko />
      <Ulasan />
    </section>
  );
}

export default DescriptionProduct;
