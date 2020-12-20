import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

export default function ScreenPadding({ children }) {
  return (
    <SafeAreaView style={styles.containerSafeView}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafeView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
