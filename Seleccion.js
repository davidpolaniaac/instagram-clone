import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { RutasAutenticadas } from './Componentes/Autenticados/RutasAutenticadas';
import { actionEstablecerSesion, actionCerrarSesion } from './Store/ACCIONES';
import { autenticacion } from './Store/Servicios/Firebase';

class Seleccion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.autenticacion();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.usuario ? <RutasAutenticadas /> : <RutasNoAutenticadas />}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  usuario: state.reducerSession,
});

const mapDispatchToProps = dispatch => ({
  autenticacion: () => {
    autenticacion.onAuthStateChanged((user) => {
      if (user) {
        dispatch(actionEstablecerSesion(user));
      } else {
        dispatch(actionCerrarSesion());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
