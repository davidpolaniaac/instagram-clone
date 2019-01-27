import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

export default class Comments extends Component {
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
      <View style={styles.container}>
        <Text> Comments </Text>
        <Button
          title="Author"
          onPress={() => { navigation.navigate('Author'); }}
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
