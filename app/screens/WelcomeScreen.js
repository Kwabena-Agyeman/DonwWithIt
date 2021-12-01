/** @format */

import React from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import AppButton from "../components/AppButton";
import colors from "../utils/colors";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../../assets/background.jpg")}
      resizeMode='cover'
      style={styles.Container}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate("Login")} />
        <AppButton
          title='Register'
          color={colors.secondary}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ButtonContainer: {
    width: "100%",
    padding: 20,
  },

  logoContainer: {
    position: "absolute",
    top: "10%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
