import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Auth from './Components/Auth';

console.disableYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'instagram-clone' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Auth />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
});
