import React, { useEffect, useRef, useState } from "react";
import searchImg from "../images/search.png";
import "animate.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/playNow/playAction";
import glassImg from "../images/magnifying-glass.png";
import {
  changeSearchFinalText,
  changeSearchText,
  fetchSearchMovie,
} from "../redux/search/searchAction";
import SmallSearch from "./smallSearch";

function Search() {
  const navigate = useNavigate();
  const searchMenu = useRef(null);
  const form = useRef(null);
  const inputSearch = useRef(null);
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(true);
  let [open, setOpen] = useState(false);

  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      setOpen(false);
      dispatch(changeSearchFinalText(text));
      navigate("/searchPage/" + text);
    }
  };
  let changeText = (value) => {
    setText(value);
  };

  useEffect(() => {
    dispatch(changeSearchText(text));
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d633895f69a73e6f50752b9876aaea53&query=${text}`
      )
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      });
  }, [text]);
  useEffect(() => {
    const handleSearchBar = (e) => {
      if (movies.results && movies.results.length > 0 && open) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("click", handleSearchBar);

    return () => {
      window.removeEventListener("click", handleSearchBar);
    };
  }, [movies.results, open]);

  return (
    <>
      <div className="w-60 relative">
        <form
          onFocus={() => setOpen(true)}
          ref={form}
          className={`relative hidden  sm:block`}
          onSubmit={handleSubmit}
          action="#"
        >
          <img
            className="absolute w-6 top-1/2 -translate-y-1/2 left-2"
            src={glassImg}
            alt=""
          />
          <input
            ref={inputSearch}
            className="h-8 bg-white focus:border-mainRed duration-500  rounded-full px-4 z-40 text-gray-500 outline-none ps-8"
            type="search"
            name=""
            id=""
            placeholder="Search for a movie"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </form>
        {!loading && movies.results.length > 0 && open && (
          <div
            className={`w-full absolute    bg-white rounded-lg top-10   sm:block shadow-md shadow-black animate__animated animate__fadeIn`}
          >
            <ul
              ref={searchMenu}
              className={`search  max-h-80 overflow-y-scroll py-4  flex-col gap-1 `}
            >
              {movies.results.slice(0, 20).map((movie) => (
                <li className="hover:bg-gray-100 duration-500" key={movie.id}>
                  <Link
                    onClick={() => setOpen(false)}
                    className="block text-gray-500 ps-2 py-1"
                    to={`/${movie.id}`}
                  >
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <SmallSearch
        handleSubmit={handleSubmit} // Pass the handleSubmit function as a prop
        changeText={changeText}
        text={text}
      />
    </>
  );
}

export default Search;
