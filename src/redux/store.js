import { createStore } from 'redux'

import { applyMiddleware } from 'redux'

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleWares = [logger];

const store = createStore (rootReducer, applyMiddleware( ...middleWares));

export default store;