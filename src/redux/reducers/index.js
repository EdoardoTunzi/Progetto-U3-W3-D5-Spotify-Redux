import { ADD_TO_FAVOURITES, ADD_TO_PLAYER, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  currentSong: null,
  favourites: {
    content: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        currentSong: action.payload
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload]
        }
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((favSong) => favSong !== action.payload)
        }
      };
    default:
      return state;
  }
};

export default mainReducer;
