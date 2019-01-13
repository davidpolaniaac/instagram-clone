import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text> Follow </Text>
        <Button
          title="Autor"
          onPress={() => { navigation.navigate('Autor'); }}
        />
      </View>
    );
  }
}
