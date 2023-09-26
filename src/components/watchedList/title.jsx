import React from "react";
import { useSelector } from "react-redux";

function Title() {
  let watchedList = useSelector((state) => state.watchedList);

  return (
    <div className="text-white mt-10 mb-6">
      <h2 className="  font-bold text-3xl mb-2 capitalize">Your Watchlist</h2>

      <h4 className=" font-bold text-lg text-gray-300 ">
        <span className="text-md text-mainRed">{watchedList.data.length}</span> Titles
      </h4>
    </div>
  );
}

export default Title;
