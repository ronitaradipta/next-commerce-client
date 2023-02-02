import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router";
import addToCart from "../../../assets/images/addtocart.svg";

const ModalCardAtc = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-gray-900 text-center"
                  >
                    Berhasil Ditambahkan!
                  </Dialog.Title>
                  <div className="relative flex justify-center mt-4">
                    <img
                      src={addToCart}
                      alt="add to cart"
                      className="w-[250px]"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-center text-gray-500">
                      Cek detail orderan anda yang sudah ditambahkan ke
                      keranjang belanja.
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      className=" justify-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
                      onClick={() => {
                        setIsOpen(false);
                        navigate("/checkout");
                      }}
                    >
                      Lihat Keranjang
                    </button>
                    <button
                      type="button"
                      className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-emerald-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                      onClick={() => setIsOpen(false)}
                    >
                      Lanjut Belanja
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalCardAtc;
