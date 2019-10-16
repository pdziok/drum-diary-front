import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import restMiddlewareCreator from 'redux-fetch-middleware';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/rootReducer';

const middleware = [thunk, restMiddlewareCreator()];

export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );
}
