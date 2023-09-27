import React from "react";
import img from "../images/spong.gif";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className=" flex justify-center items-center flex-col gap-10">
      <img src={img} alt="" />
      <div className=" text-white text-center capitalize ">
        <h4 className="text-6xl mb-4">error 404</h4>
        <p>not found</p>
        <Link to="/">
          <p className=" text-mainRed hover:text-darkRed duration-300 text-lg">
            back to home
          </p>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
