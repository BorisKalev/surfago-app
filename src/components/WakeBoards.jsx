import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { wakeboards } from "../constants/index";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
const WakeBoards = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      if (direction === "left") {
        scrollRef.current.scrollLeft = Math.max(0, scrollLeft - 300);
      } else if (direction === "right") {
        scrollRef.current.scrollLeft = Math.min(
          maxScrollLeft,
          scrollLeft + 300
        );
      }
    }
  };

  return (
    <>
      <header className="flex justify-between px-[5rem] mt-[5rem] mb-[5rem] w-full ">
        <div className="flex flex-col">
          <h1 className="font-roboto text-3xl">Wakesurf Boards</h1>
        </div>
        <Link to={"/wakeboards"}>
          {" "}
          <div className="flex items-center gap-2 lg-max:ml-[2rem] lg-max:text-blue-400">
            <h1>View All</h1>
            <FaArrowAltCircleRight />
          </div>
        </Link>
      </header>

      {/* WakeBoards Gallery */}
      <div className="relative w-full">
        <div
          className="relative flex ml-[5rem] mt-5 w-max cursor-pointer"
          ref={scrollRef}
        >
          {wakeboards.map((board, idx) => (
            <div
              className={`w-[300px] h-[400px] shadow-lg shadow-black-500/50 ${
                idx === 0 ? "ml-0" : "ml-8"
              }`}
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
                  <p className="ml-3">{board.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-[40%] left-0 transform -translate-y-1/2 px-2 z-10 pointer-events-none">
          <BsArrowLeftShort
            className="rounded-md bg-gray-300 text-2xl hover:text-white cursor-pointer pointer-events-auto"
            onClick={() => scroll("left")}
          />
        </div>
        <div className="absolute top-[40%] right-0 transform -translate-y-1/2 px-2 z-10 pointer-events-none">
          <BsArrowRightShort
            className="rounded-md bg-gray-300 text-2xl hover:text-white cursor-pointer pointer-events-auto"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </>
  );
};

export default WakeBoards;
