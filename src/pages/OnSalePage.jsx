import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OnSaleItem } from "../constants/index";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useFavorites } from "../context/FavoritesContext";
const OnSalePage = () => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const calculatePrice = (price, sale) => {
    let finalPrice = (price - (price * sale) / 100).toFixed(2);
    return finalPrice;
  };

  return (
    <>
      <h1 className="mt-10 text-center font-bold text-xl">On Sale</h1>
      <div className="w-full grid grid-cols-3 lg-max:grid-cols-2 p-5 gap-5">
        {OnSaleItem.map((item, idx) => (
          <div className="relative w-full h-auto mb-[3rem] group" key={idx}>
            <div className="border border-black" key={idx}>
              <Link to={`/item/${item.id}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-contain h-[350px] cursor-pointer"
                />
              </Link>
              <div className="absolute flex justify-end gap-3 p-5 top-0 right-0">
                {isFavorite(item.id) ? (
                  <FaHeart
                    className="hover:opacity-60 cursor-pointer"
                    onClick={() => removeFavorite(item.id)}
                  />
                ) : (
                  <FaRegHeart
                    className="hover:opacity-60 cursor-pointer"
                    onClick={() => addFavorite(item)}
                  />
                )}
              </div>
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
