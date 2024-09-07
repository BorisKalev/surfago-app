import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { wakeboards, OnSaleItem } from "../constants/index";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
const WakeBoardsPage = () => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [sortOption, setSortOption] = useState("featured");
  const { addToCart, removeFromCart, isInCart } = useCart();
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const changePrice = (price, sale) => {
    if (sale) {
      return parseFloat(calculatePrice(price, sale)); // Use the discounted price
    }
    return parseFloat(price); // Use the original price if no sale
  };

  const sortItems = (items, option) => {
    switch (option) {
      case "price-low-to-high":
        return [...items].sort(
          (a, b) => changePrice(a.price, a.sale) - changePrice(b.price, b.sale)
        );
      case "price-high-to-low":
        return [...items].sort(
          (a, b) => changePrice(b.price, b.sale) - changePrice(a.price, a.sale)
        );
      case "alphabetical-a-z":
        return [...items].sort((a, b) => a.title.localeCompare(b.title));
      case "alphabetical-z-a":
        return [...items].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return items;
    }
  };

  const calculatePrice = (price, sale) => {
    let finalPrice = (price - (price * sale) / 100).toFixed(2);
    return finalPrice;
  };

  const allWakeboards = [...OnSaleItem, ...wakeboards];

  const sortedArrivals = sortItems(allWakeboards, sortOption);

  return (
    <>
      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="font-bold  text-lg text-gray-800">Sort By</h1>
        <select
          className="p-2 font-poppins border  border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="featured">Featured</option>
          <option value="price-low-to-high">Price, low to high</option>
          <option value="price-high-to-low">Price, high to low</option>
          <option value="alphabetical-a-z">Alphabetically, A-Z</option>
          <option value="alphabetical-z-a">Alphabetically, Z-A</option>
        </select>
      </div>

      <div className="grid grid-cols-3 lg-max:grid-cols-2 sm-max:grid-cols-1 p-5 gap-5 w-full mt-10">
        {sortedArrivals.map((item) => (
          <div key={item.id} className="relative w-full h-auto mb-[3rem] group">
            <div className=" border border-black">
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
            <div className="text-center">
              <h1 className="ml-3 text-lg font-bold mt-3 text-wrap">
                {item.title}
              </h1>
              {item.sale ? (
                <p className="ml-3 line-through">{item.price}$</p>
              ) : (
                <p className="ml-3">{item.price}$</p>
              )}

              {item.sale && (
                <p className="ml-3 font-bold">
                  {calculatePrice(item.price, item.sale)}$
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WakeBoardsPage;
