import React from "react";

function CardProduct({ image, alt, onClick }) {
  return (
    <div className="p-1 w-[20%]">
      <button className="show--modal h-full w-full overflow-hidden hover:cursor-pointer" onClick={onClick}>
        <img className="w-full object-cover" src={image} alt={alt} width={64} />
      </button>
    </div>
  );
}

export default CardProduct;
