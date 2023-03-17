import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown } from "react-icons/hi2";
import { BsCheck2 } from "react-icons/bs";

const InputSelect = ({
  label,
  data,
  inputCategory,
  setInputCategory,
  name,
}) => {
  return (
    <div className="flex flex-wrap mb-6">
      <label className="w-full md:w-[20%] mb-2">
        <span className="font-semibold text-base">{label}</span>
      </label>
      <Listbox
        value={inputCategory}
        onChange={setInputCategory}
        name={name}
        required
      >
        <div className="relative w-full md:w-[80%] ">
          <Listbox.Button className="relative border border-gray-300 font-normal rounded p-2 w-full text-left">
            <span className="block truncate">{inputCategory}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data.map((item, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-emerald-100 text-emerald-900"
                        : "text-gray-900"
                    }`
                  }
                  value={item.id}
                >
                  {({ inputCategory }) => (
                    <>
                      <span
                        className={`block truncate ${
                          inputCategory ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.name}
                      </span>
                      {inputCategory ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-600">
                          <BsCheck2 className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default InputSelect;
