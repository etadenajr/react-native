import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

function AddNote() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Note</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
