import axios from "axios";
import * as typeAction from "./watchedListtypeAction";

export const fetchWatchedList = (ids) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_WATCHED_LIST_REQUEST });

    try {
      const responses = await Promise.all(
        ids.map((id) =>
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=d633895f69a73e6f50752b9876aaea53`
          )
        )
      );

      const movies = responses.map((response) => response.data);

      dispatch({
        type: typeAction.FETCH_WATCHED_LIST_SUCCESS,
        payload: movies,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_WATCHED_LIST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export let addIdToList = (id) => {
  return {
    type: typeAction.ADD_ID_TO_LIST,
    payload: id,
  };
};
export let removeIdFromList = (id) => {
  return {
    type: typeAction.REMOVE_ID_FROM_LIST,
    payload: id,
  };
};
export let changeRemoveCard = (boolean) => {
  return {
    type: typeAction.CHANGE_REMOVE_CARD,
    payload: boolean,
  };
};
export let setRemoveData = (data) => {
  return {
    type: typeAction.SET_REMOVE_DATA,
    payload: data,
  };
};
