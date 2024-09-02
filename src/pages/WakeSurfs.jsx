import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { newArrivals } from "../constants/index";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
const WakeSurfs = () => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [sortOption, setSortOption] = useState("featured");
  const { addToCart, removeFromCart, isInCart } = useCart();
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const changePrice = (price) => {
    if (typeof price !== "string") {
      throw new Error("Input must be a string");
    }
    return parseFloat(price.replace(/[^0-9.]/g, "")); // Remove non-numeric characters except dot
  };

  const sortItems = (items, option) => {
    switch (option) {
      case "price-low-to-high":
        return [...items].sort(
          (a, b) => changePrice(a.price) - changePrice(b.price)
        );
      case "price-high-to-low":
        return [...items].sort(
          (a, b) => changePrice(b.price) - changePrice(a.price)
        );
      case "alphabetical-a-z":
        return [...items].sort((a, b) => a.title.localeCompare(b.title));
      case "alphabetical-z-a":
        return [...items].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return items;
    }
  };
  const sortedArrivals = sortItems(newArrivals, sortOption);

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
                  className="w-full object-contain h-[400px] cursor-pointer"
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
            <div className="flex flex-col text-center mt-2">
              <p className="font-bold">{item.title}</p>
              <p>{item.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WakeSurfs;
