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
      keyboardType="default"
      autoCapitalize="none"
      onBlur={props.input.onBlur}
      multiline
    />
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
    errors.image = 'Imagen requerida';
  }
  if (values.text && values.text.length > 140) {
    errors.text = 'deben ser menor de 140 caracteres';
  }

  return errors;
};

const SeleccionarGaleriaForm = props => (
  <View>
    <Field name="image" component={fieldImage} />
    <Field name="text" component={field} ph="Texto de publicacion" />
    <Button
      title="Registrar"
      onPress={props.handleSubmit(props.registro)}
    />
  </View>
);


const styles = StyleSheet.create({
  fieldInput: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  errors: {
    color: '#FF0000',
  },
});

export default reduxForm(
  {
    form: 'SeleccionarGaleriaForm',
    validate,
  },
)(SeleccionarGaleriaForm);
