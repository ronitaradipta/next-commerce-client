import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Skeleton from "@mui/material/Skeleton";

const CardCategory = ({ data }) => {
  const [loadingImg, setLoadingImg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingImg(true);
    }, 2000);
  });

  const cardStyle =
    "bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center cursor-pointer";

  return (
    <Link
      className="p-1 w-1/3 sm:w-[20%] md:w-[16.5%] lg:w-[12.5%] xl:w-[10%]"
      to={`/search-results/product?category=${data.slug}`}
    >
      {loadingImg ? (
        <div className={cardStyle}>
          <img src={data.image} alt="category" className="w-20" />
          <p className="text-sm">{data.name}</p>
        </div>
      ) : (
        <Skeleton
          variant="rounded"
          animation="wave"
          width="w-1/3"
          height={120}
        />
      )}
    </Link>
  );
};

export default CardCategory;
