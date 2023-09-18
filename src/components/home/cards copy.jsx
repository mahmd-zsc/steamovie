import React, { useState } from "react";
import { useAuth } from "../context";
import { Link } from "react-router-dom";
import play from "../images/play-button.png";
import Pagination from "./pagination ";
import { useSelector, useDispatch } from "react-redux";
function Cards() {
  let selector = useSelector((state) => state.playNow);
  return (
    <div>
      {!selector.loading && (
        <div className=" sm:px-0 flex flex-col items-center min-h-[200px]   px-14 pb-10 ">
          <div className="cards grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 container sm:gap-6 gap-10  pb-20 ">
            {selector.data.map((c) => (
              <div
                key={c.id}
                className=" big-card relative rounded-lg overflow-hidden   duration-500 hover:z-10  "
                id={c.id}
              >
                <Link className="card relative" to={`/${c.id}`}>
                  <img
                    className="bg-mainBlue opacity-80 hover:opacity-100 duration-500"
                    src={`https://image.tmdb.org/t/p/original/${c.poster_path}`}
                    alt=""
                    loading="lazy"
                  />
                  {/* <div className=" box-card absolute bottom-0 w-full h-1/4 bg-gray-200 shadow-lg shadow-black opacity-100 duration-500 px-4 py-2 flex flex-col justify-between hidden      ">
                    <div className="flex items-center   justify-between w-full">
                      <h4 className=" font-bold lg:text-md text-sm">
                        {c.title.substring(0, 20)}
                      </h4>
                      <p className=" font-bold text-sm">
                        <span className=" text-mainRed ">{c.vote_average}</span>
                        /10
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <p className=" text-sm font-sans">{c.release_date}</p>
                      <img className="w-10 h-10" src={play} alt="" />
                    </div>
                  </div> */}
                </Link>
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      )}
    </div>
  );
}

export default Cards;
