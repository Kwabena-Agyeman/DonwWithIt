/** @format */

import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Platform, Image, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../utils/colors";

const requestPermissions = async () => {
  try {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  } catch (error) {
    console.log(error);
  }
};

const ImageInput = ({ imageUri, style, setImages, AddImage, RemoveImage, index }) => {
  const handlePress = () => {
    if (!imageUri) {
      pickImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        {
          text: "Yes",
          onPress: () => {
            RemoveImage(index);
          },
        },
        {
          text: "No",
        },
      ]);
    }
  };
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) {
        AddImage(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);
  return (
    <>
      <TouchableOpacity style={[styles.container, style]} onPress={handlePress}>
        {!imageUri && (
          <MaterialCommunityIcons
            name='camera'
            size={40}
            color={colors.medium}
            style={styles.icon}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.Image} />}
      </TouchableOpacity>
    </>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    marginVertical: 10,
    margin: 5,
    overflow: "hidden",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
});
