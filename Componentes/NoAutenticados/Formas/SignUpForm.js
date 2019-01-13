import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button, TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => (
  <View>
    <TextInput
      onChangeText={props.input.onChange}
      placeholder={props.ph}
      value={props.input.value}
      keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
      onBlur={props.input.onBlur}
    />
    { props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text> }
  </View>
);

const validate = (values) => {
  const errors = {};
  if (!values.nombre) {
    errors.nombre = 'requerido';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'deben ser al menos 5 caracteres';
  } else if (values.nombre.length > 10) {
    errors.nombre = 'deben ser menor de 10 caracteres';
  }

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

  if (!values.confirmacion) {
    errors.confirmacion = 'requerido';
  } else if (values.confirmacion !== values.password) {
    errors.confirmacion = 'El password debe considir';
  }

  return errors;
};

const SignUpForm = props => (
  <View>
    <Text> Redux Form</Text>
    <Field name="nombre" component={fieldNombre} ph="nombre" />
    <Field name="correo" component={fieldNombre} ph="coore@correo.com" />
    <Field name="password" component={fieldNombre} ph="********" />
    <Field name="confirmacion" component={fieldNombre} ph="*********" />
    <Button
      title="Registrar"
      onPress={props.handleSubmit(values => console.log('Hola', values))}
    />
  </View>
);

export default reduxForm(
  {
    form: 'SignUpForm',
    validate,
  },
)(SignUpForm);
