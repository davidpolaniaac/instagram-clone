import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { RutasAutenticadas } from './Componentes/Autenticados/RutasAutenticadas';

console.disableYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: 'intagram-cloen' };
  }

  render() {
    return (
      <View style={styles.container}>
        <RutasAutenticadas />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
