import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Seleccion from './Seleccion';

console.disableYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: 'intagram-cloen' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Seleccion />
        </Provider>
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
