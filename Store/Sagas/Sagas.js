import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';


const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON())
  .catch(error => error);

const registroEnBaseDeDatos = ({ uid, email, nombre }) => baseDeDatos.ref(`usuarios/${uid}`).set({
  nombre,
  email,
});

function* sagaRegistro(values) {
  try {
    const registro = yield call(registroEnFirebase, values.datos);
    const { email, uid } = registro;
    const { datos: { nombre } } = values;
    yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (error) {
    console.log(error);
  }
}

const loginEnFirebase = ({ correo, password }) => autenticacion.signInWithEmailAndPassword(correo, password)
  .then(success => success)
  .catch(error => error);

function* sagaLogin(values) {
  try {
    const resultado = yield call(loginEnFirebase, values.datos);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

export default function* functionPrimaria() {
  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
}
