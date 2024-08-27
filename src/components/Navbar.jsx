import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa6";
import { FaChevronDown, FaHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo from "../assets/LogoSurfago_texte.png";
const Navbar = () => {
  const { favorites } = useFavorites();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top bar */}
      <div className="relative flex justify-center items-center w-full h-[5rem] bg-[#3586ff]">
        <Link
          to={"/survey"}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <button className="text-white cursor-pointer underline">
            Take our survey to WIN a £150 gift card
          </button>
        </Link>
        <div className="absolute right-0 flex text-white gap-3 mr-5 text-lg lg-max:hidden">
          <FaInstagram className="cursor-pointer hover:opacity-50 transition-all duration-300" />
          <FaTiktok className="cursor-pointer hover:opacity-50 duration-300" />
          <FaFacebook className="cursor-pointer hover:opacity-50 duration-300" />
        </div>
      </div>

      {/* Navbar */}
      <div className="relative flex items-center w-full justify-end h-[5rem] lg-max:h-[8rem] lg-max:flex-col">
        <RxHamburgerMenu
          onClick={toggleMenu}
          className="absolute top-5 left-5 text-2xl text-black hidden md-max:flex cursor-pointer"
        />
        <Link to={"/"}>
          <h1 className="absolute -top-[10px] text-2xl left-1/2 transform -translate-x-1/2 lg-max:relative lg-max:max-w-full">
            <img
              src={logo}
              alt="surfago-logo"
              className="w-[100px] h-[100px]"
            />
          </h1>
        </Link>
        <div className="flex items-center lg-max:mb-3">
          <Link to={"/wishlist"}>
            <div className="flex gap-1 cursor-pointer">
              {favorites.length > 0 ? (
                <FaHeart className="text-lg text-red-600" />
              ) : (
                <IoIosHeartEmpty className="text-lg" />
              )}
              <p className="text-xs">Wishlist</p>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="flex gap-1 mx-5 cursor-pointer">
              <IoCartOutline className="text-lg" />
              <p className="text-xs">
                Cart -{" "}
                {cart.length < 1 ? (
                  cart.length
                ) : (
                  <span className="bg-black rounded-full text-white px-2 py-1">
                    {cart.length}
                  </span>
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Main menu */}
      <div className="flex w-full justify-center items-center">
        <ul className="relative flex gap-10 mb-3 md-max:hidden">
          <li>
            <Link to={"/newarrivals"}>
              <button>New Arrivals!</button>
            </Link>
          </li>
          <li className="relative group">
            <Link to={"/accessories"}>
              <button className="flex items-center">
                Accessories <FaChevronDown className="text-xs ml-1" />
              </button>
            </Link>
            <ul className="hidden group-hover:flex flex-col border border-white w-max absolute z-10 bg-[#3586ff] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out shadow-lg">
              <Link to={"/handles-ropes"}>
                <li className="px-6 py-3 hover:bg-blue-300 transition-colors duration-300 ease-in-out">
                  <button>Handle/Rope</button>
                </li>
              </Link>
              <Link to={"/boots"}>
                <li className="px-6 py-3 hover:bg-blue-300 transition-colors duration-300 ease-in-out">
                  <button>Boots</button>
                </li>
              </Link>
            </ul>
          </li>
          <li className="relative group">
            <Link to={"/boards"}>
              <button className="flex items-center">
                Boards <FaChevronDown className="text-xs ml-1" />
              </button>
            </Link>
            <ul className="hidden group-hover:flex flex-col border border-white w-max absolute z-10 bg-[#3586ff] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out shadow-lg">
              <Link to={"/wakesurfs"}>
                <li className="px-6 py-3 hover:bg-blue-300 transition-colors duration-300 ease-in-out">
                  <button>WakeSurfs</button>
                </li>
              </Link>
              <Link to={"/wakeboards"}>
                <li className="px-6 py-3 hover:bg-blue-300 transition-colors duration-300 ease-in-out">
                  <button>WakeBoards</button>
                </li>
              </Link>
              <Link to={"/kneeboards"}>
                <li className="px-6 py-3 hover:bg-blue-300 transition-colors duration-300 ease-in-out">
                  <button>KneeBoards</button>
                </li>
              </Link>
            </ul>
          </li>
          <li>
            <Link to={"/galerie"}>
              <button>Galerie</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full bg-gray-600 h-[1px]" />

      {/* Dark Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Side Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white transform z-9999 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col text-black p-5 text-xl">
          <button onClick={toggleMenu} className="self-end mb-5">
            <AiOutlineCloseCircle className="text-xl" />
          </button>
          <ul>
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link to={"/"} className="flex justify-between items-center">
                <button onClick={toggleMenu}>Homepage</button>
                <MdKeyboardArrowRight className="ml-2" />
              </Link>
            </li>
            <div className="flex flex-col h-[2px] w-full bg-slate-100 mb-2" />
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link
                to={"/newarrivals"}
                className="flex justify-between items-center"
              >
                <button onClick={toggleMenu}>New Arrivals!</button>
                <MdKeyboardArrowRight className="ml-2" />
              </Link>
            </li>
            <div className="flex flex-col h-[2px] w-full bg-slate-100 mb-2" />
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link
                to={"/accessories"}
                className="flex justify-between items-center"
              >
                <button onClick={toggleMenu}>Accessories</button>
                <MdKeyboardArrowRight className="ml-2" />
              </Link>
            </li>
            <div className="flex flex-col h-[3px] w-full bg-slate-100 mb-2" />
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link
                to={"/boards"}
                className="flex justify-between items-center"
              >
                <button onClick={toggleMenu}>Boards</button>
                <MdKeyboardArrowRight className="ml-2" />
              </Link>
            </li>
            <div className="flex flex-col h-[2px] w-full bg-slate-100 mb-2" />
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link
                to={"/galerie"}
                className="flex justify-between items-center"
              >
                <button onClick={toggleMenu}>Galerie</button>
                <MdKeyboardArrowRight className="ml-2" />{" "}
              </Link>
            </li>
            <div className="flex flex-col h-[2px] w-full bg-slate-100 mb-2" />
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link
                to={"/handles-ropes"}
                className="flex justify-between items-center"
              >
                <button onClick={toggleMenu}>Handle/Ropes</button>
                <MdKeyboardArrowRight className="ml-2" />
              </Link>
            </li>
            <div className="flex flex-col h-[2px] w-full bg-slate-100 mb-2" />
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link to={"/boots"} className="flex justify-between items-center">
                <button onClick={toggleMenu}>Boots</button>
                <MdKeyboardArrowRight className="ml-2" />
              </Link>
            </li>
            <div className="flex flex-col h-[2px] w-full bg-slate-100 mb-2" />
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link
                to={"/wakesurfs"}
                className="flex justify-between items-center"
              >
                <button onClick={toggleMenu}>WakeSurfs</button>
                <MdKeyboardArrowRight className="ml-2" />
              </Link>
            </li>
            <div className="flex flex-col h-[2px] w-full bg-slate-100 mb-2" />
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link
                to={"/kneeboards"}
                className="flex justify-between items-center"
              >
                <button onClick={toggleMenu}>Kneeboards</button>
                <MdKeyboardArrowRight className="ml-2" />
              </Link>
            </li>
            <div className="flex flex-col h-[2px] w-full bg-slate-100 mb-2" />
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link
                to={"/wakeboards"}
                className="flex justify-between items-center"
              >
                <button onClick={toggleMenu}>Wakeboards</button>
                <MdKeyboardArrowRight className="ml-2" />
              </Link>
            </li>
            <div className="flex flex-col h-[2px] w-full bg-slate-100 mb-2" />
            <li className="mb-3 hover:opacity-70 duration-300">
              <Link to={"/sale"} className="flex justify-between items-center">
                <button onClick={toggleMenu}>Sale</button>
                <MdKeyboardArrowRight className="ml-2" />
              </Link>
            </li>
            <div className="flex flex-col h-[2px] w-full bg-slate-100 mb-2" />
          </ul>
          <div className="flex justify-between items-center mt-10 px-10">
            <FaInstagram className="cursor-pointer hover:opacity-50 transition-all duration-300" />
            <FaTiktok className="cursor-pointer hover:opacity-50 duration-300" />
            <FaFacebook className="cursor-pointer hover:opacity-50 duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
