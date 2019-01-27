import React, { Component } from 'react';
import {
  StyleSheet, View, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { actionDescargarPublicaciones } from '../../Store/ACCIONES';
import Publicacion from './Publicacion';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.descargarPublicaciones();
  }

  render() {
    const { publicaciones, autores } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={publicaciones}
          renderItem={({ item, index }) => <Publicacion item={item} autor={autores[index]} />}
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
  publicaciones: state.reducerAgregarPublicacionDescargadas,
  autores: state.reducerAgregarAutoresDescargados,
});

const mapDispatchToProps = dispatch => ({
  descargarPublicaciones: () => {
    dispatch(actionDescargarPublicaciones());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
