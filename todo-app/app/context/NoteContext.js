import React, { useReducer, createContext } from "react";

import { noteReducer } from "../reducer/NoteReducer";

export const Context = createContext();

const NoteContext = (props) => {
  const [state, dispatch] = useReducer(noteReducer, []);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default NoteContext;
