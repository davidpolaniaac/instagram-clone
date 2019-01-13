import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Comentarios extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> Comentarios </Text>
        <Button
          title="Autor"
          onPress={() => { navigation.navigate('Autor'); }}
        />
      </View>
    );
  }
}
