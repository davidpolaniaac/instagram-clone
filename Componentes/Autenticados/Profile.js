import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';
import { autenticacion } from '../../Store/Servicios/Firebase';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <Button
          title="Publicacion"
          onPress={() => { navigation.navigate('Publicacion'); }}
        />
        <Button
          title="Cerrar session"
          onPress={() => { autenticacion.signOut(); }}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
