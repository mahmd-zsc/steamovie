import React from "react";
import plus from "../images/empty.png";
import { Link } from "react-router-dom";
function Empty() {
  return (
    <div className=" flex flex-col justify-start items-center text-center  gap-4 ">
      <img className=" opacity-40 w-1/4" src={plus} alt="" />
      <div>
        <h3 className=" text-lg text-gray-100 font-bold">
          Your Watchlist is empty
        </h3>
        <p className="text-gray-400">
          Add movies and shows to your Watchlist to keep track of what you want
          to watch.
        </p>
        <Link to="/" className=" text-mainRed hover:opacity-50 duration-300 ">
          Browse Popular Movies
        </Link>
      </div>
    </div>
  );
}

export default Empty;
