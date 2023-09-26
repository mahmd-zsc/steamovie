import axios from "axios";
import * as typeAction from "./searchTypeAction";

// Define a constant for your API key and the base URL
const API_KEY = "d633895f69a73e6f50752b9876aaea53";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchSearchMovie = (text) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_SEARCH_MOVIE_REQUEST });

    try {
      let page = 1;
      let totalPages = 1; // Initialize totalPages to 1

      // Create an array to store all results
      let allResults = [];

      while (page <= totalPages) {
        const response = await axios.get(
          `${BASE_URL}?api_key=${API_KEY}&query=${text}&page=${page}`
        );

        // Update totalPages if it's not set yet (only on the first iteration)
        if (page === 1) {
          totalPages = response.data.total_pages;
        }

        // Add the current page of results to the allResults array
        allResults = [...allResults, ...response.data.results];

        page++;
      }

      dispatch({
        type: typeAction.FETCH_SEARCH_MOVIE_SUCCESS,
        payload: allResults, // Send all results as payload
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
