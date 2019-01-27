import React, { Component } from 'react';
import {
  View, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import SignUpForm from './Forms/SignUpForm';
import {
  actionRegistry, actionLoadImageSignUp, actionCleanImageSignUp,
} from '../../Store/Actions';
import SelectImage from '../SelectImage';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillUnmount() {
    this.props.cleanImage();
  }

  registrodeuser = (values) => {
    this.props.registry(values);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SelectImage image={this.props.image.image} load={this.props.loadImage} />
        <SignUpForm
          registry={this.registrodeuser}
          image={this.props.image.image}
        />
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
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  image: state.reducerImageSignUp,
});

const mapDispatchToProps = dispatch => ({
  registry: (data) => {
    dispatch(actionRegistry(data));
  },
  loadImage: (image) => {
    dispatch(actionLoadImageSignUp(image));
    dispatch(blur('SignUpForm', 'image', Date.now()));
  },
  cleanImage: () => {
    dispatch(actionCleanImageSignUp());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
