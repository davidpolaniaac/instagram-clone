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
    errors.image = 'Required image';
  }
  if (values.text && values.text.length > 140) {
    errors.text = 'must be less than 140 characters';
  }

  return errors;
};

const SelectGalleryForm = props => (
  <View>
    <Field name="image" component={fieldImage} />
    <Field name="text" component={field} ph="Publication text" />
    <Button
      title="to post"
      onPress={props.handleSubmit(props.registry)}
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
    form: 'SelectGalleryForm',
    validate,
  },
)(SelectGalleryForm);
