/** @format */

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppIcon from "./AppIcon";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppIcon backgroundColor={item.color} name={item.icon} size={80} />
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    marginTop: 5,
    fontSize: 18,
    textAlign: "center",
  },
});
