import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  const logger = createLogger();
  return (createStore(
    rootReducer,
    initialState, compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant(), logger), window.devToolsExtension ? window.devToolsExtension() : f => f
    )));
}
