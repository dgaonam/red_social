import React, { useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { useState } from "react"

import Notification from './Notification';
import { readPostData } from '../../config/database';
import UseUser from '../../hooks/UseUser';

const Notifications = () => {
  const { user, newPost, setNewPost } = UseUser();
  const [DATA, SETDATA] = useState([]);

  const searchNotifications = async () => {
    console.log("Buscamos nuevas notificaciones");
    await readPostData('notifications').then((result) => {
      if (result !== null) {
        const keys = Object.keys(result);
        const notifications_result = keys.map(key => result[key]);
        const formatingNotifications = [];
        for (const notifications of notifications_result) {
          formatingNotifications.push({
            id: notifications.id,
            avatar_url: notifications.avatar_url,
            message: notifications.message,
            type: notifications.type
          })
        }
        SETDATA(formatingNotifications);
      }
    }).catch((error) => {
      console.log("Error: ", error)
    });

  }

  useEffect(() => {
    searchNotifications();
  }, [newPost]);

  const renderItem = ({ item }) => {


    return (
      <Notification notifications={item} />
    );

  };

  const getKey = (item) => {
    return item.id;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={(item, index) => getKey(item)}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  imagePostContainer: {
    flex: 1
  },
  imagePost: {
    flex: 1,
    aspectRatio: 1
  },
});

export default Notifications;