import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import React,{ useState,useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView,Platform } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import UseUser from '../../hooks/UseUser';
import Posts from '../posts/Posts';

const Profiles = () => {
    const { user, setUser } = UseUser();
    const [userAvatar, setUserAvatar] = useState(null);
    const [data,setData] = useState([]);    

    const avatar_selectAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            console.log(Platform.OS,result.assets[0]);
            setUserAvatar({name:"",uri: result.assets[0].uri,type:"image/jpg"});
          }
    }
    const albune_search=async()=>{
        const permiso = await MediaLibrary.requestPermissionsAsync()
        if (permiso.granted) {
        
            MediaLibrary.getAssetsAsync({
                mediaType: ["video", "photo"],
            }).then((data) => {
                setData(data.assets.map((asset)=>{
                    return {
                      id: asset.albumId,
                      picture_url: asset.uri
                    }
                  }));
            }).catch((e) => console.log(e));
        }
     };
    
     useEffect(() => {
        albune_search();
      }, []);

    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.headerImageContainer}>
                    <TouchableOpacity style={styles.uploadContainer} onPress={avatar_selectAvatar}>
                        <Image style={styles.uploadImageIcon} source={!user.data.avatar_url ? require('../../assets/adaptive-icon.png') : user.data.avatar_url} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.actionList}>
                    <TouchableOpacity >
                        <MaterialIcons style={styles.actionListIcon} name="grid-on" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Posts isGrid={true} posts={data} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        backgroundColor: '#fff'
    },
    headerContainer: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        padding: 12,
    },
    headerImageContainer: {
        width: 96,
        height: 96,
        borderRadius: 96 / 2,
        borderWidth: 2,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerImage: {
        width: 86,
        height: 86,
        borderRadius: 86 / 2,
        borderStyle: 'solid',
        borderColor: "#000"
    },
    headerRight: {
        flex: 1,
        flexDirection: 'column',
    },
    actionContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionList: {
        flexDirection: 'row'
    },
    actionListItem: {
        alignItems: 'center',
        marginRight: 24,
        paddingBottom: 8,
        paddingTop: 12,
        width: 56,
    },
    actionListItemActive: {
        borderBottomColor: '#000',
        borderBottomWidth: 2
    },
    actionListIcon: {
        width: 30,
        height: 30
    },
    uploadContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadImageIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'red',
    },

});



export default Profiles;