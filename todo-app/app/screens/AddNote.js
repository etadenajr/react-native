import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, FAB } from "react-native-paper";

function AddNote() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <TextInput label="Title Notes" mode="outlined" style={styles.title} />
        <TextInput
          label="Notes"
          mode="outlined"
          multiline={true}
          scrollEnabled={true}
          returnKeyType="done"
          style={styles.textInput}
        />
      </View>
      <FAB style={styles.fab} small icon="check" />
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
    backgroundColor: "gray",
    position: "absolute",
    margin: 15,
    right: 0,
    bottom: 0,
  },
});

export default AddNote;
