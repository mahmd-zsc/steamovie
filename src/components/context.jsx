import axios from "axios";
import { React, createContext, useState, useContext, useEffect } from "react";
// Auth => Authentication مصادقة

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  let [nowPlayer, setNowPlayer] = useState([]);
  let [popular, setPopular] = useState([]);
  let [top_rated, setTop_rated] = useState([]);
  let [upcoming, setUpcoming] = useState([]);
  let [nowPlayerLoading, setNowPlayerLoading] = useState(true);
  let [popularLoading, setPopularLoading] = useState(true);
  let [top_ratedLoading, setTop_ratedLoading] = useState(true);
  let [upcomingLoading, setUpcomingLoading] = useState(true);
  let [pageNumber, setPageNumber] = useState(1);
  let [pageLoading, setPageLoading] = useState(true);
  let [page, setPage] = useState();
  let [search, setSearch] = useState([]);
  let changePage = (num) => {
    setPageNumber(num);
  };
  let changeSearch = (arr) => {
    setSearch(arr);
  };
  useEffect(() => {
    setPageLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d633895f69a73e6f50752b9876aaea53&page=${pageNumber}`
      )
      .then((res) => {
        setPageLoading(false);
        setPage(res.data);
      });
  }, [pageNumber]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=d633895f69a73e6f50752b9876aaea53"
      )
      .then((res) => {
        setNowPlayerLoading(false);
        setNowPlayer(res.data.results);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=d633895f69a73e6f50752b9876aaea53"
      )
      .then((res) => {
        setPopularLoading(false);
        setPopular(res.data.results);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=d633895f69a73e6f50752b9876aaea53"
      )
      .then((res) => {
        setTop_ratedLoading(false);
        setTop_rated(res.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=d633895f69a73e6f50752b9876aaea53"
      )
      .then((res) => {
        setUpcomingLoading(false);
        setUpcoming(res.data.results);
      });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        nowPlayer,
        popular,
        top_rated,
        upcoming,
        nowPlayerLoading,
        popularLoading,
        top_ratedLoading,
        upcomingLoading,
        changePage,
        page,
        pageLoading,
        pageNumber,
        search,
        changeSearch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
