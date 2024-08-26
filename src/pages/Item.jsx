import { useParams } from "react-router-dom";
import {
  BootsInfo,
  HandleRopesInfo,
  KneeBoardsInfo,
  newArrivals,
  wakeboards,
  OnSaleItem,
} from "../constants/index";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState } from "react";
const ItemDetailPage = () => {
  const { id } = useParams(); // Get le item id des parametres du URL
  const item = [
    ...OnSaleItem,
    ...newArrivals,
    ...HandleRopesInfo,
    ...BootsInfo,
    ...wakeboards,
    ...KneeBoardsInfo,
  ].find((item) => item.id === parseInt(id)); // Find the item by id
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [openSection, setOpenSection] = useState("overview");
  const { addToCart, isInCart } = useCart();
  if (!item) {
    return <p>Item not found!</p>;
  }

  const handleOpening = (section) => {
    setOpenSection(section === openSection ? null : section);
  };

  const calculatePrice = (price, sale) => {
    let finalPrice = (price - (price * sale) / 100).toFixed(2);
    return finalPrice;
  };

  return (
    <>
      <div className="flex md-max:flex-col justify-center p-5 w-full">
        <div className="flex items-center justify-center bg-gray-100 w-[400px] h-[400px] md-max:m-auto md-max:w-full md-max:max-w-lg">
          <img
            src={item.img}
            alt={item.title}
            className="w-[300px] h-[400px] object-contain m-auto"
          />
        </div>
        <div className="flex flex-col md:px-10 md:max-w-lg md-max:m-auto md-max:mt-5 min-w-lg w-full">
          <h1 className="text-2xl font-bold">{item.title}</h1>
          {isFavorite(item.id) ? (
            <FaHeart
              className="hover:opacity-60 cursor-pointer mt-5"
              onClick={() => removeFavorite(item.id)}
            />
          ) : (
            <FaRegHeart
              className="hover:opacity-60 cursor-pointer mt-5"
              onClick={() => addFavorite(item)}
            />
          )}
          <div className="flex items-center mt-5">
            <h1 className="font-bold">Size :</h1>
            <span className="border-gray-300 border p-2 ml-2">One size</span>
          </div>

          {item.sale ? (
            <div className="flex mt-5">
              <h1 className="font-bold">Price: </h1>
              <p className="ml-2">{calculatePrice(item.price, item.sale)}$</p>
            </div>
          ) : (
            <div className="flex mt-5">
              <h1 className="font-bold">Price: </h1>
              <p className="ml-2">{item.price}$</p>
            </div>
          )}

          <button
            className="bg-black text-white p-3 w-full text-center mt-5 hover:opacity-80"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
          <div className="border-gray-300 border-t-2 border-b-2 mt-5 min-w-full">
            <div>
              <div
                className="flex justify-between my-2"
                onClick={() => handleOpening("overview")}
              >
                <h1 className="font-bold">Overview</h1>
                {openSection === "overview" ? (
                  <MdOutlineKeyboardArrowUp className="text-black text-xl font-bold" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="text-black text-xl font-bold" />
                )}
              </div>
              {openSection === "overview" ? (
                <p className="my-2">{item.overview}</p>
              ) : (
                <p className="hidden">{item.overview}</p>
              )}
            </div>
          </div>
          <div className="border-gray-300 border-b-2 ">
            <div className="">
              <div
                className="flex justify-between my-2"
                onClick={() => handleOpening("details")}
              >
                <h1 className="font-bold">Details</h1>
                {openSection === "details" ? (
                  <MdOutlineKeyboardArrowUp className="text-black text-xl font-bold" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="text-black text-xl font-bold" />
                )}
              </div>
              {openSection === "details" ? (
                <p className="my-2">{item.details}</p>
              ) : (
                <p className="hidden">{item.details}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailPage;
