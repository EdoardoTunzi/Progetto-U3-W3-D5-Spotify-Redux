import { ADD_TO_PLAYER } from "../actions";

const currentSongReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return action.payload;
    default:
      return state;
  }
};

export default currentSongReducer;
