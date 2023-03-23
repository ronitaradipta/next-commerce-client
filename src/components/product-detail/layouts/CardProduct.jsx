import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

function CardProduct({ data, alt, onClick }) {
  console.log(data)
  const [loadingImg, setLoadingImg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingImg(true);
    }, 1000);
  });
  return (
    <div className="p-1 w-[20%]">
      {loadingImg ? (
        <button
          className="show--modal h-full w-full overflow-hidden hover:cursor-pointer"
          onClick={onClick}
        >
          <img
            className="w-full object-cover"
            src={data?.image}
            alt={alt}
            width={64}
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
