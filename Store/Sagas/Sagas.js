import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion } from '../Servicios/Firebase';

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.toJSON())
  .catch(error => error);

function* generadoraRegistro(values) {
  try {
    const registro = yield call(registroEnFirebase, values.datos);
  } catch (error) {
    console.log(error);
  }
}

export default function* functionPrimaria() {
  yield takeEvery('REGISTRO', generadoraRegistro);
}
