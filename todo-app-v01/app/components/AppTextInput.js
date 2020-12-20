import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function AppTextInput({
  autoCorrect,
  autoFocus,
  editable,
  multiline,
  maxLength,
  numberOfLines,
  onChangeText,
  onScroll,
  onLayout,
  placeholder,
  placeholderTextColor,
  styleTextInput,
  scrollEnabled,
}) {
  return (
    <TextInput
      autoCorrect={autoCorrect}
      autoFocus={autoFocus}
      editable={editable}
      multiline={multiline}
      maxLength={maxLength}
      numberOfLines={numberOfLines}
      onChangeText={onChangeText}
      onScroll={onScroll}
      onLayout={onLayout}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      scrollEnabled={scrollEnabled}
      style={[styles.containerTextInput, styleTextInput]}
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
