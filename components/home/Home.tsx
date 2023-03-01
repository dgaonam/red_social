import React from 'react';
import { View,Text, FlatList,TouchableOpacity,StyleSheet,StatusBar,SafeAreaView } from 'react-native';

import { useState } from "react"
import Post from '../posts/Post';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    author: "dgaonam",
    type: "image",
    picture_url:"https://picsum.photos/320/440",
    like:5,
    description: "Esta es una descripción",
    hashtags:[{hashtag:"#amlo"},{hashtag:"#amlover"}],
    place: 'Ejemplo de publicacion',
  },
  {
    id: 'bd7acbea-c1b1-36c2-aed5-3ad53abb28ba',
    author: "dgaonam",
    type: "image",
    picture_url:"https://picsum.photos/320/440",
    like:25,
    description: "Esta es una descripción",
    hashtags:[{hashtag:"#amlo"},{hashtag:"#amlover"}],
    place: 'Ejemplo de publicacion',
  },
  {
    id: 'bd7acbea-c1b1-26c2-aed5-3ad53abb28ba',
    author: "dgaonam",
    type: "image",
    picture_url:"https://picsum.photos/320/440",
    like:52,
    description: "Esta es una descripción",
    hashtags:[{hashtag:"#amlo"},{hashtag:"#amlover"}],
    place: 'Ejemplo de publicacion',
  },
  {
    id: 'bd7acbea-c1b1-26c2-aed5-3ad53abb28ba',
    author: "dgaonam",
    type: "image",
    picture_url:"https://picsum.photos/320/440",
    like:52,
    description: "Esta es una descripción",
    hashtags:[{hashtag:"#amlo"},{hashtag:"#amlover"}],
    place: 'Ejemplo de publicacion',
  },
];

const Home = () => {
  const [posts, setPosts] = useState();
  const [selectedId, setSelectedId] = useState();

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Post post={item}/>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={DATA}
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
});

export default Home;