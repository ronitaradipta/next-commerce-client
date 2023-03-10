import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton'

const CardProduct = ({ data }) => {
  const cardStyle = "rounded-lg h-full shadow-md cursor-pointer";
  const cardImage = "w-full h-48 rounded-t-lg";

  const [loadingImg, setLoadingImg] = useState(false)
  const [loadingText, setLoadingText] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoadingImg(true)
      setLoadingText(true)
    }, 2000)
  })

  return (
    <Link className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 p-2 mb-4" to={`/product-detail/${data.id}`}>
        <div className={cardStyle}>
          {loadingImg ? (
            <img src={data.image} alt={data.name} className={cardImage} />
          ): <Skeleton
          variant="rounded"
          animation='wave'
          width='w-1/3'
          height={200}/>}
          <div className="p-3 flex flex-col gap-2">
            {loadingText ? (<div>
              <h3 className="text-xs">{data.title}</h3>
            </div>): <Skeleton animation='wave' variant="rounded"/>}
            {loadingText ? (<div>
              <p className="font-bold">{data.price}</p>
            </div>): <Skeleton animation='wave' variant="rounded" width={50}/>}
            {loadingText ? (<div>
              <p className="text-xs text-gray-400">Jakarta Barat</p>
            </div>): <Skeleton animation='wave' variant="rounded" width={100}/>}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xs text-gray-400">{data.rating}</p>
              </div>
              <p className="text-xs text-gray-400">Terjual 3rb+</p>
            </div>
          </div>
        </div>
    </Link>
  );
};

export default CardProduct;
