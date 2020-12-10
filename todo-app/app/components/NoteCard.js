import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, FAB } from "react-native-paper";

const NoteCard = ({ title, value, date, onPressDel, onPressCom, complete }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        {complete && <FAB small icon="check-decagram" style={styles.done} />}
        <Title>{title}</Title>
        <Paragraph>{value}</Paragraph>
        <Paragraph style={styles.time}>{date}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button onPress={onPressCom}>Complete</Button>
        <Button onPress={onPressDel}>Delete</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
  },
  time: {
    fontSize: 10,
  },
  actions: {
    justifyContent: "flex-end",
  },
  done: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#9400FF",
  },
});

export default NoteCard;
