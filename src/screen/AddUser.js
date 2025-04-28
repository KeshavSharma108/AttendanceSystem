import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import Mainlayout from '../component/Mainlayout';

const AddUser = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [loading, setLoading] = useState(null);
  const [torch, setTorch] = useState('off');
  const [photoUri, setPhotoUri] = useState(null);
  
  const cameraRef = useRef(null); // Fix camera reference initialization

  const cameraPermission = async () => {
    const cameraPermissionStatus = await Camera.getCameraPermissionStatus();
    if (cameraPermissionStatus === 'granted') {
      console.log('Camera permission granted!');
    } else if (cameraPermissionStatus === 'denied') {
      console.log('Camera permission denied! Requesting permission...');
      const newStatus = await Camera.requestCameraPermission();
      console.log(`New permission status: ${newStatus}`);
    } else if (cameraPermissionStatus === 'restricted') {
      console.log('Camera permission restricted! Please enable it in settings.');
    }
  };

  useEffect(() => {
    cameraPermission();
  }, []);

  const handleCamera = () => {
    setIsCameraOpen((prevState) => !prevState);
  };

  const device = useCameraDevice('front');
  if (!device) {
    return <Text>No Camera Device Found!</Text>;
  }

  const takePhoto = async () => {
    setLoading(true);
    try {
      if (!cameraRef.current) {
        throw new Error('Camera Ref is Null');
      }
      console.log('Taking Photo....');
      const photo = await cameraRef.current.takePhoto({
        qualityPrioritization: 'quality',
        flash: torch,
        enableAutoEyeReduction: true,
      });
      console.log(photo);
      setPhotoUri(`file://${photo.path}`); // Save photo URI
      setLoading(false);
    } catch (error) {
      console.log(error, 'Photo Error');
      setLoading(false);
    }
  };

  

  return (
    <Mainlayout>
      {isCameraOpen && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          ref={cameraRef} // Assign ref properly
          photo={true}
          photoQualityBalance="quality"
        />
      )}

      {/* Display captured photo */}
      {photoUri && <Image source={{ uri: photoUri }} style={styles.image} />}

      <TouchableOpacity onPress={takePhoto}>
        <Text>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCamera} style={styles.button}>
        <Text style={styles.text}>{isCameraOpen ? 'Close Camera' : 'Open Camera'}</Text>
      </TouchableOpacity>
    </Mainlayout>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'cyan',
    borderRadius: 50,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});