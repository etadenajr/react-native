import React, { useState, useContext, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, FAB } from "react-native-paper";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { Context } from "../context/NoteContext";
import { ADD_NOTE } from "../constant/Action";

function AddNote({ navigation }) {
  const { dispatch } = useContext(Context);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteValue, setNoteValue] = useState("");

  const value = useMemo(
    () => ({ dispatch, noteTitle, setNoteTitle, noteValue, setNoteValue }),
    [dispatch, noteTitle, setNoteTitle, noteValue, setNoteValue]
  );

  const addNoteItem = () => {
    value.dispatch({
      type: ADD_NOTE,
      notes: {
        id: uuidv4(),
        title: noteTitle,
        value: noteValue,
        date: Date(),
        complete: false,
      },
    });
    value.setNoteTitle("");
    value.setNoteValue("");
    navigation.goBack();
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <TextInput
          label="Title Notes"
          mode="outlined"
          style={styles.title}
          value={noteTitle}
          onChangeText={(title) => value.setNoteTitle(title)}
        />
        <TextInput
          label="Notes"
          mode="flat"
          multiline={true}
          scrollEnabled={true}
          returnKeyType="done"
          style={styles.textInput}
          value={noteValue}
          onChangeText={(note) => value.setNoteValue(note)}
        />
      </View>
      <FAB
        style={styles.fab}
        small
        icon="check"
        onPress={addNoteItem}
        disabled={(noteTitle && noteValue) === "" ? true : false}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    width: "75%",
    marginBottom: 15,
  },
  textInput: {
    fontSize: 16,
    height: 200,
    width: "75%",
  },
  text: {
    fontSize: 24,
  },
  fab: {
    backgroundColor: "#9400FF",
    position: "absolute",
    margin: 15,
    right: 0,
    bottom: 0,
  },
});

export default AddNote;
