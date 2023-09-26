import * as typeAction from "./topTVRateTypeAction";

let initialState = {
  data: [],
  loading: true,
  error: null,
  info: false,
};

let topTVRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_TOP_RATE_TV_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_TOP_RATE_TV_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_TOP_RATE_TV_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case typeAction.CHANGE_INFO_SHOW_TV:
      return {
        ...state,
        info: action.payload,
      };

    default:
      return state;
  }
};

export default topTVRateReducer;
