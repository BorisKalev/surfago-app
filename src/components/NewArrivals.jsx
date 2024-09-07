import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { newArrivals } from "../constants/index";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const itemWidth = 300 + 32;
      const maxScrollLeft = scrollWidth - clientWidth;
      if (direction === "left") {
        scrollRef.current.scrollLeft = Math.max(0, scrollLeft - itemWidth);
      } else if (direction === "right") {
        scrollRef.current.scrollLeft = Math.min(
          maxScrollLeft,
          scrollLeft + itemWidth
        );
      }
    }
  };

  return (
    <>
      <header className="flex justify-between px-[5rem] mt-[5rem] w-full">
        <div className="flex flex-col">
          <h1 className="font-roboto text-3xl">New Arrivals</h1>
          <p className="font-roboto">
            Get ready to scroll new must-have items. All carefully hand-selected
            by our team.
          </p>
        </div>
        <Link to={"/newarrivals"}>
          <div className="flex items-center gap-2 lg-max:ml-[2rem] lg-max:text-blue-300">
            <h1>View All</h1>
            <FaArrowAltCircleRight />
          </div>
        </Link>
      </header>

      {/* New Arrivals Gallery */}
      <div className="relative w-full">
        <div
          className="relative flex overflow-x-auto scrollbar-hide scroll-smooth px-[4rem] mt-5 w-full pb-5"
          ref={scrollRef}
        >
          {newArrivals.map((board, idx) => (
            <div
              className="flex-none w-[300px] h-[400px] shadow-lg shadow-black-500/50 ml-[2rem]"
              key={idx}
            >
              <div className="flex flex-col items-start mb-5">
                <Link to={`/item/${board.id}`}>
                  <img
                    src={board.img}
                    alt={board.title}
                    className="object-contain h-[300px] w-[300px]"
                  />
                </Link>
                <div>
                  <h1 className="ml-3 text-lg font-bold mt-3 text-wrap">
                    {board.title}
                  </h1>
                  <p className="ml-3">{board.price}$</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Arrows */}
        <div className="absolute top-[40%] left-2 transform -translate-y-1/2 z-10 pointer-events-auto">
          <BsArrowLeftShort
            className="rounded-md bg-gray-300 text-3xl p-1 hover:text-white cursor-pointer"
            onClick={() => scroll("left")}
          />
        </div>
        <div className="absolute top-[40%] right-2 transform -translate-y-1/2 z-10 pointer-events-auto">
          <BsArrowRightShort
            className="rounded-md bg-gray-300 text-3xl p-1 hover:text-white cursor-pointer"
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      {/* Email Section */}
      <div className="flex w-full bg-gray-200 justify-between mt-[5rem] h-full px-5 py-[5rem] lg-max:flex-col lg-max:text-center">
        <div className="flex flex-col items-center justify-center text-wrap">
          <h1 className="font-bold text-2xl">
            Sign Up to our emails for VIP offers and new products alerts
          </h1>
          <p className="text-lg">
            Get 10% off your first order, plus exclusive offers and discount
          </p>
        </div>
        <div className="flex items-center gap-5 mr-[3rem] justify-center lg-max:mt-2">
          <input
            type="email"
            placeholder="Enter Email"
            className="border flex justify-center items-center px-3 py-3 border-black w-[20rem]"
          />
          <BsArrowRightShort className="rounded-md text-3xl hover:text-white cursor-pointer pointer-events-auto" />
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
