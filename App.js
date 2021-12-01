/** @format */

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, Button } from "react-native";
import AppScreen from "./app/components/AppScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingsScreen from "./app/screens/ListingsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import colors from "./app/utils/colors";
import TabBarButton from "./app/components/TabBarButton";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navTheme from "./app/navigation/navigathinTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ListingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: true,
        presentation: "modal",
      }}
    >
      <Stack.Screen name='Listings' component={ListingsScreen} />
      <Stack.Screen name='ListingDetails' component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name='Feed'
        component={ListingNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Add'
        component={ListingEditScreen}
        options={{
          tabBarButton: () => <TabBarButton />,
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='account' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer theme={navTheme}>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
      <ExpoStatusBar />
    </>
  );
}
