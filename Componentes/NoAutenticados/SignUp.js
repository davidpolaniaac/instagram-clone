import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    console.log(this.props.numero);
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>SignUp</Text>
        <SignUpForm />
        <Button
          title="SignIn"
          onPress={() => { navigation.goBack(); }}
        />
        <Button
          title="Aumentar"
          onPress={() => { this.props.aumentar(); }}
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
    backgroundColor: '#2c3e50',
  },
});

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
});

const mapDispatchToProps = dispatch => ({
  aumentar: () => {
    dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
