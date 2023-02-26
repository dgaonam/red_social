import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';


const HeaderTitle = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity  onPress={() => alert("pagina web")} >
            <Text style={{color: "#FFFFFF"}}>RedeSocial</Text>
        </TouchableOpacity>
        </View>
    );
};
export default HeaderTitle;