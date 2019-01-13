import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>SignUp</Text>
        <Button
          title="SignIn"
          onPress={() => { navigation.navigate('SignIn'); }}
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

// make this component available to the app
export default SignUp;
