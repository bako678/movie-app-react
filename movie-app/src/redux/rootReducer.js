import { combineReducers } from "redux";
import favoriteReducer from "./favourite-movies/favouriteReducer";
import movieReducer from "./movies/movieReducer";
const rootReducer = combineReducers({ movieReducer, favoriteReducer });

export default rootReducer;