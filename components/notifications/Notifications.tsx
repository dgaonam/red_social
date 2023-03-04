import React, { useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { useState } from "react"

import Notification from './Notification';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      author: "dgaonam",
      avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2FWxpf93dtAbdWGCtr93q6EagSEo32.jpg?alt=media&token=b019d7ec-110f-49d3-9a83-7894effb2996",
      description: "Esta es una descripción de una notificacion, de publicaciones realizadas en la aplicacion- 1"
    },
    {
      id: 'bd7acbea-c1b1-36c2-aed5-3ad53abb28ba',
      author: "dgaonam",
      avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2FWxpf93dtAbdWGCtr93q6EagSEo32.jpg?alt=media&token=b019d7ec-110f-49d3-9a83-7894effb2996",
      description: "Esta es una descripción de una notificacion, de publicaciones realizadas en la aplicacion- 2"
    },
    {
      id: 'bd7acbea-c1b1-26c2-aed5-3ad53abb28ba',
      author: "dgaonam",
      avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2FWxpf93dtAbdWGCtr93q6EagSEo32.jpg?alt=media&token=b019d7ec-110f-49d3-9a83-7894effb2996",
      description: "Esta es una descripción de una notificacion, de publicaciones realizadas en la aplicacion- 3"
    },
    {
      id: 'bd7acbea-c1b1-16c2-aed5-3ad53abb28ba',
      author: "dgaonam",
      avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2FWxpf93dtAbdWGCtr93q6EagSEo32.jpg?alt=media&token=b019d7ec-110f-49d3-9a83-7894effb2996",
      description: "Esta es una descripción de una notificacion, de publicaciones realizadas en la aplicacion- 4"
    },
  ];

const Notifications = ({ posts }) => {
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