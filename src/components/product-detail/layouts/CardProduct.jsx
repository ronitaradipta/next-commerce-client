import React from "react";

function CardProduct(props) {
  return (
    <div>
      <button className="show--modal bg-[url('/public/images/img/2.jpg')] w-14 h-14 bg-cover hover:cursor-pointer">
        <img src={props.image} alt={props.alt} width={64} />
      </button>
    </div>
  );
}

export default CardProduct;
