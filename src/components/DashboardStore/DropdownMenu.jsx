import { Disclosure } from "@headlessui/react";
import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

const DropdownMenu = ({ icon }) => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between px-3 hover:bg-gray-200 hover:rounded-md py-5 text-left text-base font-medium">
                <span className="flex items-center gap-2">
                  {icon}
                  Produk
                </span>
                <MdOutlineKeyboardArrowUp
                  className={`${
                    open ? "" : "rotate-180 transform"
                  } h-5 w-5 transition-transform duration-300`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pl-6 pb-2 text-sm">
                <Link to="/add-product">
                  <p className="hover:bg-gray-200 py-3 pl-2 rounded-md">
                    Tambah Produk
                  </p>
                </Link>
                <Link to="/list-products">
                  <p className="hover:bg-gray-200 py-3 pl-2 rounded-md">
                    Daftar Produk
                  </p>
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default DropdownMenu;
