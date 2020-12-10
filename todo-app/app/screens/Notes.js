import React, { useContext, useMemo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, FAB, List } from "react-native-paper";

import { Context } from "../context/NoteContext";
import { REMOVE_NOTE, UPDATE_NOTE } from "../constant/Action";
import NoteCard from "../components/NoteCard";

function Notes({ navigation }) {
  const { state, dispatch } = useContext(Context);

  return (
    <React.Fragment>
      <View style={styles.container}>
        {state.length === 0 ? (
          <View style={styles.textContainer}>
            <Text style={styles.text}>Simple-Note</Text>
          </View>
        ) : (
          <View style={styles.listContainer}>
            <ScrollView>
              {state.map(({ id, title, value, date, complete }) => (
                <List.Item
                  key={id}
                  description={() => (
                    <View key={id} style={styles.itemContainer}>
                      <NoteCard
                        title={title}
                        value={value}
                        date={date}
                        onPressCom={() => {
                          dispatch({ type: UPDATE_NOTE, payload: id });
                        }}
                        onPressDel={() => {
                          dispatch({ type: REMOVE_NOTE, payload: id });
                        }}
                        complete={complete}
                      />
                    </View>
                  )}
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
    justifyContent: "flex-start",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "sans-serif-thin",
    fontSize: 50,
    color: "#9400FF",
  },
  fab: {
    backgroundColor: "#9400FF",
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
  listContainer: {
    width: "85%",
  },
  itemContainer: {
    flexDirection: "row",
  },
});

export default Notes;
