import { ADD_NOTE, REMOVE_NOTE } from "../constant/Action";

export const noteReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.notes];

    case REMOVE_NOTE:
      return state.filter((note) => note.id !== action.payload);

    default:
      return state;
  }
};
