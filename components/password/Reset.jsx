import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState } from "react"

const Reset = () => {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.uploadContainer}>
                <Image style={styles.uploadImageIcon} source={require('../../assets/adaptive-icon.png')} />
                <Text style={styles.uploadImageTitle}>¿Tienes problemas para iniciar sesion?</Text>
                <Text style={{color:"#CCCCCC"}}>Ingresa tu correo electronico y te enviaremos un enlace para que recuperes el accesos de tu cuenta</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    autoCapitalize='none'
                    placeholder="Correo electronico"
                    placeholderTextColor="#CCCCCC"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.register} >
                    <Text style={styles.registerLabel} >Enviar enlace de inicio de sesion</Text>
                </TouchableOpacity>
            </View>
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
        width: 300,
        height: 300
    },
    userAvatar: {
        width: 128,
        height: 128,
        borderRadius: 128 / 2,
        borderStyle: "1px solid"
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

export default Reset;