/** @format */

import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const AppScreen = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default AppScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
