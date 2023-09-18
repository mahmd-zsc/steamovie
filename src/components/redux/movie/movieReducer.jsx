import * as typeAction from "./typeAction";

let initialState = {
  data: [],
  loading: true,
  error: null,
};

let movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
