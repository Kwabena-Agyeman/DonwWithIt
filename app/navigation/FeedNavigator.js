/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import routes from "./routes";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "modal",
        headerShown: Platform.OS === "ios" ? false : true,
      }}
    >
      <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
      <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
