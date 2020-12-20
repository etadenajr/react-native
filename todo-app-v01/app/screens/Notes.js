import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ScreenPadding from "../components/ScreenPadding";

function Notes({ navigation }) {
  return (
    <ScreenPadding>
      <View style={styles.container}>
        <AppText styleView={styles.container}>Hello World</AppText>
      </View>
      <AppButton
        styleView={styles.buttonContainer}
        onPress={() => navigation.navigate("AddNotes")}
      >
        Add Notes
      </AppButton>
    </ScreenPadding>
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
