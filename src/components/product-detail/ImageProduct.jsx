import React from "react";

import CardProduct from "./layouts/CardProduct";

import image5 from "../../assets/images/img/5.jpg";
import image1 from "../../assets/images/img/vans1.jpg";
import image2 from "../../assets/images/img/2.jpg";
import image3 from "../../assets/images/img/3.jpg";
import image4 from "../../assets/images/img/4.jpg";
import image6 from "../../assets/images/img/6.jpg";

function ImageDetail() {
  return (
    <>
      <section>
        <div className="main-image">
          <div>
            <button className="show-modal w-96 h-96 hover:cursor-pointer">
              <img src={image5} alt="" />
            </button>
          </div>
        </div>
        <div className="flex space-x-6 justify-between py-2">
          <CardProduct image={image1} alt={"Gambar 1"} />
          <CardProduct image={image2} alt={"Gambar 1"} />
          <CardProduct image={image3} alt={"Gambar 1"} />
          <CardProduct image={image6} alt={"Gambar 1"} />
          <CardProduct image={image4} alt={"Gambar 1"} />
        </div>
      </section>
    </>
  );
}

export default ImageDetail;
