import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";


const content_post = (type, url) => {

    if (type == 'image') {
        return (
           <View style={styles.listItemBody}>
                <Image style={styles.listItemImage} source={{ uri:url }} />
           </View> 
        );
    }
};

const Post = ({ post }) => {
    return (
        <TouchableOpacity style={styles.listItem} key={post.id}>
            <View style={styles.listItemHeader}>
                <View style={styles.listItemAuthorAvatarContainer}>
                    <Image style={styles.listItemAuthorAvatar} source={{ uri: require("../../assets/dgaonam.jpg") }} />
                </View>
                <Text style={styles.listItemAuthorName}>{post.author}</Text>
                <View>
                
                </View>
            </View>
            {content_post(post.type, post.picture_url)}
            <View style={styles.listItemFooter}>
                <TouchableOpacity >
                    <FontAwesome style={styles.listItemFooterImage} name={"heart"} color={"#CCC"} size={24} onPress={()=>{alert("Me gusta")}} />
                </TouchableOpacity>
                <FontAwesome style={styles.listItemFooterImage} name={"commenting"} color={"#CCC"} size={24} onPress={()=>{alert("añadir comentario")}}/>
                <FontAwesome style={styles.listItemFooterImage} name={"share-alt"} color={"#CCC"} size={24} onPress={()=>{alert("compartir")}}/>
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
        minHeight: 320
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
    listItemFooter: {
        padding: 8,
        paddingLeft: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    listItemFooterImage: {
        width: 28,
        height: 28
    },
    gap: {
        marginRight: 12
    },
    gap2: {
        marginRight: 8
    }
});

export default Post;