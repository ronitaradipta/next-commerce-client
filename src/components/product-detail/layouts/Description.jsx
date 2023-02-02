import React from "react";

function Description({ data }) {
  return (
    <section>
      <div className="mb-3">
        <h2 className="font-bold text-xl">{data.title}</h2>
      </div>

      <div className="flex items-center space-x-4 my-3">
        <p className="font-normal text-sm">Terjual 10RB+</p>
        <p className="font-normal text-xs">⭐ {data.rating}</p>
      </div>

      <div className="my-1">
        <h3 className="font-bold text-3xl">${data.price}</h3>
      </div>

      <div className="flex items-center space-x-2 my-1 mb-7">
        <div className="rounded-lg bg-red-300 px-1 py-0">
          <p className="text-semibold font-normal text-red-600">
            {Math.ceil(data.discountPercentage)}%
          </p>
        </div>
        <div>
          <p className="font-normal text-sm line-through text-gray-500">
            ${Math.ceil((100 / (100 - data.discountPercentage)) * data.price)}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <p className="font-normal text-sm break-words">
          {data && data.description}
          {data && data.description.length > 300 && (
            <span className="text-emerald-500 font-semibold hover:cursor-pointer">
              Lihat Selengkapnya
            </span>
          )}
        </p>
      </div>
    </section>
  );
}

export default Description;
