import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import KeyBoardPadding from "../components/KeyBoardPadding";

function AddNotes() {
  return (
    <React.Fragment>
      <KeyBoardPadding>
        <AppText styleView={styles.textView}>Note</AppText>
        <AppTextInput
          styleTextInput={styles.textInputTitle}
          placeholder="Title"
          placeholderTextColor="lightblue"
        />

        <AppTextInput
          styleTextInput={styles.textInputNote}
          placeholder="Notes"
          placeholderTextColor="lightblue"
          multiline={true}
          scrollEnabled={true}
          autoFocus={true}
          editable={true}
        />
      </KeyBoardPadding>

      <AppButton styleView={styles.buttonDone}>Done</AppButton>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
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
