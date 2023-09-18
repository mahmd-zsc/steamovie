import { combineReducers } from "redux";
import playNowReducer from "./playNow/playReducer";
import movieReducer from "./movie/movieReducer";

// Import other reducers as needed

const rootReducer = combineReducers({
  playNow: playNowReducer,
  movie: movieReducer,
});

export default rootReducer;
