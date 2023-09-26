import React from "react";
import { Link } from "react-router-dom";
import star from "../images/star.png";
import plus from "../images/plus-white.png";
import Bottom from "./bottom";
function TopCard({ data, number }) {
  let date = data.release_date.split("-")[0];
  return (
    <>
      <div className="flex relative items-center justify-between bg-mainBlue py-1">
        <div className=" flex items-center gap-2 ">
          <Link to={"/" + data.id}>
            <img
              className=" w-20 shadow-md min-h-40 hover:shadow-black border border-lightBlue duration-300 rounded-sm"
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt=""
            />
          </Link>
          <div className="flex flex-col gap-1">
            <Link to={"/" + data.id}>
              <p className="text-white cursor-pointer hover:text-gray-400 duration-200">
                {number + 1}. {data.title}
              </p>
            </Link>
            <p className="text-white text-sm opacity-50 ">{date}</p>
            <div className="flex items-center gap-1">
              <img className="w-3" src={star} alt="" />
              <p className=" text-sm text-white opacity-50">
                {data.vote_average}{" "}
                <span className="text-xs">({data.vote_count})</span>
              </p>
            </div>
          </div>
        </div>
        <Bottom id={data.id} />
      </div>
    </>
  );
}

export default TopCard;
