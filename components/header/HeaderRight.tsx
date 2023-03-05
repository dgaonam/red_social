import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import UseUser from '../../hooks/UseUser';

const HeaderRight = ({ navigation }) => {
    const { user, setUser } = UseUser();
    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Text style={styles.logo}>Proyecto Final</Text>
            </View>
            <View style={styles.containerIcon}>
                <TouchableOpacity onPress={() => alert("chat")} >
                    <FontAwesome style={styles.iconBarTop} name={"wechat"} size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setUser({
                        session: false,
                        data: {
                            email: "",
                            displayName: "",
                            localId: "",
                        },
                    });
                }} >
                    <FontAwesome style={styles.iconBarTop} name={"power-off"} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-end',
      
    },
    logoView: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginLeft: 1,
        marginRight: 30,
        padding: 5
      },
    iconBarTop: {
        height: 25,
        width: 25,
        marginRight: 0,
        padding: 0,
        alignContent: 'flex-end',
        color: "#CCC"
    },
    containerIcon: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-around',
    },
    logo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
});
export default HeaderRight;