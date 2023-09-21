import React from "react";
import { useSelector } from "react-redux";

function Landing() {
  let selector = useSelector((state) => state.movie);
  return (
    <div className=" flex flex-col items-center overflow-hidden mt-40 z-30 ">
      <img
        className=" w-[50%] lg:w-60 border-4 border-white  duration-500 shadow-lg hover:shadow-black"
        src={`https://image.tmdb.org/t/p/original/${selector.data.poster_path}`}
        alt=""
      />
      <p className="text-white mt-2 text-xs ">
        {selector.data.release_date} | {selector.data.status}
      </p>
    </div>
  );
}

export default Landing;
