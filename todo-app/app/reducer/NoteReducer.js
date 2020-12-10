import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "../constant/Action";

export const noteReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.notes];

    case REMOVE_NOTE:
      return state.filter((note) => note.id !== action.payload);

    case UPDATE_NOTE:
      return state.map((note) => {
        if (note.id === action.payload) {
          return {
            ...note,
            complete: !note.complete,
          };
        }
        return note;
      });

    default:
      return state;
  }
};
