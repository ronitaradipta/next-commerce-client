import React, { useEffect } from "react";

const ClickOutsideHide = ({ children, reff, className, state }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (reff.current && !reff.current.contains(e.target)) {
        state(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [state]);

  return (
    <div ref={reff} className={className}>
      {children}
    </div>
  );
};

export default ClickOutsideHide;
