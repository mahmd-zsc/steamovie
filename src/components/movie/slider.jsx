import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
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
  }
  return (
    !loading && (
      <motion.div className="carousel container">
        <motion.div className="inner-carousel flex   ">
          {movies
            .filter((r) => r.poster_path)
            .map((m) => (
              <motion.div className="item  " key={m.id}>
                <img
                  className="  "
                  src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                  alt={`movie_${m.id}`}
                />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    )
  );
}

export default Slider;
