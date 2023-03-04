import React, { useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { useState } from "react"
import Post from '../posts/Post';
import { upload } from '../../config/storage';
import { writePostData } from '../../config/database';
import uuid from 'react-native-uuid';
import UseUser from '../../hooks/UseUser';


const Posts = ({ isGrid,posts }) => {
  const { user, setUser } = UseUser();

  const renderItem = ({ item }) => {
    if (isGrid) {
      return (<TouchableOpacity style={styles.imagePostContainer} onPress={()=>{postear(item)}}>
        <Image style={styles.imagePost} source={{ uri: item.picture_url }} />
      </TouchableOpacity>);
    } else {
      return (
        <Post post={item} />
      );
    }
  }

  const getKey = (item) => {
    return item.id;
  }

  const uploadPost=async(post_uid,post)=>{
    console.log('ok',post_uid,post);

    let post_url = await upload("post","image/jpeg", {name: "", type: "image/jpg", uri: post.picture_url}, post_uid);
    let created = await writePostData("posts", {id:post_uid,userId:user.data.localId, author:user.data.displayName, avatar_url:user.data.avatar_url,type:"image",picture_url:post_url,like:0,description:"",hashtags:[{}],place:""});
  }

  const postear =(post)=>{
    const post_uid = uuid.v4();
    
    uploadPost(post_uid,post);
    
    

  }

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