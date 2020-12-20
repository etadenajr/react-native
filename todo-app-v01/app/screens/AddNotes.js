import React from "react";
import { StyleSheet, View, Text } from "react-native";

function AddNotes() {
  return (
    <View style={styles.container}>
      <Text>Hello AddNotes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddNotes;
