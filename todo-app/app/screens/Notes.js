import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, FAB, List } from "react-native-paper";

import { Context } from "../context/NoteContext";
import NoteCard from "../components/NoteCard";

function Notes({ navigation }) {
  const { state } = useContext(Context);
  return (
    <React.Fragment>
      <View style={styles.container}>
        {state.length === 0 ? (
          <Text style={styles.text}>View Notes</Text>
        ) : (
          <View>
            <ScrollView>
              {state.map(({ id, title, value }) => (
                <List.Item
                  key={id}
                  description={() => <NoteCard title={title} value={value} />}
                />
              ))}
            </ScrollView>
          </View>
        )}
      </View>
      <FAB
        style={styles.fab}
        label="Add Notes"
        small
        onPress={() => navigation.navigate("AddNote")}
      />
    </React.Fragment>
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
