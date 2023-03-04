import { Image, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Home from "./Home";
import Search from "../search/Search";
import Notifications from "../notifications/Notifications";
import Profiles from "../users/Profiles";
import Cam from "../posts/Cam";

import UseUser from '../../hooks/UseUser';

const TMenuBottom = createBottomTabNavigator();

const Tabs = () => {
    const { user, setUser } = UseUser();
    return (
        <>
        <TMenuBottom.Navigator 
            screenOptions={({route})=>({
                tabBarIcon:({focused=false,color="#000", size=24})=>{
                    let icon = "xmark";
                    switch(route.name.toLocaleLowerCase()){
                        case 'home':  icon = "home";  break;
                        case 'search': icon = "search"; break;
                        case 'notifications': icon = "bell"; break;
                        case 'cam': icon = "camera-retro"; break;
                        case 'profile': icon = "user"; break;
                        default: icon="xmark"; break;
                    }
                    
                    if(route.name.toLocaleLowerCase()==='profile') {
                       
                        return <Image style={{height: 38, width: 38,borderRadius: 42 / 2 }} source={{uri: user.data.avatar_url}}  />
                    }else{
                        return <FontAwesome name={icon} color={color} size={size} />;
                    }
                    
                  
                },
                Headers:false,
                freezeOnBlur: false,
                headerShown: false,
                tabBarActiveBackgroundColor: "#F2AA1F",
                tabBarActiveTintColor: "#FFF",
                tabBarInactiveTintColor: "#CCC",
                tabBarInactiveBackgroundColor:"#114358",
                tabBarShowLabel:false
            }
            
            )}>
            <TMenuBottom.Screen name="home" options={{ title: 'Inicio' }} component={Home} />
            <TMenuBottom.Screen name="search" options={{ title: 'Buscar' }} component={Search} />
            <TMenuBottom.Screen name="cam" options={{ title: 'Camara' }} component={Cam} />
            <TMenuBottom.Screen name="notifications" options={{ title: 'Notificaciones' }} component={Notifications} />
            <TMenuBottom.Screen name="Profile" options={{ title: 'Perfil' }} component={Profiles} />
        </TMenuBottom.Navigator>
        </>
    );
};

export default Tabs;