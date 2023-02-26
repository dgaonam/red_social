import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image,Alert } from 'react-native';
import { useState } from "react"
import { FontAwesome } from '@expo/vector-icons';
import { loginFacebook } from '../../config/auth';

import UseUser from '../../hooks/UseUser';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = UseUser();

  const login = async () => {
    await loginFacebook().then(
      (result) => {
        setUser({ session: true, data: { email: result.email, displayName: result.displayName,localId:result.uid } });
        
      }
    ).catch((error) => {
      console.error("Algo salio mal", error);
    });
    console.log(user);
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImagen} resizeMethod="scale" source={require('../../assets/adaptive-icon.png')} />
      </View>
      <View style={styles.container}>
        <TextInput
          autoCapitalize='none'
          placeholder="Email"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
        <TextInput
          autoCapitalize='none'
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.login} >
          <Text style={styles.loginLabel}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ borderColor: "#CCCCCC", borderStyle: "solid", borderBottomWidth: "2px", width: "40%", alignContent: 'center' }} />
            <Text style={{ color: "#CCCCCC", justifyContent: 'flex-start', paddingLeft: 20, paddingRight: 20 }}>Or</Text>
            <Text style={{ borderColor: "#CCCCCC", borderStyle: "solid", borderBottomWidth: "2px", width: "40%", alignContent: 'center' }} />
          </View>
          <View style={{ textAlign: 'center' }}>
            <TouchableOpacity style={styles.facebook} onPress={login}>
              <Text style={styles.facebookLabel}>Iniciar sesion  con Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={{ textAlign: 'center' }}>
            <TouchableOpacity style={styles.facebook} onPress={() => navigation.navigate('Reset')} >
              <Text style={styles.PasswordLabel}>¿ Olvidaste tu contraseña ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', borderColor: "#F1ECE7", borderWidth: "2px" }} onPress={() => navigation.navigate('Register')} >
          <Text>¿No tienes cuenta?</Text>
          <Text style={{ paddingLeft: 10, color: "#1877F2" }}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    flexDirection: 'column'
  }, logoImagen: {
    width: 200,
    height: 200,
    paddingBottom: '10px',
  }, logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }, input: {
    borderColor: '#F1ECE7',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 12,
  }, loginLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  }, login: {
    backgroundColor: '#114358',
    borderRadius: 8,
    fontSize: 16,
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 16,
  }, facebook: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  },
  facebookLabel: {
    color: '#114358',
    fontWeight: 'bold',
    paddingLeft: 30,
    textTransform: 'uppercase',
    fontSize: 12
  }, PasswordLabel: {
    color: '#114358',
    fontWeight: 'bold',
    paddingLeft: 30,
    textTransform: 'uppercase',
    fontSize: 10
  }
});

export default Login;