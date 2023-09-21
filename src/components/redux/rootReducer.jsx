import { combineReducers } from "redux";
import playNowReducer from "./playNow/playReducer";
import movieReducer from "./movie/movieReducer";
import toRateReducer from "./topRate/toRateReducer";

// Import other reducers as needed

const rootReducer = combineReducers({
  playNow: playNowReducer,
  movie: movieReducer,
  topRate: toRateReducer,
});

export default rootReducer;
