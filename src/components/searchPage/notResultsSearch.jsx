import React from "react";
import img from "../images/spong.gif";
import img1 from "../images/XOsX.gif";
function NotResultsSearch() {
  return (
    <div className=" flex h-screen flex-col justify-center items-center text-center">
      <p className=" text-white  font-bold capitalize text-xl ">
        Hmmm, we're not getting any results. our bad - try another search
      </p>
      <img src={img1} alt="" />
    </div>
  );
}

export default NotResultsSearch;
