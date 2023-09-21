import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./error";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchMovie } from "../redux/movie/movieAction";
import Info from "./info";
import Landing from "./landing";
import Companies from "./companies";
import Slider from "./slider";

function Movie() {
  let params = +useParams()?.movieId;
  let selector = useSelector((state) => state.movie);
  let dispatch = useDispatch();

  useEffect(() => {
    if (params) {
      dispatch(fetchMovie(params));
    }
  }, [params]);

  if (!selector.loading) {
    console.log(selector);
  }

  return (
    !selector.loading &&
    (selector.data ? (
      <div className="relative -top-20">
        <div
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${
              selector.data.belongs_to_collection &&
              selector.data.belongs_to_collection.backdrop_path
                ? selector.data.belongs_to_collection.backdrop_path
                : selector.data.backdrop_path
            }")`,
          }}
          className="landing-movie"
        >
          <div className="relative  container z-20 flex flex-col lg:flex-row items-center justify-center w-full h-full gap-4 lg:gap-20 ">
            <Landing />
            <Info />
            <div className="overflow absolute w-full h-full bg-black top-0 opacity-30"></div>
          </div>
        </div>
        <Slider />
      </div>
    ) : null)
  );
}

export default Movie;
