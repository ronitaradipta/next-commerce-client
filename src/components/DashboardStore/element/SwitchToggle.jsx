import { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchToggle = ({ label, inputToggle, setInputToggle }) => {
  return (
    <label className="mb-6 w-full flex">
      <span className="font-semibold text-base w-full md:w-[20%]">{label}</span>
      <Switch
        checked={inputToggle}
        onChange={setInputToggle}
        className={`${inputToggle ? "bg-emerald-500" : "bg-gray-300"}
          relative inline-flex h-[26px] w-[62px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${inputToggle ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </label>
  );
};

export default SwitchToggle;
