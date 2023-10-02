import React from "react";
import { useSelector } from "react-redux";

function Genres() {
  let genres = useSelector((state) => state.movie.data.genres);

  return (
    <div className=" genres flex  items-center gap-1 my-4">
      {genres.map((g, index) => (
        <div
          key={index}
          className=" border-mainRed border rounded-full px-2 py-1 hover:text-white text-gray-300 duration-300"
        >
          <p className=" ">{g.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Genres;
