import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

class SeleccionarGaleria extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SeleccionarGaleria</Text>

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

export default SeleccionarGaleria;
