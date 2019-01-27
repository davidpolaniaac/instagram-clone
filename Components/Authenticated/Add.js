import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Add </Text>
        <Button
          title="Select Gallery"
          onPress={() => { navigation.navigate('SelectGallery'); }}
        />
        <Button
          title="Take Photo"
          onPress={() => { navigation.navigate('SelectGallery'); }}
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
