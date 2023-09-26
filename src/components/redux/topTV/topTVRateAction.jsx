import axios from "axios";
import * as typeAction from "./topTVRateTypeAction";

const apiKey = "d633895f69a73e6f50752b9876aaea53";

export const fetchToRateTV = (page, moviesSoFar = []) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_TOP_RATE_TV_DATA_REQUEST });

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=${page}`
      );

      const newMovies = response.data.results;

      if (newMovies.length === 0) {
        dispatch({
          type: typeAction.FETCH_TOP_RATE_TV_DATA_SUCCESS,
          payload: moviesSoFar,
        });
      } else {
        const updatedMovies = moviesSoFar.concat(newMovies);

        if (updatedMovies.length >= 250) {
          dispatch({
            type: typeAction.FETCH_TOP_RATE_TV_DATA_SUCCESS,
            payload: updatedMovies.slice(0, 250),
          });
        } else {
          dispatch(fetchToRateTV(page + 1, updatedMovies));
        }
      }
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_TOP_RATE_TV_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
export let changeInfoShow = (show) => {
  return {
    type: typeAction.CHANGE_INFO_SHOW_TV,
    payload: show,
  };
};
