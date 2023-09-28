import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import play from "../images/play-button.png";
import Pagination from "./pagination ";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "../redux/movie/movieAction";
// import { Blurhash } from "react-blurhash"; // Import Blurhash component
function Cards() {
  let selector = useSelector((state) => state.playNow);
  let [imageLoaded, setImageLoaded] = useState(false);
  let dispatch = useDispatch();

  let handleMovie = (id) => {
    dispatch(fetchMovie(id));
  };

  return (
    <div>
      {!selector.loading && (
        <div className="sm:px-0 flex flex-col items-center min-h-[200px] px-14 pb-10 mt-10">
          <div className="cards grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 container sm:gap-6 gap-10 pb-20">
            {selector.data.map((c) => (
              <div
                key={c.id}
                className="big-card relative rounded-lg overflow-hidden bg-darkBlue duration-500 hover:z-10"
                id={c.id}
              >
                <Link
                  onClick={() => handleMovie(c.id)}
                  className="card relative"
                  to={`/${c.id}`}
                >
                  {/* Use Blurhash for lazy loading */}

                  <img
                    className="bg-mainBlue opacity-80 hover:opacity-100 duration-500"
                    src={`https://image.tmdb.org/t/p/original/${c.poster_path}`}
                    alt=""
                  />
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
