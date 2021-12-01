/** @format */

import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../utils/colors";

const ProductScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.Container}>
        <View style={styles.ButtonsContainer}>
          <View>
            <MaterialCommunityIcons
              name='close'
              color={colors.white}
              size={30}
            />
          </View>
          <View>
            <MaterialCommunityIcons
              name='trash-can-outline'
              color={colors.white}
              size={30}
            />
          </View>
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={require("../../assets/chair.jpg")}
            style={styles.Image}
            resizeMode='contain'
          />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='light' />
    </>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  ImageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  ButtonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    position: "absolute",
    top: 25,
  },
  CloseIcon: {},
  DeleteIcon: {},
});
