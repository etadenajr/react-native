import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const NoteCard = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Title>{title}</Title>
        <Paragraph>{value}</Paragraph>
      </Card>
    </View>
  );
};

export default NoteCard;
