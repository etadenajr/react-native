import { ADD_NOTE } from "../constant/Action";

export const noteReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.notes];

    default:
      return state;
  }
};
