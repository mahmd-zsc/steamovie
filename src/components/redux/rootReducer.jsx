import { combineReducers } from "redux";
import playNowReducer from "./playNow/playReducer";
import movieReducer from "./movie/movieReducer";
import topRateReducer from "./topMovie/toRateReducer";
import searchReducer from "./search/searchReducer";
import topTVRateReducer from "./topTV/topTVRateReducer";
import watchedListReducer from "./watchedList/watchedListReducer";

// Import other reducers as needed

const rootReducer = combineReducers({
  playNow: playNowReducer,
  topRate: topRateReducer,
  movie: movieReducer,
  search: searchReducer,
  tv: topTVRateReducer,
  watchedList: watchedListReducer,
});

export default rootReducer;
