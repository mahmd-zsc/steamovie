import React, { useEffect, useRef, useState } from "react";
import searchImg from "../images/search.png";
import "animate.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import { useDispatch } from "react-redux";
import { changePage } from "../redux/playNow/playAction";
function Search() {
  let navigate = useNavigate();
  let data = useAuth();
  let search = useRef();
  let searchMenu = useRef();
  let searchBar = useRef();
  let [text, setText] = useState("");
  let [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(true);
  let [open, setOpen] = useState(false);
  let handleSearch = () => {
    searchBar.current.classList.toggle("hidden");
  };

  useEffect(() => {
    let handleSearchBar = window.addEventListener("click", (e) => {
      if (
        search.current &&
        searchBar.current &&
        !search.current.contains(e.target) &&
        !searchBar.current.contains(e.target)
      ) {
        searchBar.current.classList.add("hidden");
      }
    });

    return () => {
      window.removeEventListener("click", handleSearchBar);
    };
  }, []);

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
  let handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      data.changeSearch(movies);
      navigate("/searchPage");
    }
  };
  return (
    <>
      <div className=" w-60 relative ">
        <form onSubmit={(e) => handleSubmit(e)} action="#">
          <input
            onFocus={() => setOpen(true)}
            // onBlur={() => setOpen(false)}
            className="w-full  h-10   bg-transparent border border-gray-400 focus:border-mainRed duration-500 rounded-lg  px-4 z-40 text-white outline-none hidden sm:block flex-1   "
            type="search"
            name=""
            id=""
            placeholder="search for movie"
            onChange={(t) => setText(t.target.value)}
            value={text}
          />
        </form>

        {movies.length > 0 && (
          <div
            className={` w-full absolute   bg-gray-800  rounded-lg border border-mainRed ${
              open ? "block" : "hidden"
            } `}
          >
            <ul
              ref={searchMenu}
              className=" search max-h-80 overflow-y-scroll  py-4 flex flex-col gap-1"
            >
              {movies.slice(0, 10).map((t) => (
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    className=" block text-white hover:bg-mainRed pl-2 py-4"
                    to={`/${t.id}`}
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* -------------------------------------------------------------------- */}
      <img
        onClick={handleSearch}
        ref={search}
        className=" w-12 sm:hidden"
        src={searchImg}
        alt=""
      />

      <div
        ref={searchBar}
        className="w-full h-60 bg-mainRed absolute left-0 rounded-s-lg rounded-e-lg z-50 sm:hidden hidden animate__animated animate__fadeInDown"
      >
        <input
          className=" w-[80%] h-10  absolute top-1/2 left-1/2 -translate-x-1/2 text-black bg-white bg-transparent border outline-none   border-gray-400  rounded-lg px-4 "
          type="search"
          name=""
          id=""
          placeholder="search for movie"
        />
      </div>
    </>
  );
}

export default Search;
