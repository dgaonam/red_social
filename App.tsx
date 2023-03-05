import { StatusBar } from 'expo-status-bar';
import { StyleSheet, PermissionsAndroid,Platform } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserContext from "./context/UserContext";

import Login from "./components/users/Login";
import Register from './components/users/Register';
import ResetPassword from './components/users/ResetPassword';

import Tabs from './components/home/Tabs';

import HeaderRight from './components/header/HeaderRight';

const Stack = createNativeStackNavigator();

export default function App() {
  const [newPost, setNewPost] = useState(false);
  const [user, setUser] = useState({
    session: false,
    data: {
      email: "",
      displayName: "",
      localId: "",
      avatar_url: ""
    }
  });

 const getPermissions= async()=>{
    if(Platform.OS==='android'){
      let granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ]);

      if(granted !== PermissionsAndroid.RESULTS.GRANTED){
        granted=await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        ]);
      }
    }
 }


  useEffect(()=>{
    getPermissions();
  },[]);

  if (user.session === false) {
    return (
      <UserContext.Provider value={{ user, newPost,setUser,setNewPost }}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#114358',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            }, headerShown: true
          }}  >

            <Stack.Screen
              name="Login"
              options={{ title: 'Practica Final' }}
              component={Login}
            />
            <Stack.Screen
              name="Register"
              options={{ title: 'Registro' }}
              component={Register}
            />
            <Stack.Screen
              name="Reset"
              options={{ title: 'Reset Password' }}
              component={ResetPassword}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    );
  }

  return (
    <UserContext.Provider value={{ user, newPost,setUser,setNewPost }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#114358',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: "#FFFFFF"
          }, headerShown: true,

        }} >
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={
              ({ navigation }) => ({
                headerLeft: () => (
                  <></>
                ),
                headerRight: () => (
                  <HeaderRight />
                ),
                headerTitle: () => (
                  <></>
                )
              })
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
