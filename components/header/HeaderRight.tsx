import React from 'react';
import { TouchableOpacity, Image,View ,StyleSheet} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import UseUser from '../../hooks/UseUser';

const HeaderRight = ({navigation}) => {
    const { user, setUser } = UseUser();
    return (
        <View style={styles.container}>
        <TouchableOpacity  onPress={() => alert("chat")} >
            <FontAwesome style={styles.iconBarTop}  name={"wechat"} size={25} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => alert("Galeria")} >
            <FontAwesome style={styles.iconBarTop}  name={"picture-o"} size={25} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() =>{
             setUser({
                session: false,
                data: {
                    email: "",
                    displayName: "",
                    localId: "",
                },
              });
        }} >
            <FontAwesome style={styles.iconBarTop} name={"power-off"}   size={25} />
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    iconBarTop:{
        height: 25, 
        width: 25,
        marginRight: 20, 
        paddingRight: 10,
        alignContent: 'center',
        color:"#CCC"
    }
  });
export default HeaderRight;