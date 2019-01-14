import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';

const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};

const reducers = combineReducers({
  reducerPrueba,
  form,
});

const store = createStore(reducers, applyMiddleware());

export default store;
