import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const NoteCard = ({ title, value }) => {
  return (
    <Card>
      <Card.Content style={styles.card}>
        <Title>{title}</Title>
        <Paragraph>{value}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 260,
  },
});

export default NoteCard;
