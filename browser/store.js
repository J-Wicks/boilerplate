import { createStore, applyMiddleware } from 'redux';
import yourReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  yourReducer,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
);

export default store;