import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, View, Text } from 'react-native';

import Posts from '../posts/Posts';
import { readPostData } from '../../config/database';

const Home = ({ navigation }) => {

  const [DATA,SETDATA] = useState([
]);

  const buscarPosts = async() => {
    console.log("Buscamos los post");
      await readPostData('posts').then((result)=>{
      console.log("Home",result);
      const keys = Object.keys(result);
      console.info("keys",keys);
      const posts_result = keys.map(key => result[key]);
      console.info("post",posts_result);
      SETDATA(posts_result);
      console.info(DATA);
    }).catch((error)=>{
      console.log("Error: ",error)
    });
    
  }

  useEffect(()=>{
    buscarPosts()
  },[])

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