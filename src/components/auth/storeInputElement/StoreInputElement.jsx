const InputElement = ({ validation, type, placeholder, name, onChange, maxLength, onFocus, password, alert }) => {
  const inputClass = `border ${validation ? "border-red-500" : "border-gray-500"} outline-none rounded-md px-4 py-2 w-full`;

  return (
    <div>
      <div className="relative flex items-center">
        <input className={inputClass} type={type} placeholder={placeholder} name={name} onChange={onChange} maxLength={maxLength} onFocus={onFocus} required />
        {password}
      </div>
      <div className="flex h-5 justify-between text-[10px] mb-2">{alert}</div>
    </div>
  );
};
export default InputElement;
