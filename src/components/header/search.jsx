import React, { useEffect, useRef, useState } from "react";
import searchImg from "../images/search.png";
import "animate.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import { useDispatch } from "react-redux";
import { changePage } from "../redux/playNow/playAction";
import glassImg from "../images/magnifying-glass.png";

function Search() {
  const navigate = useNavigate();
  const data = useAuth();
  const search = useRef(null);
  const searchMenu = useRef(null);
  const form = useRef(null);
  const searchBar = useRef(null);
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  // Toggle the search bar visibility
  const handleSearch = () => {
    searchBar.current.classList.toggle("hidden");
  };

  // Close the search menu when clicking outside
  useEffect(() => {
    const handleSearchBar = (e) => {
      if (
        !search.current.contains(e.target) &&
        !searchBar.current.contains(e.target)
      ) {
        searchBar.current.classList.add("hidden");
      } else if (!form.current.contains(e.target)) {
        setOpen(false);
        console.log(open);
      }
    };

    window.addEventListener("click", handleSearchBar);

    return () => {
      window.removeEventListener("click", handleSearchBar);
    };
  }, []);

  // Close the search menu when submitting the form
  useEffect(() => {
    const handleFormSubmit = (e) => {
      if (!form.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleFormSubmit);

    return () => {
      window.removeEventListener("click", handleFormSubmit);
    };
  }, []);

  // Fetch movie data from API when the text changes
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d633895f69a73e6f50752b9876aaea53&query=${text}`
      )
      .then((res) => {
        setLoading(false);
        setMovies(res.data.results);
      });
  }, [text]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      data.changeSearch(movies);
      navigate("/searchPage");
    }
  };

  return (
    <>
      <div className="w-60 relative">
        <form
          ref={form}
          className={`relative ${open ? "block" : "hidden"} sm:block`}
          onSubmit={handleSubmit}
          action="#"
        >
          <img
            className="absolute w-6 top-1/2 -translate-y-1/2 left-2"
            src={glassImg}
            alt=""
          />
          <input
            onFocus={() => setOpen(true)}
            className="h-8 bg-white focus:border-mainRed duration-500 rounded-full px-4 z-40 text-gray-500 outline-none ps-8"
            type="search"
            name=""
            id=""
            placeholder="Search for a movie"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </form>

        {movies.length > 0 && (
          <div
            className={`w-full absolute bg-white rounded-lg top-10 ${
              open ? "block" : "hidden"
            } sm:block shadow-md shadow-black animate__animated animate__fadeIn`}
          >
            <ul
              ref={searchMenu}
              className="search max-h-80 overflow-y-scroll py-4 flex flex-col gap-1"
            >
              {movies.slice(0, 10).map((movie) => (
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

      <img
        onClick={handleSearch}
        ref={search}
        className="w-12 sm:hidden"
        src={searchImg}
        alt=""
      />

      <div
        ref={searchBar}
        className="w-full h-60 bg-mainRed absolute left-0 rounded-s-lg rounded-e-lg z-50 sm:hidden hidden animate__animated animate__fadeInDown"
      >
        <input
          className="w-[80%] h-10 absolute top-1/2 left-1/2 -translate-x-1/2 text-black bg-white bg-transparent border outline-none border-gray-400 rounded-lg px-4"
          type="search"
          name=""
          id=""
          placeholder="Search for a movie"
        />
      </div>
    </>
  );
}

export default Search;
