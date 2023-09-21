import * as typeAction from "./typeAction";

let initialState = {
  data: [],
  loading: true,
  error: null,
};

let toRateReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default toRateReducer;
