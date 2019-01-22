import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import { actionRegistro } from '../../Store/ACCIONES';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  registrodeUsuario = (values) => {
    this.props.registro(values);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SignUpForm registro={this.registrodeUsuario} />
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
});

const mapDispatchToProps = dispatch => ({
  registro: (datos) => {
    dispatch(actionRegistro(datos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
