import React from "react";

function Tittle() {
  return (
    <div className=" my-6">
      <p className="text-white text-lg ">steaMovie Charts</p>
      <div className=" flex h-full relative">
        <div className="line w-1 h-full bg-mainRed absolute"></div>
        <h3 className=" text-mainRed text-lg font-bold ps-3     ">
          stea<span className="text-white  text-2xl font-bold  ">M</span>ovie
          <span className="text-white text-md "> Top 250 Movies</span>
        </h3>
      </div>
      <p className="text-gray-400 text-sm mt-2">
        steaMovie Top 250 as rated by regular steaMovie voters
      </p>
    </div>
  );
}

export default Tittle;
