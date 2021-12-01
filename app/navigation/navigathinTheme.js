/** @format */

import { DefaultTheme } from "@react-navigation/native";
import colors from "../utils/colors";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

export default navTheme;
