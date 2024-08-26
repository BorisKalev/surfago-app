import React from "react";
import { Link } from "react-router-dom";
import { CategoriesInfo } from "../constants/index";

const Categories = () => {
  return (
    <div className="mt-[10rem] flex justify-center w-full h-full gap-10 md-max:gap-3 ml-2 sm-max:flex-col">
      {CategoriesInfo.map((categorie, idx) => (
        <div
          key={categorie.id}
          className={`relative flex w-[400px] h-[400px] sm-max:ml-2 sm-max:w-full ${
            idx === 0 ? "ml-0" : "ml-8"
          }`}
        >
          <img
            src={categorie.img}
            alt={categorie.title}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40" />
          <div className="absolute inset-0 p-5 flex items-center flex-col justify-center text-white gap-y-5 md-max:gap-y-2">
            <h1 className="text-2xl z-10">{categorie.title}</h1>
            <Link to={categorie.link}>
              <button className="bg-black p-3 hover:bg-white hover:text-black transition-all duration-300">
                {categorie.msg}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
