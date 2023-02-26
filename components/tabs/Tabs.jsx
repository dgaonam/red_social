import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../home/Home'; '../home/Home';
import Notifications from '../notifications/Notifications';
import Profiles from '../profiles/Profiles';
import Search from '../search/Search';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                    const homeIcon = focused ? require('../../assets/home-active.png') : require('../../assets/home.png');
                    return <Image style={styles.tabBarIconStyle} source={homeIcon} />
                } else if (route.name === 'Search') {
                    const searchIcon = focused ? require('../../assets/search-active.png') : require('../../assets/search.png');
                    return <Image style={styles.tabBarIconStyle} source={searchIcon} />
                } else if (route.name === 'Notifications') {
                    const notificationIcon = focused ? require('../../assets/bell-active.png') : require('../../assets/bell.png');
                    return <Image style={styles.tabBarIconStyle} source={notificationIcon} />
                } else if (route.name === 'Profile') {
                    const profileIcon = focused ? require('../../assets/user-active.png') : require('../../assets/user.png');
                    return <Image style={styles.tabBarIconStyle} source={profileIcon} />
                }
                return null;
            },
            activeColor: "#f0edf6",
            inactiveColor: "#3e2465",
            headerShown: false,
            unmountOnBlur: true,
        })}  barStyle={styles.tabBarBadgeStyle}>
            <Tab.Screen name="Home" options={{ title: 'Inicio' }} component={Home} />
            <Tab.Screen name="Search" options={{ title: 'Buscar' }} component={Search} />
            <Tab.Screen name="Notifications" options={{ title: 'Notificaciones' }} component={Notifications} />
            <Tab.Screen name="Profile" options={{ title: 'Perfil' }} component={Profiles} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarIconStyle: {
      width: 25,
      height: 25,
    },  
    tabBarLabelStyle: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    tabBarBadgeStyle: {
        backgroundColor: "#114358"
    }
  });

export default Tabs;