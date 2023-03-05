import { Share, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { writePostData, writeNotificationData } from '../../config/database';
import { async } from '@firebase/util';
import { useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import UseUser from '../../hooks/UseUser';
import uuid from 'react-native-uuid';
import * as FileSystem from 'expo-file-system';



const Post = ({ post }) => {
    const { user, newPost, setNewPost } = UseUser();
    // setLikes(post.like);

    const content_post = (type, url) => {

        if (type == 'image') {
            return (
                <View style={styles.listItemBody}>
                    <Image style={styles.listItemImage} source={{ uri: url }} />
                    <View style={styles.buttonContainer}>
                        <FontAwesome style={styles.listItemHeaderImage} name={"download"} color={"#F0F"} size={30} onPress={() => { downloadPost(url,"imagen") }} />
                    </View>
                </View>
            );
        }
    }

    const share_post = async (id, file, autor) => {
        try {
            const localFile = await fetch(file);
            console.info("localfile ", localFile);
            const fileBlob = await localFile.blob();
            console.info("fileblob ", localFile);
            const result = await Share.share({
                message: "archivo",
                url: `${file.url}`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }

    }
    const AddLike = async (post) => {
        post.like = post.like + 1;
        const postUpdate = { id: post.id, author: { userId: post.userId, fullName: post.author, avatar_url: post.avatar_url }, type: post.type, picture_url: post.picture_url, like: post.like, place: "" };
        let created = await writePostData("posts", postUpdate).then((result) => {
            console.info(result);
            const notification_uid = uuid.v4();
            newNotification(notification_uid,user.data.avatar_url,"newLike",user.data.displayName + " dio me gusta a publicacion").then((result)=>{
                console.info(result);
                setNewPost(true);
              }).catch((error)=>{
                console.error("Error Notification: ");
              });
        }).catch((error) => {
            console.error("Error Post Like:", error);
        });
    }

    const newNotification = async(id,avatar_url,type,message)=>{
        console.info("Notification==>",id,avatar_url,type,message);
        await writeNotificationData("notifications",{id: id,avatar_url: avatar_url,type: type,message: message})
      }

    const downloadPost = async (url,name) => {
        const permiso = await MediaLibrary.requestPermissionsAsync();

        if (permiso.granted) {
         
        }
        
    }

    return (

        <TouchableOpacity style={styles.listItem} key={post.id}>
            <View style={styles.listItemHeader}>
                <View style={styles.listItemAuthorAvatarContainer}>
                    <Image style={styles.listItemAuthorAvatar} source={{ uri: post.avatar_url }} />
                </View>
                <Text style={styles.listItemAuthorName}>{post.author}</Text>
            </View>
            <View style={styles.listItemHeader}>
                <Text>{post.place}</Text>
            </View>

            {content_post(post.type, post.picture_url)}
            <View style={styles.listItemFooter}>
                <View style={styles.listItemHastag}>
                    <Text>Megusta: {post.like}</Text>
                </View>
                <View style={styles.listItemActions}>
                    <TouchableOpacity >
                        <FontAwesome style={styles.listItemFooterImage} name={"heart"} color={"#CCC"} size={24} onPress={() => { AddLike(post) }} />
                    </TouchableOpacity>
                    <FontAwesome style={styles.listItemFooterImage} name={"commenting"} color={"#CCC"} size={24} onPress={() => { alert("añadir comentario") }} />
                    <FontAwesome style={styles.listItemFooterImage} name={"share-alt"} color={"#CCC"} size={24} onPress={(e) => { share_post(post.id, post.picture_url, post.author) }} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {},
    listItemHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8
    },
    listItemAuthorAvatarContainer: {
        alignItems: 'center',
        borderRadius: 48 / 2,
        borderWidth: 2,
        borderColor: 'red',
        display: 'flex',
        height: 48,
        justifyContent: 'center',
        marginRight: 12,
        width: 48,
    },
    listItemAuthorAvatar: {
        borderRadius: 42 / 2,
        height: 38,
        width: 38,
    },
    listItemAuthorName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 12
    },
    listItemDot: {
        backgroundColor: '#000',
        borderRadius: 4 / 2,
        height: 4,
        marginRight: 12,
        marginTop: 2,
        width: 4,
    },
    listItemFollow: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3B82F6'
    },
    listItemBody: {
        flex: 1,
        minHeight: 320,
        padding: 5
    },
    listItemImage: {
        aspectRatio: 1,
        flex: 1,
    },
    videoElement: {
        flex: 1
    },
    videoOverlay: {
        bottom: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
        right: 0,
        top: 0,
    },
    listItemHastag: {
        padding: 8,
        flexDirection: 'row',
        color: '#1877F2',
        width: "80%",

    },
    listItemActions: {
        width: "20%",
        flexDirection: "row",
        paddingTop: 2,
    },
    listItemFooter: {
        padding: 8,
        paddingLeft: 5,
        flexDirection: 'row',

    },
    listItemFooterImage: {
        width: 28,
        height: 28
    },
    listItemHeaderImage: {
        width: 45,
        height: 45
    },
    buttonContainer: {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        textAlign: 'right',
        justifyContent: 'flex-start',
        marginLeft: "90%",
        marginTop: "2%"
    },

});

export default Post;