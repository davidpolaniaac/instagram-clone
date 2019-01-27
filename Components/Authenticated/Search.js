import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text> Search </Text>
        <Button
          title="Publications"
          onPress={() => { navigation.navigate(''); }}
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
