import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import primaryFunction from './Sagas/Sagas';
import CONSTANTS from './Constants';

const reducerSession = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.ESTABLISH_SESSION:
      return action.user;
    case CONSTANTS.SIGN_OFF:
      return null;
    default:
      return state;
  }
};

const reducerImageSignUp = (state = { image: null }, action) => {
  switch (action.type) {
    case CONSTANTS.LOAD_IMAGE_SIGNUP:
      return { image: action.image };
    case CONSTANTS.CLEAN_IMAGE_SIGNUP:
      return { image: null };
    default:
      return state;
  }
};

const reducerImagePublication = (state = { image: null }, action) => {
  switch (action.type) {
    case CONSTANTS.LOAD_IMAGE_PUBLICATION:
      return { image: action.image };
    case CONSTANTS.CLEAN_IMAGE_PUBLICATION:
      return { image: null };
    default:
      return state;
  }
};

const reducerAddImagePublicationDownload = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.ADD_PUBLICATIONS_STORE:
      return [...state, ...action.publications];
    default:
      return state;
  }
};

const reducerAddAuthorsDownload = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.ADD_AUTHORS_STORE:
      return [...state, ...action.autores];
    default:
      return state;
  }
};

const reducerUploadStatusPublication = (state = { status: null }, action) => {
  switch (action.type) {
    case CONSTANTS.SUCCESS_UP_PUBLICATION:
      return { status: CONSTANTS.SUCCESS };
    case CONSTANTS.ERROR_UP_PUBLICACION:
      return { status: CONSTANTS.ERROR };
    case CONSTANTS.CLEAN_UP_PUBLICACION:
      return { status: null };
    default:
      return state;
  }
};


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerSession,
  reducerImagePublication,
  reducerImageSignUp,
  reducerAddImagePublicationDownload,
  reducerAddAuthorsDownload,
  reducerUploadStatusPublication,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(primaryFunction);

export default store;
