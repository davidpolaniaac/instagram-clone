import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON())
  .catch(error => error);

const registroEnBaseDeDatos = ({ uid, email, nombre }) => baseDeDatos.ref(`usuarios/${uid}`).set({
  nombre,
  email,
});

function* generadoraRegistro(values) {
  try {
    const registro = yield call(registroEnFirebase, values.datos);
    const { email, uid } = registro;
    const { datos: { nombre } } = values;
    yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (error) {
    console.log(error);
  }
}

export default function* functionPrimaria() {
  yield takeEvery('REGISTRO', generadoraRegistro);
}
