import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import Navigator from "./app/navigation";
import NoteContext from "./app/context/NoteContext";

export default function App() {
  return (
    <NoteContext>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </NoteContext>
  );
}
