/** @format */

import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/core";

import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";
import colors from "../utils/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  const navigation = useNavigation();
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <AppCard
              title={item.title}
              subTitle={`$${item.price}`}
              image={item.image}
              onPress={() => navigation.navigate("ListingDetails", { item: item })}
            />
          );
        }}
      />
    </AppScreen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
