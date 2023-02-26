import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';


const HeaderRight = () => {
    return (
        <TouchableOpacity style={{ flex: 1}} onPress={() => alert("publicar")} >
            <Image  source={{uri: require('../../assets/plus.png')}} />
            <Text style={{color: "#000"}}>Publicar</Text>
        </TouchableOpacity>
    );
};
export default HeaderRight;