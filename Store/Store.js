import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import functionPrimaria from './Sagas/Sagas';
import CONSTANTES from './CONSTANTES';

const reducerSession = (state = null, action) => {
  switch (action.type) {
    case CONSTANTES.ESTABLECER_SESION:
      return action.usuario;
    case CONSTANTES.CERRAR_SESION:
      return null;
    default:
      return state;
  }
};

const reducerImagenSignUp = (state = { image: null }, action) => {
  switch (action.type) {
    case CONSTANTES.CARGAR_IMAGEN_SIGNUP:
      return { image: action.image };
    case CONSTANTES.LIMPIAR_IMAGEN_SIGNUP:
      return { image: null };
    default:
      return state;
  }
};

const reducerImagenPublicacion = (state = { image: null }, action) => {
  switch (action.type) {
    case CONSTANTES.CARGAR_IMAGEN_PUBLICACION:
      return { image: action.image };
    case CONSTANTES.LIMPIAR_IMAGEN_PUBLICACION:
      return { image: null };
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerSession,
  reducerImagenPublicacion,
  reducerImagenSignUp,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimaria);

export default store;
