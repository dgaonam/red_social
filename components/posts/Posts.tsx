import React, { useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView,ActivityIndicator } from 'react-native';

import { useState } from "react"
import Post from '../posts/Post';
import { upload } from '../../config/storage';
import { writePostData ,writeNotificationData } from '../../config/database';
import uuid from 'react-native-uuid';
import UseUser from '../../hooks/UseUser';


const Posts = ({ isGrid,posts }) => {
  const { user,setNewPost } = UseUser();
  const [isLoading, setIsLoading] = useState(false);

  const renderItem = ({ item }) => {
    if (isGrid) {
      return (<TouchableOpacity key={item.id} style={styles.imagePostContainer} onPress={()=>{postear(item)}}>
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
    let post_url = await upload("post","image/jpeg", {name: "", type: "image/jpg", uri: post.picture_url}, post_uid);
    if(post_url){
      let created = await writePostData("posts", {id:post_uid,author:{userId:user.data.localId,fullName: user.data.displayName,avatar_url:user.data.avatar_url,}, type:"image",picture_url:post_url,like:0,description:"",place:""});
      if(created){
        
        const notification_uid = uuid.v4();
        newNotification(notification_uid,user.data.avatar_url,"newPost",user.data.displayName + " realizo una nueva publicacion").then((result)=>{
          console.info(result);
          setIsLoading(false);
          setNewPost(true);
        }).catch((error)=>{
          console.error("Error Notification: ");
        });
        alert("Publicacion realizada");
      } else{
        alert("Fallo la publicacion");
      }
    }else{
      alert("Fallo al subir la imagen");
    }
  }

  const newNotification = async(id,avatar_url,type,message)=>{
    console.info("Notification==>",id,avatar_url,type,message);
    await writeNotificationData("notifications",{id: id,avatar_url: avatar_url,type: type,message: message})
  }

  const postear =(post)=>{
    setIsLoading(true);
    const post_uid = uuid.v4();
    uploadPost(post_uid,post);
    
    

  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} >
      <FlatList
        data={posts}
        numColumns={isGrid ? 4 : 1}
        renderItem={renderItem}
       
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
  buttonContainer: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    textAlign: 'right',
    justifyContent: 'flex-start',
    marginLeft: '78%',

  },
});

export default Posts;