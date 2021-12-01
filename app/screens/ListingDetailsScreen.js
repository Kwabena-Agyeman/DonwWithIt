/** @format */

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/core";

import AppText from "../components/AppText";
import ListItem from "../components/Listitem";
import colors from "../utils/colors";

const ListingDetailsScreen = () => {
  const route = useRoute();

  // We are passing the Item as a parameter from Listing Screen. In the navigate function
  const listing = route.params.item;
  return (
    <View>
      <Image style={styles.image} source={listing.image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/kwabena.jpg")}
            title='Kwabena Agyeman'
            subtitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});
