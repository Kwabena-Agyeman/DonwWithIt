/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import AppText from "./AppText";

const ErrorMessage = ({ error }) => {
  if (!error) {
    return null;
  }
  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
