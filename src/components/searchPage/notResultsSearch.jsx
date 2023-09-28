import React from "react";
import img from "../images/spong.gif";
import img1 from "../images/XOsX.gif";
function NotResultsSearch() {
  return (
    <div className=" flex flex-col justify-center items-center text-center">
      <p className=" text-white mt-20 font-bold capitalize text-xl ">
        Hmmm, we're not getting any results. our bad - try another search
      </p>
      <img src={img1} alt="" />
    </div>
  );
}

export default NotResultsSearch;
