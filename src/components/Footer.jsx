import React from "react";
import "../animations/animation.css";
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="top-[15rem]">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="flex justify-between text-white w-[80%] sm-max:grid sm-max:grid-cols-2 sm-max:gap-x-4 sm-max:gap-y-8 sm-max:w-full">
        <div className="flex flex-col">
          <h1 className="mb-3">HELP & SUPPORT</h1>
          <p>Terms Of Services</p>
          <p>Contact Us</p>
          <p>Shipping</p>
          <p>About Us</p>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-3">Let's get Social!</h1>
          <div className="flex gap-4">
            <FaInstagram className="cursor-pointer hover:opacity-50" />
            <FaTwitter className="cursor-pointer hover:opacity-50" />
            <FaTiktok className="cursor-pointer hover:opacity-50" />
            <FaFacebook className="cursor-pointer hover:opacity-50" />
          </div>
        </div>
        <div className="flex flex-col">
          <Link to={"/newarrivals"}>
            <h1 className="mb-3 cursor-pointer hover:opacity-50">
              NEW ARRIVALS!
            </h1>
          </Link>
          <Link to={"/boards"}>
            <p className="cursor-pointer hover:opacity-50">Boards</p>
          </Link>
          <Link to={"/accessories"}>
            <p className="cursor-pointer hover:opacity-50">Accessories</p>
          </Link>
          <Link to={"/boots"}>
            <p className="cursor-pointer hover:opacity-50">Boots</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
