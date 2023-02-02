import React from "react";

import CardProduct from "./layouts/CardProduct";

function ImageDetail({ data }) {
  return (
    <>
      <section className="w-4/12">
        <div className="main-image">
          <div>
            <button className="show-modal w-96 h-96 hover:cursor-pointer">
              {data && <img src={data.thumbnail} alt="" />}
            </button>
          </div>
        </div>
        <div className="flex space-x-6 justify-between py-2">
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
