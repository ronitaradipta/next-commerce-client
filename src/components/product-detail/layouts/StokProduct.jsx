import React, { useState } from "react";

function StokProduct() {
  return (
    <section>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-9 border items-center flex-grow-0 font-normal text-lg">
          <div
            className="btn--min px-4 py-3 text-green hover:cursor-pointer"
            onClick={decreaseHandler}
          >
            <button>-</button>
          </div>
          <div className="total--barang w-8 text-center">{stok}</div>
          <div
            className="btn--plus px-4 py-3 text-green hover:cursor-pointer"
            onClick={increaseHandler}
          >
            <button>+</button>
          </div>
        </div>
        <div className="">
          <p className="font-normal text-sm">
            Stok sisa <span className="stok--sisa">{stokSisa - stok}</span>
          </p>
        </div>
      </div>

      <div className="btn--note my-2">
        <p className="text-green font-medium text-sm">
          <button type="submit">✏️ Tambahkan catatan</button>
        </p>
        <form action="" onSubmit={addHandler}>
          <input
            type="text"
            placeholder="Tambahkan Catatan"
            onChange={function (event) {
              SetActivity(event.target.value);
            }}
          />
          <button type="submit">Tambah</button>
        </form>
        <p>{note}</p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="font-normal text-sm mx-3">Subtotal</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mx-3">Rp {subTotal * stok}</h3>
        </div>
      </div>

      <div className="flex justify-center mt-5 mb-2">
        <button className="border rounded-lg w-60 h-9 bg-green-500 text-white font-medium text-sm">
          Tambahkan ke Keranjang
        </button>
      </div>

      <div className="flex justify-center mb-4">
        <button className="border rounded-lg border-green w-60 h-9 text-green font-medium text-sm">
          Langsung Checkout
        </button>
      </div>
    </section>
  );
}

export default StokProduct;
