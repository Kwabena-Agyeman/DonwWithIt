/** @format */

import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";

import AppIcon from "../components/AppIcon";
import AppScreen from "../components/AppScreen";
import ListItem from "../components/Listitem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../utils/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Kwabena Agyeman'
          subtitle='kagyeman@ymail.com'
          image={require("../../assets/kwabena.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                IconComponet={
                  <AppIcon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            );
          }}
        />
      </View>
      <ListItem title='Logout' IconComponet={<AppIcon name='logout' backgroundColor='#ffe66d' />} />
    </AppScreen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
