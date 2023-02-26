import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';


const HeaderLeft = () => {
    return (
        <TouchableOpacity style={{ flex: 1}} onPress={() => alert("chat")} >
            <Image  source={require('../../assets/chat.png')} />
            <Text style={{color: "#000"}}>Chat</Text>
        </TouchableOpacity>
    );
};
export default HeaderLeft;