/** @format */

import React from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
import colors from "../utils/colors";
import AppText from "./AppText";

const AppCard = ({ title, subtitle, image, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} resizeMode='cover' />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default AppCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
