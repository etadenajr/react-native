import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

function Notes() {
  return (
    <View style={styles.container}>
      <Text style={style.text}>View Notes</Text>
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
