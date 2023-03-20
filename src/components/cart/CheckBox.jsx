import React, { useState } from "react";

const CheckBox = ({ onChange, name, checked, value }) => {
  // const [isChecked, setIsChecked] = useState(false);

  return (
    <input
      type="checkbox"
      checked={checked}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default CheckBox;
