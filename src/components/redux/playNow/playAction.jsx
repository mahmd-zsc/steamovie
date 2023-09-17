import axios from "axios";
import * as typeAction from "./typeAction";

export const fetchData = (page) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_DATA_REQUEST });

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d633895f69a73e6f50752b9876aaea53&page=${page}`
      );
      dispatch({
        type: typeAction.FETCH_DATA_SUCCESS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
export const changePage = (number) => {
  return {
    type: typeAction.CHANGE_PAGE,
    payload: number,
  };
};
