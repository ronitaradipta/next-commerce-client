import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import callApi from "../../../services/callApi";
import Spinner from "../../loading/Spinner";

const PaymentConfirmation = ({ isOpen, closeModal }) => {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePaymentConfirmation = async () => {
    try {
      setLoading(true);
      const response = await callApi.post("/orders/notification", {
        currency: "IDR",
        fraud_status: "accept",
        gross_amount: "24145.00",
        order_id: orderId,
        payment_type: "bank_transfer",
        status_code: "201",
        status_message: "Success, Bank Transfer transaction is created",
        transaction_id: orderId,
        transaction_status: "pending",
        transaction_time: "2018-10-24 15:34:33",
        va_numbers: [{ bank: "bca", va_number: "490526303019299" }],
      });

      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Masukkan No. Invoice!
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    type="text"
                    onChange={(e) => setOrderId(e.target.value)}
                    className="border border-gray-300 font-normal rounded p-2 w-full"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    onClick={handlePaymentConfirmation}
                  >
                    {loading ? <Spinner /> : "Kirim"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentConfirmation;
