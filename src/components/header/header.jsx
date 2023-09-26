import React, { useEffect, useState } from "react";
import Nav from "./nav";
import avatar from "../images/Ellipse.png";
import Search from "./search";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  fetchData,
  playNowFetchData,
} from "../redux/playNow/playAction";
import { fetchToRateMovies } from "../redux/topMovie/toRateAction";
import { fetchToRateTV } from "../redux/topTV/topTVRateAction";
import { fetchWatchedList } from "../redux/watchedList/watchedListAction";
import { Link } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.playNow);
  const watchedList = useSelector((state) => state.watchedList);

  useEffect(() => {
    dispatch(playNowFetchData(selector.page));
    dispatch(fetchToRateMovies(1));
    dispatch(fetchToRateTV(1));
  }, []);
  useEffect(() => {
    dispatch(fetchWatchedList(watchedList.ids));
  }, [watchedList.ids]);
  let playNow = useSelector((state) => state.playNow);
  useEffect(() => {
    dispatch(playNowFetchData(playNow.page));
  }, [selector.page]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [selector.page]);

  return (
    <header className="header container relative  flex w-full  lg:justify-between items-center z-30 py-4 ">
      <Link to="/">
        <h1 className=" text-mainRed text-lg font-bold flex-1  lg:flex-none   ">
          stea<span className="text-white  text-xl font-bold  ">M</span>ovie
        </h1>
      </Link>

      <Nav />
      <div className="flex items-center gap-2 ">
        <Search />
        <img className="w-8 h-8 hidden lg:block" src={avatar} alt="" />
      </div>
    </header>
  );
}

export default Header;
