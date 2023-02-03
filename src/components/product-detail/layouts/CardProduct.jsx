import React from "react";

function CardProduct({ image, alt, onClick }) {
  return (
    <div>
      <button
        className="show--modal w-14 h-14 bg-cover hover:cursor-pointer"
        onClick={onClick}
      >
        <img src={image} alt={alt} width={64} />
      </button>
    </div>
  );
}

export default CardProduct;
