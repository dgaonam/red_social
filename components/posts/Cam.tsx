import { useState, useRef, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { Camera, CameraType } from 'expo-camera';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


const Cam = () => {
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
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const save = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        MediaLibrary.createAlbumAsync('Expo', asset)
          .then(() => {
            console.log('Album created!');
            setImage(null);
          })
          .catch(error => {
            console.log('err', error);
          })
      } catch (error) {
        console.log(error);
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
        <Text style={{ textAlign: 'center' }}>Necesitas permisos para acceder a la camara </Text>
        <TouchableOpacity >
          <FontAwesome name={"heart"} color={"#CCC"} size={24} onPress={() => { alert("Me gusta") }} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {image === null ?
        <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraReferencia}>

          <View style={styles.buttonContainer}>
            <FontAwesome name={"refresh"} color={"#CCC"} size={24} onPress={() => { setType(type === CameraType.back ? CameraType.front : CameraType.back) }} />

          </View>
        </Camera> : <View style={styles.camera}>
          <Image source={image} />
        </View>
      }
      <View style={styles.buttonPanel}>
        {image === null ? (<FontAwesome name={"camera"} color={"#CCC"} size={24} onPress={tomarFoto} />)
          : (<View style={styles.buttonPanel}>
            <FontAwesome name={"save"} color={"#CCC"} size={24} onPress={save} />
            <FontAwesome name={"trash"} color={"#CCC"} size={24} onPress={() => { setImage(null) }} />
          </View>)}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 10,
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
    flex: 9,
    width: '98%',

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