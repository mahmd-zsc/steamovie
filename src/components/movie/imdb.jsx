import React from "react";
import imdb from "../images/imdb.png";
import star from "../images/star.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Imdb() {
  let selector = useSelector((state) => state.movie.data);
  let languages = selector.production_countries.map((n) => n.iso_3166_1).join(" / ").toUpperCase() ;
  return (
    <div className="flex items-center gap-2 lg:text-md text-sm">
      <a
        target="_blank"
        href={`https://www.imdb.com/title/${selector.imdb_id}`}
      >
        <img className=" w-16" src={imdb} alt="" />
      </a>
      <img className=" w-4" src={star} alt="" />
      <p>
        {String(selector.vote_average).slice(0, 3)}/10 ({selector.vote_count})
      </p>
      |<p>{languages}</p>
    </div>
  );
}

export default Imdb;
