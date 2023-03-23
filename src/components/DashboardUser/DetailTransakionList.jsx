import React from 'react'
import { Link } from 'react-router-dom'

function DetailTransakionList({data}) {
    console.log(data)
  return (
    <div
    className="bg-white w-full flex rounded-lg p-4 md:p-6 shadow-lg justify-between gap-2 flex-col lg:flex-row"
    key={data}
  >
    <div className="flex gap-x-5 md:w-8/12 lg:w-6/12 xl:w-4/12">
      <img src={data && data.OrderDetails[0].product.ProductGalleries[0]?.image} alt="image" className="w-16 h-16 md:w-24 md:h-24 " />
      <div className="flex flex-col justify-between">
        <div className="text-sm font-semibold md:text-[18px]">{data.OrderDetails[0].product.name}</div>
        <p className="text-gray-500 text-sm md:text-base">
        {data.OrderDetails[0].quantity} X {data.OrderDetails[0].price}
        </p>
        <Link to={`/product-detail/${data.OrderDetails[0].product.id}`}>
          <a
            className="font-medium text-emerald-500 text-[12px] md:text-sm"
          >
            Lihat Produk Lainnya
          </a>
        </Link>
      </div>
    </div>
    <div className=" md:w-8/12 lg:w-4/12 py-2">
      <div className="font-semibold text-sm md:text-lg">Alamat</div>
      <p className="text-gray-500 text-[10px] md:text-sm">
        {data.customerAddress}
      </p>
    </div>
    <div className="md:w-8/12 lg:w-4/12 py-2">
     
      <div className="text-sm md:text-lg font-semibold">Nama Pemesan</div>
      <p className="text-gray-500 text-[10px] md:text-sm">
        {data.customerDetail}
      </p>
    </div>
    <div className="md:w-8/12 lg:w-4/12 py-2">
      <h3 className="text-gray-500 text-sm md:text-md">
        Jumlah Pesanan {data.OrderDetails[0].quantity} Barang
      </h3>
      <p className="text-sm md:text-xl font-semibold">
        Total Harga : Rp. {data.totalPrice}
      </p>
    </div>
  </div>
  )
}

export default DetailTransakionList
