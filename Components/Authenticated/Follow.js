import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

export default class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text> Follow </Text>
        <Button
          title="Author"
          onPress={() => { navigation.navigate('Author'); }}
        />
        <Button
          title="Comments"
          onPress={() => { navigation.navigate('Comments'); }}
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
    backgroundColor: '#f1f1f1',
  },
});
