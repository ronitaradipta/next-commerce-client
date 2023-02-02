import React from "react";

import Description from "./layouts/Description";
import Toko from "./layouts/Toko";
import Ulasan from "./layouts/Ulasan";

function DescriptionProduct() {
  return (
    <section>
      <Description />
      <Toko />
      <Ulasan />
    </section>
  );
}

export default DescriptionProduct;
