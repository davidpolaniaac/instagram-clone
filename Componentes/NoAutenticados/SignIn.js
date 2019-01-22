import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';
import { actionLogin } from '../../Store/ACCIONES';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  signIndeUsuario = (values) => {
    this.props.login(values);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SignInForm login={this.signIndeUsuario} />
        <Button
          title="SignUp"
          onPress={() => { navigation.navigate('SignUp'); }}
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
  login: (datos) => {
    dispatch(actionLogin(datos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
