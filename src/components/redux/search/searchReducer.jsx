import * as typeAction from "./searchTypeAction";

let initialState = {
  data: [],
  loading: true,
  error: null,
  text: null,
  finalText: window.sessionStorage.getItem("searchText") || null,
};

let searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case typeAction.CHANGE_SEARCH_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case typeAction.CHANGE_SEARCH_FINAL_TEXT:
      return {
        ...state,
        finalText: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
