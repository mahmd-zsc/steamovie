import * as typeAction from "./typeAction";

let initialState = {
  data: [],
  loading: true,
  error: null,
  page: 1,
  ball: 0,
};

let playNowReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case typeAction.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case typeAction.CHANGE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case typeAction.CHANGE_BALL:
      return {
        ...state,
        ball: action.payload,
      };
    default:
      return state;
  }
};

export default playNowReducer;
