import {
  takeEvery, call, select, put, all,
} from 'redux-saga/effects';
import { authentication, database } from '../Services/Firebase';
import CONSTANTS from '../Constants';
import {
  actionAddPublicationsStore, actionAddAuthorsStore, actionSuccessUploadPublication, actionErrorUploadPublication,
} from '../Actions';


const registryInFirebase = values => authentication
  .createUserWithEmailAndPassword(values.email, values.password)
  .then(success => success.user.toJSON())
  .catch(error => error);

const registryInDataBase = ({
  uid, email, name, photoURL,
}) => database.ref(`users/${uid}`).set({
  name,
  email,
  photoURL,
});

const registryPhotoCloudinary = ({ image }) => {
  const { uri, type } = image;
  const splitName = uri.split('/');
  const name = [...splitName].pop();

  const photo = {
    uri,
    type,
    name,
  };

  const formImage = new FormData();
  formImage.append('upload_preset', CONSTANTS.CLOIDINARY_PRESET);
  formImage.append('file', photo);

  return fetch(CONSTANTS.CLOUDINARY_NAME, {
    method: 'POST',
    body: formImage,
  }).then(reponse => reponse.json()).catch(error => error);
};

function* sagaRegistry(values) {
  try {
    const image = yield select(state => state.reducerImageSignUp);
    const urlphoto = yield call(registryPhotoCloudinary, image);
    const photoURL = urlphoto.secure_url;
    const registry = yield call(registryInFirebase, values.data);
    const { email, uid } = registry;
    const { data: { name } } = values;
    yield call(registryInDataBase, {
      uid, email, name, photoURL,
    });
  } catch (error) {
    console.log(error);
  }
}

const loginInFirebase = ({ email, password }) => authentication.signInWithEmailAndPassword(email, password)
  .then(success => success)
  .catch(error => error);

function* sagaLogin(values) {
  try {
    yield call(loginInFirebase, values.data);
  } catch (error) {
    console.log(error);
  }
}

const writeAuthorPublications = ({ key, uid }) => database.ref(`autor-publications/${uid}`)
  .update({ [key]: true }).then(reponse => reponse.json()).catch(error => error);

const writeFirebase = ({
  secure_url, width, height, uid,
}, text = '') => database.ref('publications/').push({
  secure_url,
  width,
  height,
  uid,
  text,
}).then(reponse => reponse).catch(error => error);

function* sagaUploadPublications({ data }) {
  try {
    const image = yield select(state => state.reducerImagePublication);
    const user = yield select(state => state.reducerSession);
    const { uid } = user;
    const result = yield call(registryPhotoCloudinary, image);
    const { secure_url, width, height } = result;
    const parametersImage = {
      secure_url, width, height, uid,
    };
    const writeFirebaseResult = yield call(writeFirebase, parametersImage, data.text);
    const { key } = writeFirebaseResult;
    const parametersofAutorpublications = { key, uid };
    yield call(writeAuthorPublications, parametersofAutorpublications);
    yield put(actionSuccessUploadPublication());
  } catch (error) {
    console.log(error);
    yield put(actionErrorUploadPublication());
  }
}

const downloadPublicationsFromFirebase = () => database
  .ref('publications/')
  .once('value')
  .then((snapshot) => {
    const publications = [];
    snapshot.forEach((childSnapshot) => {
      const { key } = childSnapshot;
      const publication = childSnapshot.val();
      publication.key = key;
      publications.push(publication);
    });
    return publications;
  })
  .catch(error => error);

const downloadAuthor = uid => database
  .ref(`users/${uid}`)
  .once('value')
  .then(snapshot => snapshot.val())
  .catch(error => error);

function* sagaDownloadpublications() {
  try {
    const publications = yield call(downloadPublicationsFromFirebase);
    const authors = yield all(publications.map(publication => call(downloadAuthor, publication.uid)));
    yield put(actionAddAuthorsStore(authors));
    yield put(actionAddPublicationsStore(publications));
  } catch (error) {
    console.log(error);
  }
}

export default function* primaryFunction() {
  yield takeEvery(CONSTANTS.REGISTRY, sagaRegistry);
  yield takeEvery(CONSTANTS.LOGIN, sagaLogin);
  yield takeEvery(CONSTANTS.UP_PUBLICATION, sagaUploadPublications);
  yield takeEvery(CONSTANTS.DOWNLOAD_PUBLICATION, sagaDownloadpublications);
}
