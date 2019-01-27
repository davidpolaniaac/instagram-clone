import React from 'react';
import {
  Image, View, TouchableOpacity,
} from 'react-native';
import { ImagePicker, Permissions } from 'expo';

const SeleccionarImagen = (props) => {
  const permiso = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
  };

  const pickImage = async () => {
    await permiso();
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      props.cargar(result);
    }
  };

  const radius = { borderRadius: props.radius ? 0 : 80 };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={pickImage}>
        {props.image ? <Image source={{ uri: props.image.uri }} style={{ width: 160, height: 160, ...radius }} /> : <Image source={require('../assets/profile-default.png')} style={{ width: 160, height: 160, ...radius }} />}
      </TouchableOpacity>
    </View>
  );
};

export default SeleccionarImagen;
