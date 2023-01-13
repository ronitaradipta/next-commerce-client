import React from "react";

const Category = () => {
  return (
    <section>
      <h2>Kategori Pilihan</h2>
      <div className="columns-10 mt-6">
        <div className="bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center">
          <img
            src="../public/images/elektronik.png"
            alt="elektronik"
            className="w-20"
          />
          <p className="text-sm">Elektronik</p>
        </div>
        <div className="bg-gray-100 w-full h-36 rounded-lg flex flex-col items-center justify-center text-center">
          <img
            src="../public/images/komputer.png"
            alt="komputer"
            className="w-20"
          />
          <p className="text-sm">Komputer & Aksesoris</p>
        </div>
        <div className="bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center">
          <img
            src="../public/images/handphone.png"
            alt="handphone"
            className="w-20"
          />
          <p className="text-sm">Handphone & Aksesoris</p>
        </div>
        <div className="bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center">
          <img
            src="../public/images/pakaian-pria.png"
            alt="pakaian pria"
            className="w-20"
          />
          <p className="text-sm">Pakaian Pria</p>
        </div>
        <div className="bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center">
          <img
            src="../public/images/sepatu.png"
            alt="sepatu pria"
            className="w-20"
          />
          <p className="text-sm">Sepatu Pria</p>
        </div>
        <div className="bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center">
          <img src="../public/images/tas.png" alt="tas pria" className="w-20" />
          <p className="text-sm">Tas Pria</p>
        </div>
        <div className="bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center">
          <img
            src="../public/images/aksesoris.png"
            alt="aksesoris fashion"
            className="w-20"
          />
          <p className="text-sm">Aksesoris Fashion</p>
        </div>
        <div className="bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center">
          <img
            src="../public/images/jam-tangan.png"
            alt="jam tangan"
            className="w-20"
          />
          <p className="text-sm">Jam Tangan</p>
        </div>
        <div className="bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center">
          <img
            src="../public/images/kesehatan.png"
            alt="Kesehatan"
            className="w-20"
          />
          <p className="text-sm">Kesehatan</p>
        </div>
        <div className="bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center">
          <img
            src="../public/images/hobi.png"
            alt="Hobi & Koleksi"
            className="w-20"
          />
          <p className="text-sm">Hobi & Koleksi</p>
        </div>
      </div>
    </section>
  );
};

export default Category;
