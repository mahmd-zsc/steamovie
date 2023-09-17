import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; // Import Redux Thunk middleware
import rootReducer from "./rootReducer"; // Import your rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
