/** @format */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../utils/colors";

const TabBarButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {/* <Text style={styles.text}>+</Text> */}
        <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: Platform.OS === "ios" ? 20 : 30,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
