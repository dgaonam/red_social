import { Share, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Notification = ({ notifications }) => {
    return (
        <TouchableOpacity style={styles.listItem} key={notifications.id}>
            <View style={styles.listItemHeader}>
                <View style={styles.listItemAuthorAvatarContainer}>
                    <Image style={styles.listItemAuthorAvatar} source={{ uri: notifications.avatar_url }} />
                </View>
                <Text style={styles.listItemAuthorName}>{notifications.message}</Text>
            </View>
            <View style={styles.listItemHeader}>
                <Text>{notifications.description}</Text>
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

});

export default Notification;