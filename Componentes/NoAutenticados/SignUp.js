import React, { Component } from 'react';
import {
  View, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import SignUpForm from './Formas/SignUpForm';
import {
  actionRegistro, actionCargarImageSignUp, actionLimpiarImageSingUp,
} from '../../Store/ACCIONES';

import SeleccionarImagen from '../SeleccionarImagen';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillUnmount() {
    this.props.LimpiarImage();
  }

  registrodeUsuario = (values) => {
    this.props.registro(values);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SeleccionarImagen image={this.props.image.image} cargar={this.props.cargarImage} />
        <SignUpForm registro={this.registrodeUsuario} image={this.props.image.image} />
        <Button
          title="SignIn"
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#90EE90',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
  image: state.reducerImagenSignUp,
});

const mapDispatchToProps = dispatch => ({
  registro: (datos) => {
    dispatch(actionRegistro(datos));
  },
  cargarImage: (image) => {
    dispatch(actionCargarImageSignUp(image));
    dispatch(blur('SignUpForm', 'image', Date.now()));
  },
  LimpiarImage: () => {
    dispatch(actionLimpiarImageSingUp());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
