import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import ImagePicker, {
  ImagePickerResponse,
  launchImageLibrary,
  CameraOptions,
} from 'react-native-image-picker';

const Cameras = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef(null);
  const [imageData, setImageData] = useState('');
  const [takePhotoClicked, setTakePhotoClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    checkPermission;
  }, []);
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(checkPermission);
  };
  if (device == null) return <ActivityIndicator />;
  const takePicture = async () => {
    if (camera !== null) {
      const photo = await camera.current.takePhoto();
      setImageData(photo.path);
      setTakePhotoClicked(false);
      console.log(photo.path);
    }
  };
  const openGallery = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.did.cancel) {
        console.log('User canceled image picker');
      } else if (response.error) {
        console.log('Image picker error:', response.error);
      } else if (response.uri) {
        setPreviewImage(response.uri);
        setShowModal(true);
      }
    });
  };
  return (
    <View style={{flex: 1}}>
      {takePhotoClicked ? (
        <View style={{flex: 1}}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo
          />
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#FF3C3C',
              bottom: 10,
              justifyContent: 'center',
              position: 'absolute',
              alignSelf: 'center',
            }}
            onPress={() => {
              takePicture();
            }}></TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {imageData !== '' && (
            <Image
              source={{uri: 'file://' + imageData}}
              style={{width: '90%', height: 200}}
            />
          )}
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              backgroundColor: '#FF3C3C',
              bottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            onPress={() => {
              setTakePhotoClicked(true);
            }}>
            <Text>Click to take Photo...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              backgroundColor: '#FF3C3C',
              bottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            onPress={() => {
              openGallery();
            }}>
            <Text>Open to Gallery </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cameras;
