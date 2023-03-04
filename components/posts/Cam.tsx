import { useState, useRef, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { Camera, CameraType } from 'expo-camera';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons,FontAwesome } from '@expo/vector-icons';


const Cam = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permisos, setPermisos] = Camera.useCameraPermissions();
  const [image, setImage] = useState(null);
  const cameraReferencia = useRef(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setPermisos(cameraStatus.status === 'granted');
    })();
  }, []);

  const tomarFoto = async () => {
    if (cameraReferencia) {
      try {
        const data = await cameraReferencia.current.takePictureAsync();
        setImage(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const save = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image.uri);
        MediaLibrary.createAlbumAsync('redes_sociales', asset)
          .then(() => {
            console.log('Album created!');
            setImage(null);
            alert("Imagen guardada de forma correctamente!");
          })
          .catch(error => {
            console.log('err', error);
          })
      } catch (error) {
        console.log("Error crear albun ",error);
        console.info("Imagen ",image);
      }
    } else {
      alert("No image selected");
    }
  }

  if (!permisos) {
    return <View />;
  }

  if (!permisos.granted) {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity onPress={() => { alert("Me gusta") }}>
          <MaterialIcons name={"perm-device-info"} color={"#CCC"} size={24}  />
          <Text style={{ textAlign: 'center' }}>Necesitas permisos para acceder a la camara </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      {image === null ?
        <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraReferencia}>

          <View style={styles.buttonContainer}>
            <FontAwesome name={"refresh"} color={"#FFFFFF"} size={24} onPress={() => { setType(type === CameraType.back ? CameraType.front : CameraType.back) }} />

          </View>
        </Camera> : <View style={styles.camera}>
          <Image style={styles.image} source={image} />
        </View>
      }
      <View style={styles.buttonPanel}>
        {image === null ? (
            <TouchableOpacity style={{ flex:1, backgroundColor: "#114358",flexDirection:'row', justifyContent:'center',padding:10,alignItems:'center',borderRadius: 8 }} onPress={tomarFoto}>
            <FontAwesome style={{paddingRight: 15}} name={"camera"} color={"#FFFFFF"} size={24}  /><Text style={{color:"#FFFFFF"}}>Tomar Foto</Text>
            </TouchableOpacity>
            )
          : (<View style={{flex:1, flexDirection: 'row', padding: 5 }}>
            <View>
            <TouchableOpacity style={{ flex:1, backgroundColor: "#114358",flexDirection:'row', justifyContent:'center',padding:10,alignItems:'center',borderRadius: 8, marginRight: 5,}} onPress={save}>
              <FontAwesome style={{paddingRight: 15}} name={"save"} color={"#FFF"} size={24} onPress={save} />
              <Text style={{color:"#FFFFFF"}}>Guardar</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={{ flex:1, backgroundColor: "#114358",flexDirection:'row', justifyContent:'center',padding:10,alignItems:'center',borderRadius: 8 }} onPress={() => { setImage(null) }}>
              <FontAwesome style={{paddingRight: 15}} name={"trash"} color={"#FFF"} size={24} onPress={() => { setImage(null) }} />
              <Text style={{color:"#FFFFFF"}}>Descartar</Text>
            </TouchableOpacity>
            </View>
          </View>)}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCam: {
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
  },

  camera: {
    flex: 10,
    width: '98%',
    height:"98%"
  },
  buttonContainer: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    textAlign: 'right',
    justifyContent: 'flex-start',
    marginLeft: '78%',

  },
  buttonPanel: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    textAlign: 'center',
    margin: 10,
    padding: 10,
    width:"50%"

  },
  imageContainer: {
    flex: 1,
    paddingTop: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },


});

export default Cam;