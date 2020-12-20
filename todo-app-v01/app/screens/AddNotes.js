import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import KeyBoardPadding from "../components/KeyBoardPadding";
import ScreenPadding from "../components/ScreenPadding";

function AddNotes({ navigation }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteValue, setNoteValue] = useState("");

  return (
    <ScreenPadding>
      <KeyBoardPadding>
        <AppText styleView={styles.textView}>Note</AppText>
        <AppTextInput
          styleTextInput={styles.textInputTitle}
          placeholder="Title"
          placeholderTextColor="lightblue"
          value={noteTitle}
          onChangeText={(title) => setNoteTitle(title)}
        />

        <AppTextInput
          styleTextInput={styles.textInputNote}
          placeholder="Notes"
          placeholderTextColor="lightblue"
          multiline={true}
          scrollEnabled={true}
          value={noteValue}
          onChangeText={(text) => setNoteValue(text)}
        />
      </KeyBoardPadding>

      {(noteTitle && noteValue) === "" ? (
        <AppButton
          onPress={() => navigation.goBack()}
          styleView={styles.buttonBack}
        >
          Back
        </AppButton>
      ) : (
        <AppButton styleView={styles.buttonDone}>Done</AppButton>
      )}
    </ScreenPadding>
  );
}

const styles = StyleSheet.create({
  buttonBack: {
    backgroundColor: "lightblue",
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  buttonDone: {
    backgroundColor: "lightblue",
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  textView: {
    padding: 10,
  },
  textInputTitle: {
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 20,
    borderColor: "gray",
    color: "blue",
  },
  textInputNote: {
    margin: 10,
    padding: 12,
    borderRadius: 20,
    borderColor: "gray",

    color: "blue",
  },
});

export default AddNotes;
