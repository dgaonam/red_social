import React from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { useState } from "react"
import Post from '../posts/Post';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    author: "dgaonam",
    avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2F3kT4DOs9qJWZzhFbNfHE3tjj6IH3.jpg?alt=media&token=7d29d6d6-9bdd-43e5-9644-8f14d5b4e908",
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
    avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2F3kT4DOs9qJWZzhFbNfHE3tjj6IH3.jpg?alt=media&token=7d29d6d6-9bdd-43e5-9644-8f14d5b4e908",
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
    avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2F3kT4DOs9qJWZzhFbNfHE3tjj6IH3.jpg?alt=media&token=7d29d6d6-9bdd-43e5-9644-8f14d5b4e908",
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
    avatar_url: "https://firebasestorage.googleapis.com/v0/b/curso-f876a.appspot.com/o/users%2F3kT4DOs9qJWZzhFbNfHE3tjj6IH3.jpg?alt=media&token=7d29d6d6-9bdd-43e5-9644-8f14d5b4e908",
    type: "image",
    picture_url: "https://picsum.photos/320/440",
    like: 52,
    description: "Esta es una descripción",
    hashtags: [{ hashtag: "#amlo" }, { hashtag: "#amlover" }],
    place: 'Ejemplo de publicacion',
  },
];

const Home = ({ isGrid }) => {
  const [posts, setPosts] = useState();
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {

    if (isGrid) {
      return (<TouchableOpacity style={styles.imagePostContainer} >
        <Image style={styles.imagePost} source={{ uri: item.picture_url }} />
      </TouchableOpacity>);
    } else {
      return (
        <Post post={item} />
      );
    }

  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={isGrid ? 3 : 1}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
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

export default Home;