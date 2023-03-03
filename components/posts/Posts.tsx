import React, { useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { useState } from "react"
import Post from '../posts/Post';

const Posts = ({ isGrid,posts }) => {
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

  const getKey = (item) => {
    return item.id;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        numColumns={isGrid ? 3 : 1}
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

export default Posts;