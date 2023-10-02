import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Title from "./title";
import SearchLoading from "./searchLoading";
import SearchCard from "./searchCard";
import NotResultsSearch from "./notResultsSearch";
import {
  changeSearchFinalText,
  changeSearchText,
  fetchSearchMovie,
} from "../redux/search/searchAction";
function SearchPage() {
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(start + 20);
  let selector = useSelector((state) => state.search);
  let dispatch = useDispatch();
  let handleMoreMoviesSearch = () => {
    setEnd(end + 20);
  };
  useEffect(() => {
    dispatch(fetchSearchMovie(selector.finalText));
    console.log(selector.finalText);
  }, []);
  return (
    <div className=" container py-10">
      {!selector.loading &&
        (selector.data.length > 0 ? (
          <>
            <Title />
            <div className=" search-Cards w-full border border-lightBlue bg-mainBlue rounded-md flex justify-center items-center mt-10 py-4   ">
              <div className=" w-[90%] grid gap-6   ">
                <div className="bg-lightBlue grid grid-cols-1 gap-px">
                  {selector.data
                    .filter((f) => f.poster_path)
                    .slice(start, end)
                    .map((s) => (
                      <SearchCard key={s.id} data={s} />
                    ))}
                </div>
                {selector.data.length > end && (
                  <p
                    onClick={handleMoreMoviesSearch}
                    className=" bg-transparent text-mainRed font-bold  cursor-pointer     "
                  >
                    More popular matches
                  </p>
                )}
              </div>
            </div>
          </>
        ) : (
          <NotResultsSearch />
        ))}
      {selector.loading && <SearchLoading />}
    </div>
  );
}

export default SearchPage;
