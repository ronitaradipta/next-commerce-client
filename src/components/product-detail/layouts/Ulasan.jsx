import React, {useEffect, useState} from "react";
import Skeleton from '@mui/material/Skeleton'

import pembeli from "../../../assets/images/img/pembeli.jpg";

function Ulasan() {
    const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setTimeout(()=> {
      setLoading(true)
    }, 2000)
  })
  return (
    <div className="max-h-[25vh] overflow-y-scroll">
      <div className="mt-4 mb-6">
        <h3 className="font-semibold text-lg">Ulasan Pembeli</h3>
      </div>

      <div className="border p-4 mb-5">
        <div className="flex mb-2">
          {loading ? (
            <div className="mr-3 hover:cursor-pointer">
              <img className="rounded-full w-9 h-9" src={pembeli} alt="pembeli" />
            </div>
          ) : <Skeleton animation="wave" variant="circular" width={30} height={30} sx={{marginRight : 2}} />}
          {loading ? (
            <div className="hover:cursor-pointer">
              <h3 className="font-semibold text-sm">Asep Surasep</h3>
              <p className="font-normal text-xs">⭐ 4</p>
            </div>
          ) :<Skeleton animation="wave" variant="rounded" width={150} height={20} />}
        </div>
          {loading ? ( 
          <div className="mx-3">
            <p className="font-normal text-xs">Mantap sesuai dengan harga, saya mau beli lagi di toko lain</p>
          </div>
          ): <Skeleton animation="wave" variant="rounded" height={20} />}
      </div>
      <div className="border p-4 mb-5">
        <div className="flex mb-2">
          {loading ? (
            <div className="mr-3 hover:cursor-pointer">
              <img className="rounded-full w-9 h-9" src={pembeli} alt="pembeli" />
            </div>
          ) : <Skeleton animation="wave" variant="circular" width={30} height={30} sx={{marginRight : 2}} />}
          {loading ? (
            <div className="hover:cursor-pointer">
              <h3 className="font-semibold text-sm">Asep Surasep</h3>
              <p className="font-normal text-xs">⭐ 4</p>
            </div>
          ) :<Skeleton animation="wave" variant="rounded" width={150} height={20} />}
        </div>
          {loading ? ( 
          <div className="mx-3">
            <p className="font-normal text-xs">Mantap sesuai dengan harga, saya mau beli lagi di toko lain</p>
          </div>
          ): <Skeleton animation="wave" variant="rounded" height={20} />}
      </div>
      <div className="border p-4 mb-5">
        <div className="flex mb-2">
          {loading ? (
            <div className="mr-3 hover:cursor-pointer">
              <img className="rounded-full w-9 h-9" src={pembeli} alt="pembeli" />
            </div>
          ) : <Skeleton animation="wave" variant="circular" width={30} height={30} sx={{marginRight : 2}} />}
          {loading ? (
            <div className="hover:cursor-pointer">
              <h3 className="font-semibold text-sm">Asep Surasep</h3>
              <p className="font-normal text-xs">⭐ 4</p>
            </div>
          ) :<Skeleton animation="wave" variant="rounded" width={150} height={20} />}
        </div>
          {loading ? ( 
          <div className="mx-3">
            <p className="font-normal text-xs">Mantap sesuai dengan harga, saya mau beli lagi di toko lain</p>
          </div>
          ): <Skeleton animation="wave" variant="rounded" height={20} />}
      </div>

    </div>
  );
}

export default Ulasan;
