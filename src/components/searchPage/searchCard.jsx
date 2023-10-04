import React from "react";
import { Link } from "react-router-dom";

function SearchCard({ data }) {
  let date = data.release_date.split("-")[0];
  return (
    <>
      <div className="flex relative items-center justify-between bg-mainBlue py-1 ">
        <div className=" flex items-center gap-2 ">
          <Link to={"/" + data.id}>
            <img
              className=" w-20 shadow-md min-h-[120px] hover:shadow-black border border-lightBlue duration-200 rounded-sm"
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt=""
            />
          </Link>
          <div className="flex flex-col gap-1">
            <Link to={"/" + data.id}>
              <p className="text-white cursor-pointer hover:text-gray-400 duration-200">
                {data.title}
              </p>
            </Link>
            <p className="text-white text-sm opacity-50 ">{date}</p>
            <p className=" text-gray-400 text-sm ">
              {data.overview.substring(0, 60)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchCard;
