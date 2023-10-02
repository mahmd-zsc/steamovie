import React, { useEffect, useRef } from "react";
import searchImg from "../images/search.png";

function SmallSearch({ handleSubmit, changeText, text }) {
  const search = useRef(null);
  const searchBar = useRef(null);

  const handleSearch = () => {
    searchBar.current.classList.toggle("hidden");
  };
  useEffect(() => {
    const handleSearchBar = (e) => {
      if (
        !search.current.contains(e.target) &&
        !searchBar.current.contains(e.target)
      ) {
        searchBar.current.classList.add("hidden");
      }
    };

    window.addEventListener("click", handleSearchBar);

    return () => {
      window.removeEventListener("click", handleSearchBar);
    };
  }, []);
  return (
    <div>
      {" "}
      <img
        onClick={handleSearch}
        ref={search}
        className="w-12 sm:hidden"
        src={searchImg}
        alt=""
      />
      <div
        ref={searchBar}
        className="w-full h-20 bg-mainRed absolute -top-1 left-0 rounded-s-lg rounded-e-lg z-50 sm:hidden hidden animate__animated animate__fadeInDown"
      >
        <div className=" relative w-full h-full  flex  items-center justify-center">
          <form className="w-[80%]" onSubmit={handleSubmit} action="#">
            <input
              className="  text-black w-full  bg-white bg-transparent border outline-none border-gray-400 rounded-lg px-4 py-2"
              type="search"
              name=""
              id=""
              placeholder="Search for a movie"
              value={text}
              onChange={(e) => changeText(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SmallSearch;
