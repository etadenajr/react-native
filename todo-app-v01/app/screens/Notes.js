import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Notes() {
  return (
    <View style={styles.container}>
      <Text>Hello Notes</Text>
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

export default Notes;
