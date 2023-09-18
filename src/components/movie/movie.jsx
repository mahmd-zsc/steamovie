import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./error";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchMovie } from "../redux/movie/movieAction";
import Info from "./info";

function Movie() {
  let params = +useParams().movieId;
  let selector = useSelector((state) => state.movie);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovie(params));
  }, []);
  if (!selector.loading) {
    console.log(selector);
  }
  return (
    !selector.loading &&
    (selector.data ? (
      <div className=" relative -top-20  ">
        <div className=" overflow-hidden" >
          <div className=" relative container z-10 flex flex-col lg:flex-row items-center justify-center w-full h-full gap-4 lg:gap-20 ">
            <div className=" flex flex-col items-center overflow-hidden mt-40 ">
              <img
                className=" w-[50%] lg:w-60 border-4 border-white  duration-500 shadow-lg hover:shadow-black"
                src={`https://image.tmdb.org/t/p/original/${selector.data.poster_path}`}
                alt=""
              />
              <p className="text-white mt-2 text-xs ">
                {selector.data.release_date} | {selector.data.status}
              </p>
            </div>

            <Info />
          </div>
          <img
            className=" absolute top-0 h-full w-full "
            src={`https://image.tmdb.org/t/p/original/${
              selector.data.belongs_to_collection &&
              selector.data.belongs_to_collection.backdrop_path
                ? selector.data.belongs_to_collection.backdrop_path
                : selector.data.backdrop_path
            }`}
            alt=""
          />
          <div className="overflow absolute w-full h-full bg-black top-0 opacity-30 "></div>
        </div>
      </div>
    ) : null)
  );
}

export default Movie;
