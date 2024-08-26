import React, { useState } from "react";

import { wakeboards } from "../constants/index";
const OnSalePage = () => {
  const calculatePrice = (price, sale) => {
    let finalPrice = (price - (price * sale) / 100).toFixed(2);
    return finalPrice;
  };

  return (
    <>
      <h1 className="mt-10 text-center font-bold text-xl">On Sale</h1>
      <div className="w-full grid grid-cols-3 lg-max:grid-cols-2 p-5 gap-5">
        {wakeboards.map((item, idx) => (
          <div className="relative w-full h-auto mb-[3rem] group" key={idx}>
            <div className="border border-black" key={idx}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-contain h-[400px] cursor-pointer"
              />
            </div>
            {item.sale && (
              <div className="absolute top-3 left-2 bg-red-600 text-white rounded-lg px-3 py-1 rotate-[-15deg] shadow-lg text-center">
                <p className="font-bold text-xs">{item.sale}% OFF</p>
              </div>
            )}
            <div className="flex flex-col text-center mt-2">
              <p className="font-bold">{item.title}</p>
              <p className="line-through font-light">{item.price}$</p>
              <p className="">{calculatePrice(item.price, item.sale)}$</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OnSalePage;
