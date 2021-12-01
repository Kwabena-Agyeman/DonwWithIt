/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";
import defaultStyles from "../utils/styles";
import AppText from "./AppText";
import AppScreen from "./AppScreen";
import PickerItem from "./PickerItem";

const AppPicker = ({ icon, placeholder, items, onSelectItem, selectedItem, style }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={[styles.container, style]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={[styles.text, { color: colors.dark }]}>
            {selectedItem ? selectedItem : placeholder}
          </AppText>
          <MaterialCommunityIcons name='chevron-down' size={20} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal style={styles.modal} visible={modalVisible} animationType='slide'>
        <SafeAreaView>
          <Button
            title='Close'
            onPress={() => {
              setModalVisible(false);
            }}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={3}
            renderItem={({ item }) => {
              return (
                <PickerItem
                  item={item}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              );
            }}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },

  modal: {
    flex: 1,
    flexDirection: "column",
  },
});
