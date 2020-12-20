import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ({ children, onPress, styleView, styleText }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.containerView, styleView]}
    >
      <Text style={[styles.containerText, styleText]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    fontFamily: "sans-serif-thin",
    fontSize: 16,
  },
});
