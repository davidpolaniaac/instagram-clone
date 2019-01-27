import React, { Component } from 'react';
import {
  View, StyleSheet, Alert,
} from 'react-native';
import { blur } from 'redux-form';
import { connect } from 'react-redux';
import SeleccionarImagen from '../SelectImage';
import {
  actionLoadImagePublication, actionCleanImagePublication, actionUpImage, actionCleanUploadPublication,
} from '../../Store/Actions';
import SelectGalleryForm from './SelectGalleryForm';
import CONSTANTS from '../../Store/Constants';


class SelectGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillUnmount() {
    this.props.cleanImage();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.statusUploadPublication !== nextProps.statusUploadPublication) {
      switch (nextProps.statusUploadPublication) {
        case CONSTANTS.SUCCESS:
          Alert.alert('Success', 'Successful publication', [{
            text: 'OK',
            onPress: () => {
              this.props.navigation.goBack();
              this.props.cleanStatusFromPublication();
            },
          }]);
          break;
        case CONSTANTS.ERROR:
          Alert.alert('Error', 'Publication was not successful', [{
            text: 'OK',
            onPress: () => {
              this.props.navigation.goBack();
              this.props.cleanStatusFromPublication();
            },
          }]);
          break;

        default:
          break;
      }
    }
  }

  registryImage= (values) => {
    this.props.uploadImage(values);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <SeleccionarImagen image={this.props.image.image} load={this.props.loadImage} radius />
        </View>
        <View style={styles.text}>
          <SelectGalleryForm registry={this.registryImage} image={this.props.image.image} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  image: {
    flex: 2,
  },
  text: {
    flex: 2,
  },
});


const mapStateToProps = state => ({
  image: state.reducerImagePublication,
  statusUploadPublication: state.reducerUploadStatusPublication.status,
});

const mapDispatchToProps = dispatch => ({
  uploadImage: (data) => {
    dispatch(actionUpImage(data));
  },
  loadImage: (image) => {
    dispatch(actionLoadImagePublication(image));
    dispatch(blur('SelectGalleryForm', 'image', Date.now()));
  },
  cleanImage: () => {
    dispatch(actionCleanImagePublication());
  },
  cleanStatusFromPublication: () => {
    dispatch(actionCleanUploadPublication());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectGallery);
