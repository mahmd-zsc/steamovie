import * as typeAction from "./watchedListtypeAction";

let initialState = {
  data: JSON.parse(window.localStorage.watchedListData) || [],
  loading: true,
  error: null,
  ids: [],
  removeCard: false,
  removeDate: [],
};

let watchedListReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_WATCHED_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_WATCHED_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_WATCHED_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case typeAction.ADD_ID_TO_LIST:
      return {
        ...state,
        ids: [...state.ids, action.payload],
      };
    case typeAction.REMOVE_ID_FROM_LIST:
      return {
        ...state,
        ids: state.ids.filter((d) => d !== action.payload),
      };
    case typeAction.CHANGE_REMOVE_CARD:
      return {
        ...state,
        removeCard: action.payload,
      };
    case typeAction.SET_REMOVE_DATA:
      return {
        ...state,
        removeDate: action.payload,
      };

    default:
      return state;
  }
};

export default watchedListReducer;
