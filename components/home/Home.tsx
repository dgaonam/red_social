import React from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { useState } from "react"
import Post from '../posts/Post';
import Posts from '../posts/Posts';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    author: "dgaonam",
    avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2FWxpf93dtAbdWGCtr93q6EagSEo32.jpg?alt=media&token=b019d7ec-110f-49d3-9a83-7894effb2996",
    type: "image",
    picture_url: "https://picsum.photos/320/440",
    like: 5,
    description: "Esta es una descripción",
    hashtags: [{ hashtag: "#amlo" }, { hashtag: "#amlover" }],
    place: 'Ejemplo de publicacion',
  },
  {
    id: 'bd7acbea-c1b1-36c2-aed5-3ad53abb28ba',
    author: "dgaonam",
    avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2FWxpf93dtAbdWGCtr93q6EagSEo32.jpg?alt=media&token=b019d7ec-110f-49d3-9a83-7894effb2996",
    type: "image",
    picture_url: "https://picsum.photos/320/440",
    like: 25,
    description: "Esta es una descripción",
    hashtags: [{ hashtag: "#amlo" }, { hashtag: "#amlover" }],
    place: 'Ejemplo de publicacion',
  },
  {
    id: 'bd7acbea-c1b1-26c2-aed5-3ad53abb28ba',
    author: "dgaonam",
    avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2FWxpf93dtAbdWGCtr93q6EagSEo32.jpg?alt=media&token=b019d7ec-110f-49d3-9a83-7894effb2996",
    type: "image",
    picture_url: "https://picsum.photos/320/440",
    like: 52,
    description: "Esta es una descripción",
    hashtags: [{ hashtag: "#amlo" }, { hashtag: "#amlover" }],
    place: 'Ejemplo de publicacion',
  },
  {
    id: 'bd7acbea-c1b1-26c2-aed5-3ad53abb28ba',
    author: "dgaonam",
    avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2FWxpf93dtAbdWGCtr93q6EagSEo32.jpg?alt=media&token=b019d7ec-110f-49d3-9a83-7894effb2996",
    type: "image",
    picture_url: "https://picsum.photos/320/440",
    like: 52,
    description: "Esta es una descripción",
    hashtags: [{ hashtag: "#amlo" }, { hashtag: "#amlover" }],
    place: 'Ejemplo de publicacion',
  },
];

const Home = ({ navigation }) => {

  return (
    <Posts isGrid={false} posts={DATA} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Home;