import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const HeaderLeft = ({navigation}) => {
    //const { user, setUser } = UseUser();
    return (
        <View style={styles.container}>
            <Text style={styles.Logo}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      marginLeft: 1,
      marginRight: 30,
      padding: 5
    },
    Logo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
   
  });
export default HeaderLeft;