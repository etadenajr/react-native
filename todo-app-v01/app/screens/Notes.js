import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function Notes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello Notes</Text>
      <Button onPress={() => navigation.navigate("AddNotes")} title="Add" />
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
