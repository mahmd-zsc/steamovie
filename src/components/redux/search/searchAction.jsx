import axios from "axios";
import * as typeAction from "./searchTypeAction";

const API_KEY = "d633895f69a73e6f50752b9876aaea53";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchSearchMovie = (text) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_SEARCH_MOVIE_REQUEST });

    try {
      let page = 1;
      let totalPages = 1;
      let allResults = [];

      while (page <= totalPages && allResults.length < 100) {
        const response = await axios.get(
          `${BASE_URL}?api_key=${API_KEY}&query=${text}&page=${page}`
        );

        if (page === 1) {
          totalPages = response.data.total_pages;
        }

        // Calculate the number of results remaining to reach 100
        const remainingResults = 100 - allResults.length;

        // Add only the necessary number of results to reach 100 or less
        const resultsToAdd = response.data.results.slice(0, remainingResults);

        allResults = [...allResults, ...resultsToAdd];

        // If we have already reached 100 results, break out of the loop
        if (allResults.length >= 100) {
          break;
        }

        page++;
      }

      dispatch({
        type: typeAction.FETCH_SEARCH_MOVIE_SUCCESS,
        payload: allResults,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_SEARCH_MOVIE_FAILURE,
        payload: error.message,
      });
    }
  };
};

export let changeSearchText = (text) => {
  return {
    type: typeAction.CHANGE_SEARCH_TEXT,
    payload: text,
  };
};
export let changeSearchFinalText = (text) => {
  return {
    type: typeAction.CHANGE_SEARCH_FINAL_TEXT,
    payload: text,
  };
};
