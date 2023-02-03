import React from "react";

const StatsCard = ({ title, stat }) => {
  return (
    <div className="bg-white h-full rounded-lg p-5">
      <h5 className="text-sm">{title}</h5>
      <p className="font-bold text-4xl mt-4">{stat}</p>
    </div>
  );
};

export default StatsCard;
