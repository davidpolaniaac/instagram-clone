import React, { Component } from 'react';
import {
  View, StyleSheet, Alert,
} from 'react-native';
import { blur } from 'redux-form';
import { connect } from 'react-redux';
import SeleccionarImagen from '../SeleccionarImagen';
import {
  actionCargarImagePublicacion, actionLimpiarImagePublicacion, actionSubirImage, actionLimpiarSubirPublicacion,
} from '../../Store/ACCIONES';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';


class SeleccionarGaleria extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillUnmount() {
    this.props.LimpiarImage();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.estadoSubirPublicacion !== nextProps.estadoSubirPublicacion) {
      switch (nextProps.estadoSubirPublicacion) {
        case 'EXITO':
          Alert.alert('Exito', 'Publicacion exitosa', [{
            text: 'OK',
            onPress: () => {
              this.props.navigation.goBack();
              this.props.limpirarEstadoDePublicacion();
            },
          }]);
          break;
        case 'ERROR':
          Alert.alert('Error', 'Publicacion no fue exitosa', [{
            text: 'OK',
            onPress: () => {
              this.props.navigation.goBack();
              this.props.limpirarEstadoDePublicacion();
            },
          }]);
          break;

        default:
          break;
      }
    }
  }

  registrodeImagen= (values) => {
    this.props.subirImage(values);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <SeleccionarImagen image={this.props.image.image} cargar={this.props.cargarImage} radius />
        </View>
        <View style={styles.text}>
          <SeleccionarGaleriaForm registro={this.registrodeImagen} image={this.props.image.image} />
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
  image: state.reducerImagenPublicacion,
  estadoSubirPublicacion: state.reducerEstadoDeSubirPublicacion.estado,
});

const mapDispatchToProps = dispatch => ({
  subirImage: (datos) => {
    dispatch(actionSubirImage(datos));
  },
  cargarImage: (image) => {
    dispatch(actionCargarImagePublicacion(image));
    dispatch(blur('SeleccionarGaleriaForm', 'image', Date.now()));
  },
  LimpiarImage: () => {
    dispatch(actionLimpiarImagePublicacion());
  },
  limpirarEstadoDePublicacion: () => {
    dispatch(actionLimpiarSubirPublicacion());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
