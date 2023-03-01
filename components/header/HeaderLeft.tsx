import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const HeaderLeft = ({navigation}) => {
    //const { user, setUser } = UseUser();
    return (
        <View style={styles.container}>
            <Text style={styles.Logo}>{process.env.NAME}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-around',
      marginLeft: 0,
      marginRight: 50
    },
    Logo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
   
  });
export default HeaderLeft;