import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import AppButton from "../components/AppButton";

function Notes({ navigation }) {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text>Hello Notes</Text>
      </View>
      <AppButton
        styleView={styles.buttonContainer}
        onPress={() => navigation.navigate("AddNotes")}
      >
        Add
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
});

export default Notes;
