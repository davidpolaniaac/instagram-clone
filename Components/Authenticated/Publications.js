import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Publications extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation, item, autor } = this.props;
    const { width } = Dimensions.get('window');
    const factor = item.width / width;
    const height = item.height / factor;

    return (
      <View>
        <View style={styles.header}>
          <Image source={{ uri: autor.photoURL }} style={{ width: 48, height: 48, borderRadius: 24 }} />
          <Text>{autor.name}</Text>
        </View>
        <View>
          <Image source={{ uri: item.secure_url }} style={{ width, height }} />
        </View>
        <View style={styles.footer}>
          <View style={styles.icons}>
            <Ionicons name="md-heart-outline" color="#000000" size={30} style={styles.icon} />
            <Ionicons name="md-chatboxes" color="#000000" size={30} style={styles.icon} />
          </View>
          <View style={styles.text}>
            <Text>{item.text}</Text>
          </View>
          <Text>Comments</Text>
        </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  footer: {
    marginHorizontal: 16,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
    marginVertical: 16,
  },
  text: {
    marginBottom: 16,
  },
});

export default Publications;
