import { takeEvery, call, select } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';


const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON())
  .catch(error => error);

const registroEnBaseDeDatos = ({
  uid, email, nombre, fotoURL,
}) => baseDeDatos.ref(`usuarios/${uid}`).set({
  nombre,
  email,
  fotoURL,
});

const registroFotoCloudinary = ({ image }) => {
  const { uri, type } = image;
  const splitName = uri.split('/');
  const name = [...splitName].pop();

  const foto = {
    uri,
    type,
    name,
  };

  const formImage = new FormData();
  formImage.append('upload_preset', CONSTANTES.CLOIDINARY_PRESET);
  formImage.append('file', foto);

  return fetch(CONSTANTES.CLOUDINARY_NAME, {
    method: 'POST',
    body: formImage,
  }).then(reponse => reponse.json()).catch(error => error);
};

function* sagaRegistro(values) {
  try {
    const image = yield select(state => state.reducerImagenSignUp);
    const urlFoto = yield call(registroFotoCloudinary, image);
    const fotoURL = urlFoto.secure_url;
    const registro = yield call(registroEnFirebase, values.datos);
    const { email, uid } = registro;
    const { datos: { nombre } } = values;
    yield call(registroEnBaseDeDatos, {
      uid, email, nombre, fotoURL,
    });
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

const escribirAutorPublicaciones = ({ key, uid }) => baseDeDatos.ref(`autor-publicaciones/${uid}`)
  .update({ [key]: true }).then(reponse => reponse.json()).catch(error => error);

const escribirFirebase = ({
  secure_url, width, height, uid,
}, text = '') => baseDeDatos.ref('publicaciones/').push({
  secure_url,
  width,
  height,
  uid,
  text,
}).then(reponse => reponse).catch(error => error);

function* sagaSubirPublicacion({ datos }) {
  try {
    const image = yield select(state => state.reducerImagenPublicacion);
    const user = yield select(state => state.reducerSession);
    const { uid } = user;
    const resultado = yield call(registroFotoCloudinary, image);
    const { secure_url, width, height } = resultado;
    const parametrosImagen = {
      secure_url, width, height, uid,
    };
    const escribirEnFirebase = yield call(escribirFirebase, parametrosImagen, datos.text);
    const { key } = escribirEnFirebase;
    const parametrosDeAutorPublicaciones = { key, uid };
    const resultadoDeAutoresDePublicacion = yield call(escribirAutorPublicaciones, parametrosDeAutorPublicaciones);
  } catch (error) {
    console.log(error);
  }
}

export default function* functionPrimaria() {
  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
  yield takeEvery(CONSTANTES.SUBIR_PUBLICACION, sagaSubirPublicacion);
}
