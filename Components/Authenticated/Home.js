import React, { Component } from 'react';
import {
  StyleSheet, View, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { actionDownloadPublications } from '../../Store/Actions';
import Publications from './Publications';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.downloadPublications();
  }

  render() {
    const { publications, authors } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={publications}
          renderItem={({ item, index }) => <Publications item={item} autor={authors[index]} />}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
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
    backgroundColor: '#f9f9f9',
  },
  separador: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
});

const mapStateToProps = state => ({
  publications: state.reducerAddImagePublicationDownload,
  authors: state.reducerAddAuthorsDownload,
});

const mapDispatchToProps = dispatch => ({
  downloadPublications: () => {
    dispatch(actionDownloadPublications());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
