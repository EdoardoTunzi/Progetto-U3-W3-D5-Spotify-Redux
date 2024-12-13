export const ADD_TO_PLAYER = "ADD_TO_PLAYER";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addToPlayer = (song) => ({
  type: ADD_TO_PLAYER,
  payload: song
});

export const addToFavourites = (songTitle) => ({
  type: ADD_TO_FAVOURITES,
  payload: songTitle
});

export const removeFromFavourites = (songTitle) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: songTitle
});
