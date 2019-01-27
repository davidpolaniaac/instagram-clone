import React, { Component } from 'react';
import {
  View, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Forms/SignInForm';
import { actionLogin } from '../../Store/Actions';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  userSignIn = (values) => {
    this.props.login(values);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SignInForm login={this.userSignIn} />
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
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: (data) => {
    dispatch(actionLogin(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
