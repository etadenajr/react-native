import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function AppText({ children, styleView, styleText }) {
  return (
    <View style={[styles.containerView, styleView]}>
      <Text style={[styles.containerText, styleText]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {},
  containerText: {
    fontFamily: "sans-serif",
    fontSize: 18,
  },
});
