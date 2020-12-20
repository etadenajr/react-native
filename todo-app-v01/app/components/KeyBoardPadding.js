import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";

export default function KeyboardPadding({ children, styleKeyboard }) {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={[styles.containerKeyboard, styleKeyboard]}
    >
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
  },
});
