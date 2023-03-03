import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useState } from "react"

import { loginFacebook, login } from '../../config/auth';
import { readUserData } from '../../config/database';

import UseUser from '../../hooks/UseUser';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('isc.gaona@gmail.com');
  const [password, setPassword] = useState('12qwaszx');
  const [isLoading, setIsLoading] = useState(false);

  const onHandlerEmail = (email) => {
    setEmail(() => email);
    console.info(email);
  }
  const onHandlerPassword = (password) => {
    setPassword(() => password);
    console.info(password);
  }

  const { user, setUser } = UseUser();

  const loginWhitFacebook = async () => {
    setIsLoading(true);
    await loginFacebook().then(
      (result) => {
        setUser({ session: true, data: { email: result.email, displayName: result.displayName, localId: result.uid } });
        setIsLoading(false);
      }
    ).catch((error) => {
      console.error("Algo salio mal", error);
      setIsLoading(false);
    });

  }

  const loginWhitEmail = async () => {
    setIsLoading(true);
    await login(email, password).then(async(result) => {
      //console.info(result);
      if (typeof result.user?.email !== 'undefined') {
        let avatar_url = await readUserData("users",result.user?.uid );
        setUser({ session: true, data: { email: result.user?.email, displayName: avatar_url.fullName, localId: result.user?.uid, avatar_url: avatar_url.avatar_url } });
        setIsLoading(false);
      } else if (typeof result?.code === 'number') {
        console.info("regreso un error", result);
        setIsLoading(false);
      } else {
        console.error("No entro en if");
        setIsLoading(false);
      }
    }).catch((error) => {
      switch (error.message) {
        case "Firebase: Error (auth/invalid-email).":
          console.info("Correo invalido");
          break;
        case "Error (auth/wrong-password).":
          console.info("Password incorrect");
          break;
        case "Firebase: Error (auth/user-not-found).":
          console.info("Email not found");
          break;
      }
      console.log(error.message);
      setIsLoading(false);
    });
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
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
          value={email}
          onChangeText={onHandlerEmail}
        />
        <TextInput
          autoCapitalize='none'
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={onHandlerPassword}
        />
        <TouchableOpacity style={styles.login} onPress={loginWhitEmail} >
          <Text style={styles.loginLabel}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ borderColor: "#CCCCCC", borderStyle: "solid", borderBottomWidth: 2, width: "40%", alignContent: 'center' }} />
            <Text style={{ color: "#CCCCCC", justifyContent: 'flex-start', paddingLeft: 20, paddingRight: 20 }}>Or</Text>
            <Text style={{ borderColor: "#CCCCCC", borderStyle: "solid", borderBottomWidth: 2, width: "40%", alignContent: 'center' }} />
          </View>
          <View style={{ textAlign: "center" }}>
            <TouchableOpacity style={styles.facebook} onPress={loginWhitFacebook}>
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
        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', borderColor: "#F1ECE7", borderWidth: 2 }} onPress={() => navigation.navigate('Register')} >
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
    paddingBottom: 10,
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