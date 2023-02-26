import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image,ActivityIndicator  } from 'react-native';
import { useState } from "react"
import { sendPasswordReset } from '../../config/auth';




const Reset = () => {
    const [email, setEmail] = useState('isc.gaona@gmail.com');
    const [isLoading, setIsLoading] = useState(false);
    const onHandlerEmail=(email)=>{
        setEmail(()=>email);
        console.info(email);
    }

    if (isLoading) {
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#3B82F6" />
          </View>
        );
      }

    const sendEmail= async()=>{
        setIsLoading(true);
        let send = await sendPasswordReset(email);
        if(send){
            alert("Se envio corre electronico, favor de revisar el enlace y restablecer la contraseña");
            setIsLoading(false);
        }else{
            alert("Ocurrio un erro al enviar el correo");
            setIsLoading(false);
        }
        //console.log(send);
      
    }


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
                    value={email}
                onChangeText={onHandlerEmail}
                />
                <TouchableOpacity style={styles.register} onPress={sendEmail} >
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

export default Reset;