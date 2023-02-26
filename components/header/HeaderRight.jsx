import React from 'react';
import { TouchableOpacity, Image,View ,StyleSheet} from 'react-native';

import UseUser from '../../hooks/UseUser';

const HeaderRight = ({navigation}) => {
    const { user, setUser } = UseUser();
    return (
        <View style={styles.container}>
        <TouchableOpacity  onPress={() => alert("chat")} >
            <Image style={styles.iconBarTop} source={require('../../assets/chat.png')} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => alert("publicar")} >
            <Image style={styles.iconBarTop} source={require('../../assets/plus.png')} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => alert("Galeria")} >
            <Image style={styles.iconBarTop} source={require('../../assets/image-gallery.png')} />
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
            <Image style={styles.iconBarTop} source={require('../../assets/power-off.png')} />
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconBarTop:{
        height: 25, 
        width: 25,
        margin: 10, 
        alignContent: 'center'
    }
  });
export default HeaderRight;