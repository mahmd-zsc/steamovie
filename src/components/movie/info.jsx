import React from "react";
import { useSelector } from "react-redux";
import Genres from "./genres";
import Imdb from "./imdb";
import Languages from "./languages";
import Bottom from "./buttom";
import Companies from "./companies";

function Info() {
  let selector = useSelector((state) => state.movie);

  return (
    <div className="text-white flex-1 flex flex-col lg:mt-40  items-center md:items-start mb-20 z-30 ">
      <h1 className=" md:text-4xl lg:text-6xl font-bold">{selector.data.title}</h1>
      <h5 className=" text-mainRed  lg:text-xl font-bold">
        {selector.data.tagline}
      </h5>
      <Genres />
      <p className="overview text-sm lg:text-md text-center md:text-start">{selector.data.overview}</p>
      <Imdb />
      <Languages />
      <Bottom />
      <Companies /> 
    </div>
  );
}

export default Info;
