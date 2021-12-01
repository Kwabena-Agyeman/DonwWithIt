/** @format */

import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal={true}
        onContentSizeChange={() => {
          scrollView.current.scrollToEnd();
        }}
      >
        <View style={styles.container}>
          {imageUris.map((uri, i) => {
            return <ImageInput key={uri} imageUri={uri} RemoveImage={onRemoveImage} index={i} />;
          })}
          <ImageInput AddImage={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
