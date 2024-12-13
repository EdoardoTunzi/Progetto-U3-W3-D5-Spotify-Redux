import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentSongReducer from "../reducers/currentSongReducer";
import favouritesReducer from "../reducers/favouritesReducer";

const rootReducer = combineReducers({
  currentSong: currentSongReducer,
  favourites: favouritesReducer
});

const store = configureStore({
  reducer: rootReducer
});
export default store;
