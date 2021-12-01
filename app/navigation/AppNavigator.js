/** @format */

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import routes from "./routes";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import TabBarButton from "../components/TabBarButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTINGS_EDIT}
        component={ListingEditScreen}
        options={{
          tabBarButton: () => (
            <TabBarButton onPress={() => navigation.navigate(routes.LISTINGS_EDIT)} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='account' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
