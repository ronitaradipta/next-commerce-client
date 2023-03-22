import React, { useEffect, useState } from "react";
import CardProduct from "./layouts/CardProduct";
import Skeleton from "@mui/material/Skeleton";

function ImageDetail({ data }) {
  // console.log(data)
  const [loadingImg, setLoadingImg] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadingImg(true);
    }, 2000);
  });
  return (
    <>
      <section className="p-2 w-full sm:w-1/2 md:w-[33%]  mb-5 ">
        <div className="main-image">
          {loadingImg ? <div>
            <button className="show-modal hover:cursor-pointer">{data && <img src={data.images[0].image} alt="" />}</button>
            </div> : <Skeleton variant="rounded" animation="wave" width="w-1/3" height={200} />}
        </div>
        <div className="flex items-center">
          {data &&
            data.images?.map((data, idx) => {
              return <CardProduct data={data} alt={"Gambar 1"} key={idx} />;
            })}
        </div>
      </section>
    </>
  );
}

export default ImageDetail;
