import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text> Profile </Text>
        <Button
          title="Publicacion"
          onPress={() => { navigation.navigate('Publicacion'); }}
        />
      </View>
    );
  }
}
