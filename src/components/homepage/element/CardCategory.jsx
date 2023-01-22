import React from "react";

const CardCategory = ({ data }) => {
  const cardStyle =
    "bg-gray-100 w-full rounded-lg flex flex-col items-center justify-center h-36 text-center";

  return (
    <a href="#" className={cardStyle}>
      {/* <img src={data.image} alt={data.title} className="w-20" /> */}
      <p className="text-sm">{data}</p>
    </a>
  );
};

export default CardCategory;
