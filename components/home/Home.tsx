import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, View, Text } from 'react-native';

import Posts from '../posts/Posts';
import { readPostData } from '../../config/database';
import UseUser from '../../hooks/UseUser';

const Home = ({ navigation }) => {
  const { user, newPost, setNewPost } = UseUser();
  const [DATA, SETDATA] = useState([]);


  const updateAll = () => {
    searchPosts();
  }

  const searchPosts = async () => {
    console.log("Buscamos los post");
    await readPostData('posts').then((result) => {
    
      if (result!==null) {
      const keys = Object.keys(result);
      
      const posts_result = keys.map(key => result[key]);
      
        const formatingPosts = [];
        for (const post of posts_result) {
          formatingPosts.push({
            id: post.id,
            userId: post.author.userId,
            avatar_url: post.author.avatar_url,
            author: post.author.fullName,
            picture_url: post.picture_url,
            type: post.type,
            place: post.place,
            like: post.like
            
          })
        }
        SETDATA(() => formatingPosts);
        setNewPost(false);
      }
    }).catch((error) => {
      console.log("Error: ", error)
    });

  }

  useEffect(() => {
    searchPosts()
  }, [newPost])

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