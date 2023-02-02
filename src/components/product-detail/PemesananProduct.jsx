import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Spinner from "../loading/Spinner";
import ModalCardAtc from "./layouts/ModalCardAtc";

function PemesananProduct({ data }) {
  const [activity, SetActivity] = useState("");
  const [note, setNote] = useState("");
  const [isAddNote, setIsAddNote] = useState(false);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [inputQty, setInputQty] = useState(0);

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      if (value > 0) {
        if (e.target.value > data.stock) {
          setInputQty(data.stock);
        } else {
          setInputQty(e.target.value);
        }
      } else {
        setInputQty(0);
      }
    } else setInputQty(0);
  };

  const addHandler = (event) => {
    event.preventDefault();
    setNote(activity);
    setIsAddNote(false);
  };

  const addNoteHandler = () => {
    setIsAddNote((current) => !current);
    isAddNote && <input type="text" />;
  };

  const handleCheckout = () => {
    if (!user) {
      navigate("/login");
    } else {
      const postCheckout = async () => {
        try {
          setLoading(true);
          const response = await api.post("/carts/add", {
            userId: user.id,
            products: [{ id: data.id, quantity: inputQty }],
          });
          console.log(response);
          setLoading(false);
          setIsOpen(true);
        } catch (error) {
          console.error(error);
        }
      };
      if (inputQty) {
        postCheckout();
      } else {
        alert("qty produk harus lebih dari 0");
      }
    }
  };

  useEffect(() => {
    if (Cookies.get("user")) {
      setUser(JSON.parse(Cookies.get("user")));
    }
  }, []);

  return (
    <>
      <div className="border px-4 py-2 w-4/12">
        <div className="mb-5">
          <h3 className="font-semibold text-lg">Atur jumlah dan catatan</h3>
        </div>
        <section>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-9 border items-center flex-grow-0 font-normal text-lg">
              <div
                className="btn--min px-4 py-3 text-emerald-500 hover:cursor-pointer"
                onClick={() => {
                  inputQty > 0 && setInputQty(inputQty - 1);
                }}
              >
                <button>-</button>
              </div>
              <input
                value={inputQty}
                className="total--barang w-8 text-center appearance-none"
                onChange={handleOnChange}
                type="text"
              />
              <div
                className="btn--plus px-4 py-3 text-emerald-500 hover:cursor-pointer"
                onClick={() => {
                  inputQty < data.stock && setInputQty(inputQty + 1);
                }}
              >
                <button>+</button>
              </div>
            </div>
            <div className="">
              <p className="font-normal text-sm">
                Stok sisa{" "}
                <span className="stok--sisa">{data.stock - inputQty}</span>
              </p>
            </div>
          </div>

          <div className="btn--note my-2">
            <p className="text-emerald font-medium text-sm">
              <button onClick={addNoteHandler}>✏️ Tambahkan catatan</button>
            </p>
            {isAddNote && (
              <form onSubmit={addHandler} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Tambahkan Catatan"
                  onChange={(e) => {
                    SetActivity(e.target.value);
                  }}
                />
                <div className="text-right">
                  <button className="bg-emerald-500 py-2 px-4 text-white rounded-md ">
                    Tambah
                  </button>
                </div>
              </form>
            )}
            {note && <p className="text-gray-400 text-sm">Catatan : {note}</p>}
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-normal text-sm mx-3">Subtotal</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mx-3">
                $ {data.price * inputQty}
              </h3>
            </div>
          </div>

          <button
            className="border rounded-lg w-full p-3 mt-4 bg-emerald-500 text-white font-medium text-sm flex justify-center"
            onClick={handleCheckout}
          >
            {loading ? <Spinner /> : "Tambahkan ke Keranjang"}
          </button>
          <Link to="checkout">
            <button className="border rounded-lg mt-4 border-emerald-500 p-3 text-emerald-500 font-medium text-sm w-full">
              Langsung Checkout
            </button>
          </Link>
        </section>
        <ModalCardAtc isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

export default PemesananProduct;
