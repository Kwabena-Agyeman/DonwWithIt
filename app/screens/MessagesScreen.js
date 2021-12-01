/** @format */

import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ListItem from "../components/Listitem";
import AppScreen from "../components/AppScreen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const InitialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/kwabena.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/kwabena.jpg"),
  },
];

const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(InitialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (SelectedMessage) => {
    // Delete the messages from message array
    const newMessages = messages.filter((message) => {
      return message.id != SelectedMessage.id;
    });

    setMessages(newMessages);
  };

  return (
    <AppScreen>
      <FlatList
        style={{ flex: 1 }}
        data={messages}
        renderItem={({ item, index, separators }) => {
          return (
            <ListItem
              title={item.title}
              subtitle={item.description}
              image={item.image}
              onPress={() => {
                console.log("Message Selected", item);
              }}
              renderRightActions={() => {
                return (
                  <ListItemDeleteAction onPress={() => handleDelete(item)} />
                );
              }}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={
          // There is where you call the API and fetch new data

          () => {
            setMessages([
              ...messages,
              {
                id: 3,
                title: "T3",
                description: "D3",
                image: require("../../assets/kwabena.jpg"),
              },
            ]);
          }
        }
      />
    </AppScreen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
