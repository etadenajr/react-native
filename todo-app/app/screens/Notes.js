import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, FAB } from "react-native-paper";

function Notes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>View Notes</Text>
      <FAB
        style={styles.fab}
        label="Add Notes"
        small
        onPress={() => navigation.navigate("AddNote")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    backgroundColor: "gray",
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default Notes;
