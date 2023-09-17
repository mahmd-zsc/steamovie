import React from "react";
import add from "../images/add.png";
import { useNavigate } from "react-router-dom";
function Buttom({ id }) {
  let Navigate = useNavigate();
  let toMovie = () => {
    Navigate(`/${id}`);
  };
  return (
    <div className=" flex gap-5 font-bold text-lg   ">
      <button
        onClick={toMovie}
        className=" lg:w-48 lg:h-16 md:w-40 md:h-14 bg-mainRed hover:bg-darkRed duration-500 text-white rounded-full capitalize px-4 py-2   "
      >
        view
      </button>
      <button className=" lg:w-48 lg:h-16 md:w-40 md:h-14 bg-white rounded-full capitalize flex justify-center items-center gap-4 px-4 py-2 ">
        <img className="w-3 h-3" src={add} alt="" /> <p>add list</p>
      </button>
    </div>
  );
}

export default Buttom;
