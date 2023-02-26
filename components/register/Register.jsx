import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState } from "react"

const Register = () => {
    const [userAvatar, setUserAvatar] = useState(null);
    const [firsName, setFirsName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
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
            />
            <TextInput
                autoCapitalize='none'
                placeholder="Correo electronico"
                placeholderTextColor="#CCCCCC"
                style={styles.input}
            />
            <TextInput
                autoCapitalize='none'
                placeholder="Contraseña"
                placeholderTextColor="#CCCCCC"
                secureTextEntry
                style={styles.input}
            />
            <TextInput
                autoCapitalize='none'
                placeholder="Confirma contraseña"
                placeholderTextColor="#CCCCCC"
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity style={styles.register} >
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

export default Register;