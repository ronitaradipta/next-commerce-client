import React, {useEffect, useState} from "react";
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box';

function Description({ data }) {
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setTimeout(()=> {
      setLoading(true)
    }, 2000)
  })
  return (
    <section>
      {loading ?(
        <div className="">
          <h2 className="font-bold text-xl">{data.title}</h2>
        </div>
      ): <Skeleton variant="rounded" animation='wave' width={150} sx={{marginBottom: 1.5 }}/>}
      {loading ? (
        <div className="flex items-center mt-2 space-x-4 my-3">
          <p className="font-normal text-sm">Terjual 10RB+</p>
          <p className="font-normal text-xs">⭐ {data && data.rating}</p>
        </div>
      ): <Skeleton variant="rounded" animation='wave' width={150}     height={20} sx={{marginBottom: 1.5 }}/>}     
      {loading ? (
        <div className="my-1">
          <h3 className="font-bold text-3xl">${data && data.price}</h3>
        </div>
      ): <Skeleton variant="rounded" animation='wave' width={100}     height={30} sx={{marginBottom: 1.5 }} />}     
      {loading ? (  
        <div className="flex items-center space-x-2 my-1 mb-7">
          <div className="rounded-lg bg-red-300 px-1 py-0">
            <p className="text-semibold font-normal text-red-600">
              {data && Math.ceil(data.discountPercentage)}%
            </p>
          </div>
          <div>
            <p className="font-normal text-sm line-through text-gray-500">
              $
              {data &&
                Math.ceil((100 / (100 - data.discountPercentage)) * data.price)}
            </p>
          </div>
        </div>
      ): <Skeleton variant="rounded" animation='wave' width={100}     height={25} sx={{marginBottom: 2.5 }}/>}     
      {loading ? (  
        <div className="mb-6">
          <p className="font-normal text-sm break-words">
            {data && data.description}
            {data && data.description.length > 300 && (
              <span className="text-emerald-500 font-semibold hover:cursor-pointer">
                Lihat Selengkapnya
              </span>
            )}
          </p>
        </div>  
      ):<Box sx={{ pt: 0.5 }}>
          <Skeleton variant="rounded" animation='wave' sx={{marginBottom: 1 }} />
          <Skeleton variant="rounded" animation='wave' sx={{marginBottom: 1 }} />
          <Skeleton variant="rounded" animation='wave' sx={{marginBottom: 1 }} />  
      </Box>}     

    </section>
  );
}

export default Description;
