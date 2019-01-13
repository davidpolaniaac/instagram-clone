import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button, TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const field = props => (
  <View style={styles.fieldInput}>>
    <TextInput
      onChangeText={props.input.onChange}
      placeholder={props.ph}
      value={props.input.value}
      keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
      onBlur={props.input.onBlur}
    />
    <View style={styles.linea} />
    { props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text> }
  </View>
);

const validate = (values) => {
  const errors = {};

  if (!values.correo) {
    errors.correo = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Correo invalido';
  } else if (values.correo.length < 5) {
    errors.correo = 'deben ser al menos 5 caracteres';
  } else if (values.correo.length > 10) {
    errors.correo = 'deben ser menor de 10 caracteres';
  }

  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length < 5) {
    errors.password = 'deben ser al menos 5 caracteres';
  } else if (values.correo.length > 10) {
    errors.password = 'deben ser menor de 10 caracteres';
  }
  return errors;
};

const SignInForm = props => (
  <View>
    <Field name="correo" component={field} ph="corre@correo.com" />
    <Field name="password" component={field} ph="********" />
    <Button
      title="SignIn"
      onPress={props.handleSubmit(values => console.log('Hola', values))}
    />
  </View>
);

const styles = StyleSheet.create({
  fieldInput: {
    marginBottom: 16,
  },
  linea: {
    backgroundColor: '#DCDCDC',
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
});

export default reduxForm(
  {
    form: 'SignInForm',
    validate,
  },
)(SignInForm);
