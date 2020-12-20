import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

function Notes({ navigation }) {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <AppText>Hello World</AppText>
      </View>
      <AppButton
        styleView={styles.buttonContainer}
        onPress={() => navigation.navigate("AddNotes")}
      >
        Add Notes
      </AppButton>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "lightblue",
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
});

export default Notes;
