/** @format */

import React from "react";
import { Text } from "react-native";
import defaultStyles from "../utils/styles";

const AppText = ({ children, style }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
