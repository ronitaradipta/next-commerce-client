import React from "react";

const StatsCard = ({ title, stat }) => {
  return (
    <div className="bg-white h-full rounded-lg p-5 ">
      <h5 className="text-sm">{title}</h5>
      <p className="font-bold text-xl mt-2 md:text-2xl lg:text-3xl">{stat}</p>
    </div>
  );
};

export default StatsCard;
