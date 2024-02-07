import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import loggerMiddleware from '../middlewares/loggerMiddleware';
import {thunk} from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(loggerMiddleware, thunk)
  )
);

export default store;
