import { useState } from "react";
import { useCart } from "../context/CartContext";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, calculateTotal, updateQuantity, removeFromCart } = useCart();
  const handleAdding = (itemId, currentQuantity) => {
    updateQuantity(itemId, currentQuantity + 1);
  };
  const handleSubstracting = (itemId, currentQuantity) => {
    if (currentQuantity === 1) return;

    updateQuantity(itemId, currentQuantity - 1);
  };
  const calculatePrice = (price, sale) => {
    let finalPrice = (price - (price * sale) / 100).toFixed(2);
    return finalPrice;
  };
  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-5 mb-5">Your cart</h1>

      {cart.length > 0 ? (
        <div className="flex flex-col">
          {cart.map((item, idx) => (
            <div
              className="flex flex-col border-t-2 border-b-2 border-gray w-full h-[200px] px-10 lg-max:h-full lg-max:py-10"
              key={idx}
            >
              <div className="flex justify-between lg-max:flex-col lg-max:justify-center lg-max:items-center">
                <div className="flex items-center gap-5 py-3 lg-max:flex-col">
                  <Link to={`/item/${item.id}`}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-contain w-[200px] h-[170px] bg-gray-100 lg-max:w-[350px] lg-max:h-[250px] cursor-pointer"
                    />
                  </Link>
                  <h1 className="font-bold w-[190px] lg-max:text-center">
                    {item.title}
                  </h1>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex gap-2 items-center border border-gray-300 p-2 rounded-lg w-[145px] bg-white shadow-md">
                    <button
                      className="border-r border-gray-300 px-3 py-1 text-lg font-medium hover:bg-gray-200 focus:outline-none"
                      onClick={() => handleSubstracting(item.id, item.quantity)}
                    >
                      -
                    </button>
                    <h1 className="px-4 text-lg font-semibold text-center">
                      {item.quantity}
                    </h1>
                    <button
                      className="border-l border-gray-300 px-3 py-1 text-lg font-medium hover:bg-gray-200 focus:outline-none"
                      onClick={() => handleAdding(item.id, item.quantity)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {item.sale ? (
                  <div className="flex items-center gap-1 lg-max:mt-5">
                    <h1>Price:</h1>
                    <h1 className="font-bold">
                      {(
                        calculatePrice(item.price, item.sale) * item.quantity
                      ).toFixed(2)}
                      $
                    </h1>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 lg-max:mt-5 w-[150px]">
                    <h1>Price:</h1>
                    <h1 className="font-bold">
                      {(item.price * item.quantity).toFixed(2)}$
                    </h1>
                  </div>
                )}

                <div className="flex items-center lg-max:mt-5">
                  <button onClick={() => removeFromCart(item.id)}>
                    <AiFillDelete className="text-red-600 text-lg lg-max:text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-center items-center mt-5">
            <h1>
              Subtotal ({cart.length}) items :{" "}
              <span className="font-bold">{calculateTotal().toFixed(2)}$</span>
            </h1>
            <button className="p-2 w-[150px] h-[50px] bg-blue-500 mt-5 hover:opacity-80 duration-300 hover:text-white">
              Go to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-5 mb-7">
          <p>Your basket is empty,</p>
          <Link to={"/newarrivals"}>
            <p className="underline">Continue Shopping!</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
