import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../home/Home'; '../home/Home';
import Notifications from '../notifications/Notifications';
import Profiles from '../profiles/Profiles';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Feed') {
                    const homeIcon = focused ? require('../../assets/home-active.png') : require('../../assets/home.png');
                    return <Image style={styles.tabBarIconStyle} source={homeIcon} />
                } else if (route.name === 'Notifications') {
                    const notificationIcon = focused ? require('../../assets/bell-active.png') : require('../../assets/bell.png');
                    return <Image style={styles.tabBarIconStyle} source={notificationIcon} />
                } else if (route.name === 'Profile') {
                    const profileIcon = focused ? require('../../assets/user-active.png') : require('../../assets/user.png');
                    return <Image style={styles.tabBarIconStyle} source={profileIcon} />
                }
                return null;
            },
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarActiveTintColor: '#3B82F6',
            tabBarInactiveTintColor: '#000',
            headerShown: false,
            unmountOnBlur: true
        })}>
            <Tab.Screen name="Feed" component={Home} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Profile" component={Profiles} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarIconStyle: {
      width: 24,
      height: 24
    },  
    tabBarLabelStyle: {
      fontSize: 14,
      fontWeight: 'bold'
    }
  });

export default Tabs;