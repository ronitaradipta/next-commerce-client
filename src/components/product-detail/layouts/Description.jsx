import React from "react";

function Description() {
  return (
    <section>
      <div className="mb-1">
        <h2 className="font-semibold text-xl">Sepatu Sekolah Warna Hitam</h2>
      </div>

      <div className="flex space-x-5 my-1">
        <p className="font-normal text-sm">Terjual 10RB+</p>
        <p className="font-normal text-xs">⭐ 4.9</p>
      </div>

      <div className="my-1">
        <h3 className="font-bold text-3xl">Rp 599.999</h3>
      </div>

      <div className="flex space-x-2 my-1 mb-7">
        <div className="rounded-lg bg-red-300 px-1 py-0">
          <p className="text-semibold font-normal text-red-600">50%</p>
        </div>
        <div>
          <p className="font-normal text-sm line-through">Rp 999.999</p>
        </div>
      </div>
      <div className="mb-6">
        <p className="font-normal text-sm">
          Kondisi Baru <br />
          Berat Satuan: 0,4 - 1,2 kg <br />
          Kategori: Tas Selempang Pria
          <br />
          Etalase: Tas Selempang Pria
          <br />
          <br />
          SPESIFIKASI
          <br />
          Brand : WEIXIER
          <br />
          Model : X311
          <br />
          Bahan : Waterproof Oxford Cloth
          <br />
          Interior : Lining bahan nilon
          <br />
          Gaya : Shoulder Bag
          <br />
          Ukuran (P x L x T) : 16 x 10 x 32 cm
          <br />
          Bukaan : Resleting...
          <br />
          <span className="text-green hover:cursor-pointer">
            Lihat Selengkapnya
          </span>
        </p>
      </div>
    </section>
  );
}

export default Description;
