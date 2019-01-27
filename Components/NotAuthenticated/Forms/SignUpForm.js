import React from 'react';
import {
  View, Text, StyleSheet, Button, TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const field = props => (
  <View style={styles.fieldInput}>
    <TextInput
      onChangeText={props.input.onChange}
      placeholder={props.ph}
      value={props.input.value}
      keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmation')}
      onBlur={props.input.onBlur}
    />
    <View style={styles.linea} />
    { props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text> }

  </View>
);

const fieldImage = props => (
  <View>
    { props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text> }
  </View>
);

const validate = (values, props) => {
  const errors = {};
  if (!props.image) {
    errors.image = 'Required image';
  }
  if (!values.name) {
    errors.name = 'required';
  } else if (values.name.length < 5) {
    errors.name = 'must be at least 5 characters';
  } else if (values.name.length > 10) {
    errors.name = 'must be less than 10 characters';
  }

  if (!values.email) {
    errors.email = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email';
  } else if (values.email.length < 5) {
    errors.email = 'must be at least 5 characters';
  }

  if (!values.password) {
    errors.password = 'required';
  } else if (values.password.length < 5) {
    errors.password = 'must be at least 5 characters';
  }

  if (!values.confirmation) {
    errors.confirmation = 'required';
  } else if (values.confirmation !== values.password) {
    errors.confirmation = 'The password must match';
  }

  return errors;
};

const SignUpForm = props => (
  <View style={styles.container}>
    <Field name="image" component={fieldImage} />
    <Field name="name" component={field} ph="name" />
    <Field name="email" component={field} ph="xxxxx@email.com" />
    <Field name="password" component={field} ph="********" />
    <Field name="confirmation" component={field} ph="*********" />
    <Button
      title="Register"
      onPress={props.handleSubmit(props.registry)}
    />
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
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
    form: 'SignUpForm',
    validate,
  },
)(SignUpForm);
