import axios from "axios";
import * as typeAction from "./typeAction";

export const fetchMovie = (id) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_MOVIE_REQUEST });

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d633895f69a73e6f50752b9876aaea53`
      );
      dispatch({
        type: typeAction.FETCH_MOVIE_SUCCESS,
        payload: response.data, 
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_MOVIE_FAILURE,
        payload: error.message,
      });
    }
  };
};
