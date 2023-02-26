import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import UserContext from "./context/UserContext";

import Login from "./components/login/Login";
import Register from './components/register/Register';
import Reset from './components/password/Reset';

import Home from "./components/home/Home";

import { useState } from 'react';



export default function App() {

  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState({
    session: false,
    data: {
      email: "",
      displayName: "",
      localId: "",
    }
  });

  if (user.session === false) {
    return (
      <UserContext.Provider value={{ user, setUser }}>
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
              component={Reset}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    );
  }

  return (
    <Home />
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
