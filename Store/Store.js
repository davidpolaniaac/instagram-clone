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

const reducerAgregarPublicacionDescargadas = (state = [], action) => {
  switch (action.type) {
    case CONSTANTES.AGREGAR_PUBLICACIONES_STORE:
      return [...state, ...action.publicaciones];
    case CONSTANTES.LIMPIAR_IMAGEN_PUBLICACION:
      return [];
    default:
      return state;
  }
};

const reducerAgregarAutoresDescargados = (state = [], action) => {
  switch (action.type) {
    case CONSTANTES.AGREGAR_AUTORES_STORE:
      return [...state, ...action.autores];
    case CONSTANTES.LIMPIAR_IMAGEN_PUBLICACION:
      return [];
    default:
      return state;
  }
};

const reducerEstadoDeSubirPublicacion = (state = { estado: null }, action) => {
  switch (action.type) {
    case CONSTANTES.EXITO_SUBIR_PUBLICACION:
      return { estado: 'EXITO' };
    case CONSTANTES.ERROR_SUBIR_PUBLICACION:
      return { estado: 'ERROR' };
    case CONSTANTES.LIMPIAR_SUBIR_PUBLICACION:
      return { estado: null };
    default:
      return state;
  }
};


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerSession,
  reducerImagenPublicacion,
  reducerImagenSignUp,
  reducerAgregarPublicacionDescargadas,
  reducerAgregarAutoresDescargados,
  reducerEstadoDeSubirPublicacion,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimaria);

export default store;
