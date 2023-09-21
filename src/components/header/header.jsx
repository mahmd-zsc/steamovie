import React, { useEffect, useState } from "react";
import Nav from "./nav";
import avatar from "../images/Ellipse.png";
import Search from "./search";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changePage, fetchData } from "../redux/playNow/playAction";
import { fetchToRateMovies } from "../redux/topRate/toRateAction";
function Header() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.playNow);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [selector.page]);


  return (
    <div className="header container relative  flex w-full  lg:justify-between items-center z-30 py-4 ">
      <h1 className=" text-mainRed text-lg font-bold flex-1  lg:flex-none   ">
        stea<span className="text-white  text-xl font-bold  ">M</span>ovie
      </h1>
      <Nav />
      <div className="flex items-center gap-2 ">
        <Search />
        <img className="w-8 h-8 hidden lg:block" src={avatar} alt="" />
      </div>
    </div>
  );
}

export default Header;
