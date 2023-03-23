import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

function CardProduct({ data, alt }) {
  const [loadingImg, setLoadingImg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingImg(true);
    }, 1000);
  });
  return (
    <div className="p-1 w-[20%] border border-gray-300">
      {loadingImg ? (
        <button className="h-full w-full overflow-hidden hover:cursor-pointer">
          <img
            className=" object-cover h-16 w-16"
            src={data?.image}
            alt={alt}
          />
        </button>
      ) : (
        <Skeleton
          variant="rounded"
          animation="wave"
          width="w-1/3"
          height={50}
        />
      )}
    </div>
  );
}

export default CardProduct;
