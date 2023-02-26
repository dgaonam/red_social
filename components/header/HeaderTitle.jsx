import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';


const HeaderTitle = () => {
    return (
        <TouchableOpacity style={{ flex: 1}} onPress={() => alert("pagina web")} >
            <Text style={{color: "#000"}}>RedeSocial</Text>
        </TouchableOpacity>
    );
};
export default HeaderTitle;