/** @format */

import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import colors from "../utils/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  title,
  subtitle,
  image,
  onPress,
  IconComponet,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.white}>
        <View style={styles.container}>
          {IconComponet}
          {image && (
            <Image resizeMode='cover' style={styles.image} source={image} />
          )}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
          <MaterialCommunityIcons
            name='chevron-right'
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
    // alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.medium,
  },
});
