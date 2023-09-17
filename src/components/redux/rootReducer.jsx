import { combineReducers } from "redux";
import playNowReducer from "./playNow/playReducer"; 
// Import other reducers as needed

const rootReducer = combineReducers({
  playNow: playNowReducer,
});

export default rootReducer;
