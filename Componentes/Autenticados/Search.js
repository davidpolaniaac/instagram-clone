import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text> Search </Text>
        <Button
          title="Publicacion"
          onPress={() => { navigation.navigate('Publicacion'); }}
        />
      </View>
    );
  }
}
