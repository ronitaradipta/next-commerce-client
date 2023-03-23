import React, { Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import StatsCard from "../components/DashboardStore/StatsCard";
import LayoutDashboard from "../components/layout/LayoutDashboard";
import callApi from "../services/callApi";
import TitlePage from "../components/DashboardStore/element/TitlePage";
import ProductLoading from "../components/loading/ProductLoading";

import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import formatRupiah from "../utils/formatRupiah";

const DashboardStore = () => {
  const [dataTransaction, setDataTransaction] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDataOrders = async () => {
    try {
      const response = await callApi.get("/orders/store");
      setDataTransaction(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataOrders();
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const getTotalRevenue = () => {
    let totalRevenue = 0;

    dataTransaction.data.forEach((item) => {
      totalRevenue += item.amountToPay;
    });
    return formatRupiah(totalRevenue);
  };

  return (
    <LayoutDashboard>
      <TitlePage title="Lihat Pencapaianmu Hari Ini" />
      <div className="grid gap-4 grid-cols-3 mt-6 md:w-8/12 h-32">
        {loading ? (
          <div>
            <StatsCard
              title="Jumlah Pesanan"
              stat={dataTransaction.totalData}
            />
          </div>
        ) : (
          <Skeleton variant="rounded" animation="wave" height={150} />
        )}
        {loading ? (
          <div>
            <StatsCard title="Penghasilan" stat={getTotalRevenue()} />
          </div>
        ) : (
          <Skeleton variant="rounded" animation="wave" height={150} />
        )}
        {loading ? (
          <div>
            <StatsCard
              title="Pesanan Belum Diproses"
              stat={dataTransaction.statusPending}
            />
          </div>
        ) : (
          <Skeleton variant="rounded" animation="wave" height={150} />
        )}
      </div>
      <h2 className="font-semibold text-xl mt-6">Riwayat Pesanan</h2>
      <div className="flex flex-col gap-6 mt-6">
        {loading ? (
          <Suspense fallback={<ProductLoading />}>
            {dataTransaction.data.map((item, idx) => {
              const { price, product, quantity } = item.OrderDetails[0];
              return (
                <div
                  className="bg-white w-full flex rounded-lg p-4 md:p-6 shadow-lg justify-between gap-2 flex-col lg:flex-row"
                  key={idx}
                >
                  <div className="flex gap-2 md:w-8/12 lg:w-6/12 xl:w-4/12">
                    <img
                      src={product.ProductGalleries[0]?.image}
                      alt="image"
                      className="w-24 h-24 "
                    />
                    <div className=" flex flex-col justify-between">
                      <div className="text-sm w-full font-semibold md:text-[18px]">
                        {product.name}
                      </div>
                      <p className="text-gray-500 text-sm md:text-base ">
                        {quantity} x {price}
                      </p>
                      <a
                        href="#"
                        className="font-medium text-emerald-500 text-[12px] md:text-sm"
                      >
                        Lihat Detail Transaksi
                      </a>
                    </div>
                  </div>
                  <div className="md:w-8/12 lg:w-4/12 py-2">
                    <div className="text-sm md:text-xl font-semibold">
                      Alamat
                    </div>
                    <p className="text-gray-500 text-[10px] md:text-sm">
                      {item.customerAddress}
                    </p>
                  </div>
                  <div className="md:w-8/12 lg:w-4/12 py-2">
                    <div className="text-sm font-semibold md:text-xl">
                      Nama Pemesan
                    </div>
                    <p className="text-gray-500 text-[10px] md:text-sm">
                      {item.customerDetail}
                    </p>
                  </div>
                  <div className="md:w-8/12 lg:w-4/12 py-2">
                    <div className="text-gray-500 text-sm md:text-md">
                      Jumlah Pesanan {item.totalProducts} Barang
                    </div>
                    <p className="text-sm md:text-xl font-semibold">
                      Total Harga: {formatRupiah(item.amountToPay)}
                    </p>
                  </div>
                </div>
              );
            })}
          </Suspense>
        ) : (
          <Box>
            <Skeleton
              variant="rounded"
              animation="wave"
              height={150}
              sx={{ marginBottom: 5 }}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={150}
              sx={{ marginBottom: 5 }}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={150}
              sx={{ marginBottom: 5 }}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={150}
              sx={{ marginBottom: 5 }}
            />
          </Box>
        )}
      </div>
    </LayoutDashboard>
  );
};

export default DashboardStore;
