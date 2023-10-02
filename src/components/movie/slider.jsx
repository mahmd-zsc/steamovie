import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Slider() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  let selector = useSelector((state) => state.movie.data);
  let first_title = selector.title.split(" ")[0];
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${selector.id}/similar?api_key=d633895f69a73e6f50752b9876aaea53`
      )
      .then((res) => {
        setLoading(false);
        setMovies(res.data.results);
      });
  }, []);
  if (!loading) {
    console.log(movies);
  }
  return (
    !loading && (
      <div className=" ">
        <div className="cards grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 container sm:gap-6 gap-10 pb-20">
          {movies
            .filter((f) => f.poster_path)
            .map((c) => (
              <div
                key={c.id}
                className="big-card relative rounded-lg overflow-hidden bg-darkBlue duration-500 hover:z-10"
                id={c.id}
              >
                <Link
                  // onClick={() => handleMovie(c.id)}
                  className="card relative"
                  to={`/${c.id}`}
                >
                  <img
                    className="bg-mainBlue opacity-80 hover:opacity-100 duration-500"
                    src={`https://image.tmdb.org/t/p/original/${c.poster_path}`}
                    alt=""
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    )
  );
}

export default Slider;
