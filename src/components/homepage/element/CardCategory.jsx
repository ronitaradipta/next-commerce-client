import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import aksesoris from "../../../assets/images/categories/aksesoris.png";
import elektronik from "../../../assets/images/categories/elektronik.png";
import handphone from "../../../assets/images/categories/handphone.png";
import hobi from "../../../assets/images/categories/hobi.png";
import jamTangan from "../../../assets/images/categories/jam-tangan.png";
import komputer from "../../../assets/images/categories/komputer.png";
import pakaianPria from "../../../assets/images/categories/pakaian-pria.png";
import sepatu from "../../../assets/images/categories/sepatu.png";
import fragrance from "../../../assets/images/categories/fragrance.png";
import furniture from "../../../assets/images/categories/furniture.png";
import skincare from "../../../assets/images/categories/skincare.png";
import groceries from "../../../assets/images/categories/groceries.png";
import homedecoration from "../../../assets/images/categories/homedecoration.png";
import womenDress from "../../../assets/images/categories/women-dress.png";
import womenShoes from "../../../assets/images/categories/women-shoes.png";
import womenBag from "../../../assets/images/categories/women-bag.png";
import otomotive from "../../../assets/images/categories/otomotive.png";

import Skeleton from "@mui/material/Skeleton";

const CardCategory = ({ data, image }) => {
  const images = [handphone, komputer, fragrance, skincare, groceries, homedecoration, furniture, pakaianPria, womenDress, womenShoes, pakaianPria, sepatu, jamTangan, jamTangan, womenBag, elektronik, aksesoris, otomotive, otomotive, hobi];

  const [loadingImg, setLoadingImg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingImg(true);
    }, 2000);
  });

  const cardStyle = "bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center cursor-pointer";

  return (
    <Link className="p-1 w-1/3 sm:w-[20%] md:w-[16.5%] lg:w-[12.5%] xl:w-[10%]" to={`/category/${data}`}>
      {loadingImg ? (
        <div className={cardStyle}>
          <img src={images[image]} alt="category" className="w-20" />
          <p className="text-sm">{data}</p>
        </div>
      ) : (
        <Skeleton variant="rounded" animation="wave" width="w-1/3" height={120} />
      )}
    </Link>
  );
};

export default CardCategory;
