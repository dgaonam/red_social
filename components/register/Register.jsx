import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image,Alert,ActivityIndicator } from 'react-native';
import { useState } from "react"
import { userCreate } from '../../config/auth';
import { writeUserData } from '../../config/database';

import UseUser from '../../hooks/UseUser';

const Register = () => {
    const [userAvatar, setUserAvatar] = useState(null);
    const [fullName, setFullName] = useState('Daniel Alejandro Gaona Mercado');
    const [email, setEmail] = useState('isc.gaona@gmail.com');
    const [password, setPassword] = useState('12qwaszx');
    const [confirmPassword, setConfirmPassword] = useState('12qwaszx');

    const { user, setUser } = UseUser();

    const [isLoading, setIsLoading] = useState(false);

    const onHandlerEmail=(email)=>{
        setEmail(()=>email);
        console.info(email);
    }
    const onHandlerPassword=(password)=>{
        setPassword(()=>password);
        console.info(password);
    }
    const onHandlerPasswordConfirm=(confirmPassword)=>{
        confirmPassword(()=>confirmPassword);
    }
    const onHandlerFullName=(fullName)=>{
        setFullName(()=>fullName);
    }

    if (isLoading) {
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#3B82F6" />
          </View>
        );
      }

    const RegisterNewUser= async()=>{
        setIsLoading(true);
        await userCreate(email,password).then( async(result)=> {
            console.info(result);
            let created = await writeUserData("user",result.uid,email,fullName);
            if(created===true){
                setUser({ session: true, data: { email: result.email, displayName: fullName, localId: result.uid } });
                Alert.alert(
                    "Registro de usuarios",
                    "Registrado de forma correcta"
                  );
                  setIsLoading(false);
            }else{
                Alert.alert(
                    "Registro de usuarios",
                    "No se logro registrar al usuario"
                  );
                  setIsLoading(false);
            }
            
        }).catch((error)=>{
            console.error(error);
            setIsLoading(false);
        });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.uploadContainer} >
                <Image style={styles.uploadImageIcon} source={require('../../assets/adaptive-icon.png')} />
                <Text style={styles.uploadImageTitle}>Subir avatar</Text>
            </TouchableOpacity>
            <TextInput
                autoCapitalize='none'
                placeholder="Nombre (s) Apellido (s)"
                placeholderTextColor="#CCCCCC"
                style={styles.input}
                value={fullName}
                onChangeText={onHandlerFullName}
            />
            <TextInput
                autoCapitalize='none'
                placeholder="Correo electronico"
                placeholderTextColor="#CCCCCC"
                style={styles.input}
                value={email}
                onChangeText={onHandlerEmail}
            />
            <TextInput
                autoCapitalize='none'
                placeholder="Contraseña"
                placeholderTextColor="#CCCCCC"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={onHandlerPassword}
            />
            <TextInput
                autoCapitalize='none'
                placeholder="Confirma contraseña"
                placeholderTextColor="#CCCCCC"
                secureTextEntry
                style={styles.input}
                value={confirmPassword}
                onChangeText={onHandlerPasswordConfirm}
            />
            <TouchableOpacity style={styles.register} onPress={RegisterNewUser}>
                <Text style={styles.registerLabel} >Registrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    uploadContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadImageIcon: {
        width: 100,
        height: 100
    },
    userAvatar: {
        width: 128,
        height: 128,
        borderRadius: 128 / 2,
        borderStyle: 1
    },
    uploadImageTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 16
    },
    input: {
        borderColor: '#114358',
        borderRadius: 8,
        borderWidth: 1,
        fontSize: 16,
        marginHorizontal: 24,
        marginVertical: 8,
        padding: 12,
    },
    register: {
        backgroundColor: '#114358',
        borderRadius: 8,
        fontSize: 16,
        marginHorizontal: 24,
        marginVertical: 8,
        padding: 16,
    },
    registerLabel: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});

export default Register;