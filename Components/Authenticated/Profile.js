import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';
import { authentication } from '../../Store/Services/Firebase';

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
          title="Publications"
          onPress={() => { navigation.navigate(''); }}
        />
        <Button
          title="Sign Out"
          onPress={() => { authentication.signOut(); }}
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
    backgroundColor: '#f9f9f9',
  },
});
