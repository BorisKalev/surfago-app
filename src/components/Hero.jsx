import { LiaShippingFastSolid } from "react-icons/lia";
import { IoPricetagOutline } from "react-icons/io5";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import surfbeach from "../assets/surf-beach.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="relative">
        <img
          src={surfbeach}
          alt="surf beach"
          className="w-full h-[650px] object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute inset-[10rem] text-center md-max:inset-[1rem] md-max:mt-[5rem]">
          <h1 className="font-poppins text-4xl text-white font-bold">
            The Biggest & Most Popular Surf Store In The World
          </h1>
          <h1 className="font-thin text-white text-3xl mt-[5rem] sm-max:mt-0">
            Summer Sale
          </h1>
          <p className="font-thin text-white text-xl mt-[2rem]">
            up to 50% OFF selected items in our BIG Summer Sale.
          </p>
          <Link to={"/sale"}>
            <button className="text-xl mt-[2rem] font-thin bg-black p-3 rounded-md bg-gradient-custom-blue hover:text-white transition-all duration-300">
              Shop SALE
            </button>
          </Link>
        </div>
      </div>

      <div className="relative flex justify-between mt-10 text-center items-center px-[10rem] lg-max:grid lg-max:grid-cols-2 lg-max:gap-[2rem] sm-max:grid-cols-1 sm-max:px-[2rem] sm-max:gap-[1rem]">
        <div className="flex justify-center flex-col">
          <LiaShippingFastSolid className="m-auto" />
          <h1 className="font-bold mt-3">Quick Shipping</h1>
          <p className="text-sm text-gray-600">Orders dispatched in 1-2 days</p>
        </div>
        <div className="flex justify-center flex-col">
          <IoPricetagOutline className="m-auto" />
          <h1 className="font-bold mt-3">10% OFF First Order</h1>
          <p className="text-sm text-gray-600">Code: WELCOME10</p>
        </div>
        <div className="flex justify-center flex-col lg-max:mt-[2rem]">
          <IoReturnDownBackSharp className="m-auto" />
          <h1 className="font-bold mt-3">Easy Returns</h1>
          <p className="text-sm text-gray-600">Change your mind? No problem!</p>
        </div>
        <div className="flex justify-center flex-col lg-max:mt-[2rem]">
          <CiStar className="m-auto" />
          <h1 className="font-bold mt-3">5.0 Reviews</h1>
          <p className="text-sm text-gray-600">over 1000 5-star reviews</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
