import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function AppTextInput({
  autoCorrect,
  multiline,
  numberOfLines,
  onChangeText,
  placeholder,
  placeholderTextColor,
  styleTextInput,
  scrollEnabled,
  value,
}) {
  return (
    <TextInput
      autoCorrect={autoCorrect}
      multiline={multiline}
      numberOfLines={numberOfLines}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      scrollEnabled={scrollEnabled}
      style={[styles.containerTextInput, styleTextInput]}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  containerTextInput: {
    borderWidth: 1,
    borderColor: "gray",
    fontFamily: "sans-serif-thin",
    fontSize: 16,
  },
});
