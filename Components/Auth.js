import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NoAuthenticatedRoutes } from './NotAuthenticated/NoAuthenticatedRoutes';
import { AuthenticatedRoutes } from './Authenticated/AuthenticatedRoutes';
import { actionEstablishSession, actionSignOff } from '../Store/Actions';
import { authentication } from '../Store/Services/Firebase';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.authentication();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.user ? <AuthenticatedRoutes /> : <NoAuthenticatedRoutes />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  user: state.reducerSession,
});

const mapDispatchToProps = dispatch => ({
  authentication: () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        dispatch(actionEstablishSession(user));
      } else {
        dispatch(actionSignOff());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
