import React from "react";

import CardProduct from "./layouts/CardProduct";

function ImageDetail({ data }) {
  return (
    <>
      <section className="p-2 w-full sm:w-1/2 md:w-[33%]  mb-5 ">
        <div className="main-image">
          <div>
            <button className="show-modal hover:cursor-pointer">{data && <img src={data.thumbnail} alt="" />}</button>
          </div>
        </div>
        <div className="flex items-center">
          {data &&
            data.images.map((item, idx) => {
              return <CardProduct image={item} alt={"Gambar 1"} key={idx} />;
            })}
        </div>
      </section>
    </>
  );
}

export default ImageDetail;
