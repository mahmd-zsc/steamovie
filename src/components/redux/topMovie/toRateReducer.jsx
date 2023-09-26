import * as typeAction from "./topRateTypeAction";

let initialState = {
  data: [],
  loading: true,
  error: null,
  info: false,
};

let topRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_TOP_RATE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_TOP_RATE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_TOP_RATE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case typeAction.CHANGE_INFO_SHOW:
      return {
        ...state,
        info: action.payload,
      };

    default:
      return state;
  }
};

export default topRateReducer;
